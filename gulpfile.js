var _ = require('lodash');
var gulp = require('gulp');
var del = require('del');
var stdio = require('stdio');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var babelify = require('babelify');
var ghPages = require('gulp-gh-pages');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var serve = require('gulp-serve');
var livereload = require('gulp-livereload');
var preprocess = require('gulp-preprocess');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var pkg = require('./package.json');

var options = stdio.getopt({
    'production': { key: 'p', description: 'Production mode', 'defualt': false }
});

var dependencies = _.keys(pkg.dependencies);

var paths = {
  src: './src/',
  dist: './dist/',
  main: 'main.js',
  vendors: 'vendors.js'
};

var buildApp = function(params) {
  /* First we define our application bundler. This bundle is the
     files you create in the 'app' folder */
  var appBundler = browserify({
      entries: ['./src/scripts/main.js'], // The entry file, normally 'main.js'
      transform: [babelify, reactify], // Convert JSX style
      debug: params.development, // Sourcemapping
      cache: {}, packageCache: {}, fullPaths: params.development // Requirement of watchify
  });

  /* We set our dependencies as externals of our app bundler.
     For some reason it does not work to set these in the params above */
  appBundler.external(params.development ? dependencies : []);

  /* This is the actual rebundle process of our application bundle. It produces
     a 'main.js' file in our 'build' folder. */
  var rebundle = function () {
    var start = Date.now();
    console.log('Building app bundle');
    return appBundler.bundle()
      .on('error', gutil.log)
      .pipe(source(paths.main))
      .pipe(gulpif(!params.development, streamify(uglify())))
      .pipe(gulp.dest('./dist/scripts/'))
      .pipe(gulpif(params.development, livereload({ start: true }))) // It notifies livereload about a change if you use it
      .pipe(notify(function () {
        console.log('App bundle built in ' + (Date.now() - start) + 'ms');
      }));
  };

  /* When we are developing we want to watch for changes and
     trigger a rebundle */
  if (params.development) {
    appBundler = watchify(appBundler);
    appBundler.on('update', rebundle);
  }

  // And trigger the initial bundling
  return rebundle();
};

var buildVendors = function (params) {
  if (params.development) {
  /* And now we have to create our third bundle, which are our external dependencies,
     or vendors. This is React JS, underscore, jQuery etc. We only do this when developing
     as our deployed code will be one file with all application files and vendors */
    var vendorsBundler = browserify({
      debug: true, // It is nice to have sourcemapping when developing
      require: dependencies
    });

    /* We only run the vendor bundler once, as we do not care about changes here,
       as there are none */
    var start = new Date();
    console.log('Building vendors bundle');
    return vendorsBundler.bundle()
      .on('error', gutil.log)
      .pipe(source(paths.vendors))
      .pipe(gulpif(!params.development, streamify(uglify())))
      .pipe(gulp.dest('./dist/scripts/'))
      .pipe(notify(function () {
        console.log('Vendors bundle built in ' + (Date.now() - start) + 'ms');
      }));
  }
};

var appScriptsTask = function() {
    return buildApp({
      development: !options.production
    });
};

var vendorsScriptsTask = function() {
    return buildVendors({
      development: !options.production
    });
};

var buildHtml = function(params) {
    gulp.src('./src/*.html')
      .pipe(preprocess({ context: { NODE_ENV: params.development ? 'development' : 'production' }}))
      .pipe(gulp.dest(paths.dist))
      .pipe(gulpif(params.development, livereload({ start: true })));
};

var htmlTask = function() {
    return buildHtml({
      development: !options.production
    });
};

var buildStyles = function(params) {
  gulp.src('./src/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(gulpif(params.development, livereload({ start: true })));
};

var stylesTask = function() {
  return buildStyles({
    development: !options.production
  });
};

gulp.task('clear', function(callback) {
  del(['./dist/'], callback);
});

gulp.task('html', ['clear'], htmlTask);

gulp.task('styles', ['clear'], stylesTask);

gulp.task('app-scripts', ['clear'], appScriptsTask);
gulp.task('vendors-scripts', ['clear'], vendorsScriptsTask);
gulp.task('scripts', ['app-scripts', 'vendors-scripts']);

gulp.task('images', ['clear'], function () {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('build', ['html', 'scripts', 'images', 'styles']);

gulp.task('serve', serve(paths.dist));

gulp.task('watch', function() {
  gulp.watch('src/*.html', htmlTask);
  gulp.watch('src/styles/*.scss', stylesTask);
});

gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      remoteUrl: 'https://github.com/pawelwieladek/pawelwieladek.github.io.git',
      branch: 'master'
    }));
});

gulp.task('default', ['build', 'watch']);
