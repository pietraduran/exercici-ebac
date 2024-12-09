import gulp from 'gulp';
import sass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import terser from 'gulp-terser';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


gulp.task('sass', () => {
    return gulp.src('sass/**/*.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(gulp.dest('dist/css')); 
});

gulp.task('images', () => {
    return gulp.src('imagens/**/*') 
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images')); 
});


gulp.task('scripts', () => {
    return gulp.src('js/**/*.js') 
        .pipe(terser()) 
        .pipe(gulp.dest('dist/js')); 
});


gulp.task('default', gulp.series('sass', 'images', 'scripts'));
