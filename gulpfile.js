const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const input = './stylesheets/**/*.scss';
const output = './stylesheets';
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
}

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
  gulp.watch('stylesheets/**/*.scss', ['sass']);
});
