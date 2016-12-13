var gulp = require('gulp'), // Сообственно Gulp JS
    livereload = require('gulp-livereload'), // Livereload для Gulp
    connect = require('gulp-connect'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    replace = require('gulp-replace');

var REMOTE_API_URL = "'http://arena4game.ru/api/'",
    LOCAL_API_URL = "'http://localhost:8080/api/'",
    API_REGEXP = "\\/\\*REPLACE_API_START.*";

function withComments(url){
    return "/*REPLACE_API_START*/" + url + "/*REPLACE_API_END*/"
}


gulp.task('http-server', function () {
    connect.server({
        root: ['dist/', 'dist'],
        port: argv.p || 63342,
        livereload: true
    });

    console.log('Server listening on http://localhost:' + (argv.p || 63342));
});

gulp.task('clone', function(){
    return gulp.src('./app/**/*.*')
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});

gulp.task('api', function () {
    return gulp.src('./dist/**/core.const.js')
        .pipe(gulpif(argv.m == 'l', replace(new RegExp(API_REGEXP), withComments(LOCAL_API_URL))))
        .pipe(gulpif(argv.m == 'r', replace(new RegExp(API_REGEXP), withComments(REMOTE_API_URL))))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});

gulp.task('clone-with-api', ['clone'], function(){
    gulp.run('api')
});


gulp.task('watch', ['clone'], function () {
    gulp.run('api');
    gulp.run('http-server');

    gulp.watch('app/**/*.*', function() {
        gulp.run('clone-with-api');
    });
});
