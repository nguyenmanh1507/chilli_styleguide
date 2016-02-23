'use strict';

var gulp            = require('gulp'),
		gulpLoadPlugins = require('gulp-load-plugins'),
		$               = gulpLoadPlugins(),
		wiredep         = require('wiredep').stream,
		browserSync     = require('browser-sync').create(),
		autoprefixer    = require('autoprefixer')
;

// Compile Jade to HTML
gulp.task('templates', function() {
	return gulp.src('./views/index.jade')
		.pipe($.plumber())
		.pipe($.jade({
			pretty: true
		}))
		.pipe(gulp.dest('./'))
	;
});

gulp.task('templates:partials', function() {
	return gulp.src('./views/components/*.jade')
		.pipe($.plumber())
		.pipe($.jade({
			pretty: true
		}))
		.pipe(gulp.dest('./partials'))
	;
});

// PostCSS task
gulp.task('css', function() {
	var bem           = require('postcss-bem'),
			precss        = require('precss'),
			cssnano       = require('cssnano'),
			fontMagician  = require('postcss-font-magician'),
			pxtorem       = require('postcss-pxtorem'),
			nested        = require('postcss-nested'),
			processors    = [
				precss,
				bem({
					style: 'bem',
					separators: {
						modifier: '--'
					},
					shortcuts: {
						component: 'b',
						descendent: 'e',
						modifier: 'm'
					}
				}),
				nested,
				fontMagician,
				pxtorem({
					rootValue: 16,
					mediaQuery: true
				}),
				autoprefixer,
				// cssnano,
			]
	;

	return gulp.src('./styles/app.css')
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.postcss(processors))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream())
	;
});

// Lint stylesheet
gulp.task('lint:css', function() {
	var stylelint = require('stylelint');

	return gulp.src('./css/app.css')
		.pipe($.postcss([
			stylelint({
				'rules': {
			    'color-no-invalid-hex': true,
			    'declaration-colon-space-after': 'always',
			    'max-empty-lines': 2,
			    'indentation': ['tab', {
			      'except': ['value']
			    }]
			  }
			})
		]))
		.pipe(gulp.dest('./css'))
	;
});

// Lint scripts
gulp.task('js', function() {
	return gulp.src('./scripts/**/*.js')
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.copy('./js', {prefix: 1}))
	;
});

// Minify js
// gulp.task('uglify', function() {
// 	return gulp.src('./scripts/app.js')
// 		.pipe($.uglify())
// 		.pipe(gulp.dest('./js'))
// 	;
// });

// Copy styleguide.js from scripts to js folder
// because uglify cause error when minify angularjs code (not sure).
// gulp.task('copy:js', function() {
// 	return gulp.src('./scripts/styleguide.js')
// 		.pipe($.copy('./js', {prefix: 1}))
// 	;
// });

// Reload browser after lint:js complete
gulp.task('js-watch', ['js'], browserSync.reload);

// Auto insert link or script tag
gulp.task('bower', ['templates'], function() {
	return gulp.src('./index.html')
		.pipe(wiredep({
			exclude: ['jquery']
		}))
		.pipe(gulp.dest('./'))
	;
});

// Force bower task run after templates task complete
gulp.task('render', ['bower']);

// Browser sync
gulp.task('serve', ['css', 'templates', 'templates:partials', 'bower', 'js'], function() {
	browserSync.init({
		server: './'
	});

	gulp.watch('./views/index.jade', ['render']);
	gulp.watch('./views/components/*.jade', ['templates:partials']);
	gulp.watch('./styles/**/*.css', ['css']);
	gulp.watch('./scripts/**/*.js', ['js']);
	gulp.watch('./bower.json', ['bower']);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./partials/*.html').on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['serve']);
