'use strict';
var gulp        = require('gulp');
var autoprefix  = require('gulp-autoprefixer');
var plumber     = require('gulp-plumber');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var minifyCSS   = require('gulp-minify-css');
var rename      = require('gulp-rename'); // to rename any file


//SASSのコンパイル
gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(plumber()) // コンパイルでコケても終了しない
        .pipe(sass())
        .pipe(gulp.dest('css/'))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('css/'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('css/'));
});

//LESSとjsの変更監視
gulp.task("watch", function() {
    //LESSファイルの変更監視
    gulp.watch('./sass/**/*.scss', function(event) {
        gulp.run('sass');
    });
    //jsファイルの変更監視
    // gulp.watch('js/**/*.js', function(event) {
    //     gulp.run('uglify');
    // });
});

gulp.task('default', ['sass','watch']);