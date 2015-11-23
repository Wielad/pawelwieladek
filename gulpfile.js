var gulp = require('gulp');
var githubPages = require('gulp-gh-pages');

gulp.task('publish', function() {
  return gulp.src('./public/**/*')
    .pipe(githubPages({
      remoteUrl: 'https://github.com/pawelwieladek/pawelwieladek.github.io.git',
      branch: 'master'
    }));
});
