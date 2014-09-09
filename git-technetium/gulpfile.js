'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    gulp.src([
            'server.js',
            'config.js',
            'routes/*.js',
            'public/scripts/**/*.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
