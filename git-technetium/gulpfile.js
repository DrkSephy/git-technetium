'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('jshint', function() {
    gulp.src([
            'server.js',
            'config.js',
            'routes/*.js',
            'public/scripts/**/*.js'
        ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});
