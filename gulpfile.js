var gulp = require("gulp");
var minify = require('gulp-minify');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var conf  ={
    src:"src",
    dest:"build",
    tmp:".tmp"
};

gulp.task("compress:js",function(){
    return gulp.src(conf.src+'/*.js')
        .pipe(minify())
        .pipe(gulp.dest(conf.tmp));

});

gulp.task("copy",['compress:js'],function(){
    //js
    return gulp.src(conf.tmp+"/*-min.js")
        .pipe(gulp.dest(conf.dest))
});


gulp.task("clean:js",["compress:js","copy"],function(){
    return gulp.src(conf.tmp)
        .pipe(vinylPaths(del))
        //.pipe(gulp.dest(conf.dest))
});


gulp.task("default",["compress:js","copy","clean:js"]);