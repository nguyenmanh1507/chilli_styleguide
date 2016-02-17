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
		.pipe($.jade({
			pretty: true
		}))
		.pipe(gulp.dest('./'))
	;
});

// PostCSS task
gulp.task('css', function() {
	var bem = require('postcss-bem'),
			precss = require('precss'),
			cssnano = require('cssnano'),
			processors = [
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
				precss,
				autoprefixer,
				// cssnano,
			]
	;

	return gulp.src('./styles/app.css')
		.pipe($.sourcemaps.init())
		// .pipe($.sass().on('error', $.sass.logError))
		.pipe($.postcss(processors))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('./css'))
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

// Auto insert link or script tag
gulp.task('bower', function() {
	return gulp.src('./index.html')
		.pipe(wiredep())
		.pipe(gulp.dest('./'))
	;
});

// Watcher
gulp.task('watch', function() {
	gulp.watch('./views/**/*.jade', ['templates']);
	gulp.watch('./styles/**/*.css', ['css']);
});
