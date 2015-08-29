var gulp = require("gulp");
var del = require("del");
var stdio = require('stdio');
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var watchify = require("watchify");
var reactify = require("reactify");
var babelify = require("babelify");
var gulpif = require("gulp-if");
var uglify = require("gulp-uglify");
var streamify = require("gulp-streamify");
var notify = require("gulp-notify");
var gutil = require("gulp-util");
var serve = require("gulp-serve");
var livereload = require("gulp-livereload");
var preprocess = require("gulp-preprocess");

var options = stdio.getopt({
    'production': { key: 'p', description: 'Production mode', "defualt": false }
});

var dependencies = [
    "react" // react is part of this boilerplate
];

var paths = {
  src: "./src/",
  dist: "./dist/",
  main: "main.js",
  vendors: "vendors.js"
};

var browserifyTask = function (params) {

  /* First we define our application bundler. This bundle is the
     files you create in the "app" folder */
  var appBundler = browserify({
      entries: [params.src], // The entry file, normally "main.js"
      transform: [babelify, reactify], // Convert JSX style
      debug: params.development, // Sourcemapping
      cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
  });

  /* We set our dependencies as externals of our app bundler.
     For some reason it does not work to set these in the params above */
  appBundler.external(params.development ? dependencies : []);

  /* This is the actual rebundle process of our application bundle. It produces
     a "main.js" file in our "build" folder. */
  var rebundle = function () {
    var start = Date.now();
    console.log("Building app bundle");
    appBundler.bundle()
      .on("error", gutil.log)
      .pipe(source(paths.main))
      .pipe(gulpif(!params.development, streamify(uglify())))
      .pipe(gulp.dest(params.dest))
      .pipe(gulpif(params.development, livereload({ start: true }))) // It notifies livereload about a change if you use it
      .pipe(notify(function () {
        console.log("App bundle built in " + (Date.now() - start) + "ms");
      }));
  };

  /* When we are developing we want to watch for changes and
     trigger a rebundle */
  if (params.development) {
    appBundler = watchify(appBundler);
    appBundler.on("update", rebundle);
  }

  // And trigger the initial bundling
  rebundle();

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
  console.log("Building vendors bundle");
  vendorsBundler.bundle()
    .on("error", gutil.log)
    .pipe(source(paths.vendors))
    .pipe(gulpif(!params.development, streamify(uglify())))
    .pipe(gulp.dest(params.dest))
    .pipe(notify(function () {
      console.log("Vendors bundle built in " + (Date.now() - start) + "ms");
    }));
};

var buildHtml = function(params) {
    gulp.src("./src/*.html")
      .pipe(preprocess({ context: { NODE_ENV: params.development ? "development" : "production" }}))
      .pipe(gulp.dest(paths.dist));
};

var htmlTask = function() {
    buildHtml({
      development: !options.production
    });
};

gulp.task("clear", function(callback) {
  del(["app"], callback);
});

gulp.task("html", ["clear"], htmlTask);

gulp.task("watch", function() {
  gulp.watch("src/*.html", htmlTask);
});

gulp.task("scripts", ["clear"], function() {
  browserifyTask({
    development: !options.production,
    src: "./src/scripts/main.js",
    dest: "./dist/scripts"
  });
});

gulp.task("serve", serve(paths.dist));

gulp.task("default", ["html", "scripts", "watch"]);
