// Gulpfile.js
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint());
});

gulp.task('outdated', shell.task([
  'npm outdated --depth 0'
]));

gulp.task('default', ['outdated', 'lint'], function () {
  nodemon({ script: 'index.js', ext: 'html js'})
    .on('change', ['outdated','lint'])
    .on('restart', function () {
      console.log('restarted!');
    });
});
