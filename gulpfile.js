var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    ngConcat = require('gulp-ngconcat'),
    destination = './dist';

        gulp.task('js', function () {
            gulp.src('./app/**/*.js')
                .pipe(ngConcat('bundle.js'))
                .pipe(gulp.dest(destination))
        });
        gulp.task('css', function () {
            gulp.src('./app/**/*.css')
                .pipe(concat('bundle.css'))
                .pipe(gulp.dest(destination))
        })

        gulp.task('default', ['js','css']);

        gulp.task('serve', function () {
            browserSync({
                server: {
                    baseDir: './'
                },
                notify: false
            });

            gulp.watch("app/**/*.js", ['js']);
            gulp.watch("app/**/*.css", ['css']);
            gulp.watch("./index.html", {cwd: './'}, browserSync.reload);
            gulp.watch("./app/**/*.*", {cwd: './'}, browserSync.reload);

        });

