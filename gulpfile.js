var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/minified'))
});

gulp.task('compile', ['sass'], function () {
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./scss/**/*.scss', ['sass']);
})