# Tools use

* [PostCSS](https://github.com/postcss/postcss): Transforming styles with JS plugins
* [Gulp](gulpjs.com): Automate and enhance workflow

# Chilli Styleguide

Copy design style from [Money Advice Service (MAS) style guide](https://www.moneyadviceservice.org.uk/en/styleguide).

## Typography

__Font Family__

* Primary font (body text): Source Sans Pro
* Secondary font (heading text): Alegreya
* Special font: AguafinaScript Regular

__Text variants__

* Text mute
* Menu text link
* Dish name
* Dish description
* Meal title
* Article heading
* Article meta info
* Text link

__Lists__

* No bullet List
* Bullet list
* Sidebar list with bullet
* Sidebar list no bullet

__Forms__

Form components will have to type

* Form in light bg
* Form in dark bg

Form components

* Input field
* Checkbox, Radio button
* Select
* Textarea

__Buttons__

* Button in light bg
* Button in dark bg
* Success, danger, warning

__Icons__

Use [FontAwesome](fortawesome.github.io/Font-Awesome/).

### Grid system

Use [Foundation Grid](http://foundation.zurb.com/) or [LostGrid](https://github.com/peterramsing/lost)

# Notes

:sunny: __Keep project simple as possible__ :sunny:

## Gulp plugins

* [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins): Automatically load any gulp plugins in your package.json.
* [gulp-postcss](https://www.npmjs.com/package/gulp-postcss/): gulp plugin to pipe CSS through several processors, but parse CSS only once.
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber): Prevent pipe breaking caused by errors from gulp plugins.
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps): Source map support for Gulp.js.
* [wiredep](https://www.npmjs.com/package/wiredep): Wire Bower dependencies to your source code.
* [gulp-jade](https://www.npmjs.com/package/gulp-jade): Compile Jade templates
.
* [browser-sync](https://github.com/Browsersync/browser-sync): Keep multiple browsers & devices in sync when building websites.
* [precss](https://github.com/jonathantneal/precss): Use Sass-like markup in your CSS.

## PostCSS plugins

* [autoprefixer](https://github.com/postcss/autoprefixer): Parse CSS and add vendor prefixes to rules by Can I Use.
* [postcss-bem](https://github.com/ileri/postcss-bem): PostCSS plugin implementing BEM as at-rules.
* [postcss-scss](https://github.com/jonathantneal/precss): tool that allows you to use Sass-like markup in your CSS files.
* [cssnano](https://github.com/ben-eb/cssnano): A modular minifier, built on top of the PostCSS ecosystem.
* [stylelint](https://github.com/stylelint/stylelint): A mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.
* [postcss-font-magician](https://github.com/jonathantneal/postcss-font-magician): Magically generate all the __@font-face__ rules.
* [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem): A plugin for PostCSS that generates rem units from pixel units.

## CSS Guide

* Class naming follow BEM method.
* Structure CSS follow [SMACSS](https://smacss.com/) method.
* Using relative unit (em, rem).

## Misc

* CSS class for styleguide need prefix (ex: sg-something) to avoid conflict with components's class.
