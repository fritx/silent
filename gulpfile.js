/**
 * Created by fritx on 6/2/14.
 */

'use strict'

var gulp = require('gulp')
var eslint = require('gulp-eslint')
var eol = require('gulp-eol')

gulp.task('eslint', ['eol'], function () {
  return gulp.src([
      'blog/vendor/blog.js',
      '*.js'
    ]).pipe(eslint())
    .pipe(eslint.format())
})

gulp.task('eol', function () {
  return gulp.src([
      '**/*.{json,md,js,css,html}',
      '.{gitignore,npmignore,eslintrc}',
      '!**/*.min.*',
      '!node_modules/**'
    ]).pipe(eol('\n'))
    .pipe(gulp.dest('.'))
})

gulp.task('default', ['eol', 'eslint'])
