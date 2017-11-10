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
	DIST: 'public/dist',

	STYLES: 'public/scss/style.scss',
	SCRIPTS: 'public/js/**/*.js',

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

//Scripts
gulp.task('scripts', () => {
	console.log('starting scripts task');

	return gulp.src(PATH.SCRIPTS)
		.pipe(plumber(function(err) {
			console.log('Error in scripts');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(babel({presets: ['env']}))
		.pipe(uglify())
		.pipe(concat('script.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(PATH.DIST))
		.pipe(livereload());
});

// Delete files and folders
gulp.task('clean', () => {
	return del.sync([PATH.DIST]);
});

// Export (zip)
gulp.task('export', () => {
	return gulp.src('./public/**/*')
		.pipe(zip('project.zip'))
		.pipe(gulp.dest('./'));
});

//Default
gulp.task('default', ['styles', 'scripts'], () => {
	console.log("starting default task");
});

//watch
gulp.task('watch', ['default'], () => {
	console.log("starting watch task");
	require('./app.js');
	livereload.listen();
	gulp.watch(PATH.SCRIPTS, ['scripts']);
	gulp.watch(PATH.STYLES, ['styles']);
});