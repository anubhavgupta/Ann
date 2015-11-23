var gulp = require("gulp");
var minify = require('gulp-minify');

var conf  ={
    src:"src",
    dest:"build",
    tmp:".tmp"
};

gulp.task("compress:js",function(){
    return gulp.src(conf.src+'/*.js')
        .pipe(minify())
        .pipe(gulp.dest(conf.dest));

});


gulp.task("default",["compress:js"]);