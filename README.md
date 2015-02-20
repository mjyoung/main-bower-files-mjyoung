## What it does

Provides an array of installed Bower JS and CSS files for uglify/minification in Grunt.

## Installation

`npm install icr-main-bower-files --save-dev`

## Usage

Within `Gruntfile.coffee`:

```
module.exports = (grunt) ->

	bowerFile = require('./bower.json')
	bowerMainJsFiles =  require('icr-main-bower-files')(bowerFile, 'js')
	bowerMainCssFiles = require('icr-main-bower-files')(bowerFile, 'css')
```

uglify:
```
uglify:
	options:
		mangle: false
	dist:
		files:
			'<%= yeoman.dist %>/scripts/scripts.js': ['.tmp/scripts/{,*/}*.js'] # application scripts
			'<%= yeoman.dist %>/scripts/vendor.js': bowerMainJsFiles # vendor scripts
```

cssmin:
```
cssmin:
	dist:
		files:
			'<%= yeoman.dist %>/styles/main.css': ['.tmp/styles/{,*/}*.css']
			'<%= yeoman.dist %>/styles/vendor.css': bowerMainCssFiles
```