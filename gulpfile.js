'use strict';

var gulp = require("gulp");
var babel = require("gulp-babel");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jsx = require('gulp-jsx');
// var browserSync = require('browser-sync').create();
// var lint = require('gulp-eslint');
var sass = require('gulp-sass');

var config = {
  paths: {
    dist: './client/dist/',
    src: './client/src/',
    cssSrc: './client/src/css/',
    cssDist: './client/dist/css/',
    js: './client/src/**/*.js',
  }
};

var vendors = [
  'react',
  'bootstrap',
  'jquery'
];

gulp.task('sass', function () {
  gulp.src(config.paths.cssSrc + '*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(gulp.dest('./css'));
    .pipe(gulp.dest(config.paths.cssDist));
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch(config.paths.cssSrc + '*.scss', ['sass']);
});

gulp.task('buildVendors', function () {
  browserify({
    require: vendors,
   // extensions: ['.jsx'],
    debug: false
  })
  .bundle()
  .pipe(source('vendors.js'))
  .pipe(gulp.dest(config.paths.dist));
});

gulp.task('buildApp', function () {

    var stream = browserify({
        entries: [config.paths.src + 'app.js'],
        transform: [babelify],
        // extensions: ['.jsx'],
        // fullPaths: false
        debug: true
    });

    vendors.forEach(function(vendor) {
        stream.external(vendor);
    });

    return stream.bundle()
                 .pipe(source('app.js'))
                 .pipe(gulp.dest(config.paths.dist));

});

gulp.task('watch', [/*'lint', */'buildApp'], function () {
  gulp.watch([config.paths.js], ['buildApp']);
});
