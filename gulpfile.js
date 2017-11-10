const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');

const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const del = require('del');

const zip = require('gulp-zip');


//File paths
const PATH = {
	STYLES: 'public/scss/style.scss',
	DIST: 'public/dist',
}


//Styles
gulp.task('styles', () => {
	return gulp.src(PATH.STYLES)
		.pipe(plumber(function(err) {
			console.log('Error in styles');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(autoprefixer({ browsers: ['last 2 versions']}))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(PATH.DIST))
		.pipe(livereload());
});