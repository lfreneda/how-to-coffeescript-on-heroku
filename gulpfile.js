var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('default', ['build']);
gulp.task('build', ['compileCoffee']);
gulp.task('stage', ['build']);

gulp.task('compileCoffee', function() {
    return gulp.src('./src/**/*.coffee')
        .pipe(plugins.cached('compileCoffee'))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.coffee())
        .pipe(plugins.sourcemaps.write()).on('error', function(err) { return console.log(err.toString()); })
        .pipe(gulp.dest('./target'));
});

