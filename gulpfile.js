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