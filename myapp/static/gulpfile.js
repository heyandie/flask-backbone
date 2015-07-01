'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var gulpSequence = require('gulp-sequence');


gulp.task('less', function() {
  return gulp.src('app/styles/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('app/styles'));
});

gulp.task('serve', ['build'], function() {
  gulp.watch('app/styles/**/*.less', ['less']);
});

gulp.task('build', function(callback) {
  var tasks =  ['less'];
  tasks.push(callback);
  gulpSequence.apply(this, tasks);
});

gulp.task('default', function() {
  gulp.start('build');
});
