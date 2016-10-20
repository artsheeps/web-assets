var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var stripCode = require('gulp-strip-code');
var tinypng = require('gulp-tinypng-compress') //image compression


gulp.task('svgo', function () {
    return gulp.src('*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            },
            plugins: [{
                removeDoctype: true
            }, {
                removeComments: true
            }, {
                removeUselessStrokeAndFill: true
            }, {
                cleanupNumericValues: {
                    floatPrecision: 2
                }
            }]
        }))
        //.pipe(stripCode({
        //      pattern: /fill="......."/g,
        //}))
        .pipe(gulp.dest('./out'));
});

gulp.task('tinypng', function () {
    gulp.src('*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'zhA5zX1sf0JeJNE7Hxff5i6PjNCShEB-',
            sigFile: '.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('./out/images/'));
});

gulp.task('default', ['svgo', 'tinypng']);
//gulp.task('default', ['svgo']);
