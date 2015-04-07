// Gulpfile.js
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');
var flow = require('gulp-flowtype');

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint());
});

gulp.task('typecheck', function () {
  gulp.src('./**/*.js')
    .pipe(flow({
        all: false,
        weak: false,
        declarations: './declarations',
        killFlow: false,
        beep: true,
        abort: false
    }));
});

gulp.task('outdated', shell.task([
  'npm outdated --depth 0'
]));

gulp.task('default', ['outdated', 'lint', 'typecheck'], function () {
  nodemon({ script: 'index.js', ext: 'html js'})
    .on('change', ['outdated','lint', 'typecheck'])
    .on('restart', function () {
      console.log('restarted!');
    });
});
