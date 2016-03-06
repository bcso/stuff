var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', ['serve'], function(){
	return;
});

gulp.task('serve', function(){
	console.log('serving');
	browserSync({
		port: 5000,
		server:{
			baseDir: ["app"]
		}
	})
	return;
});