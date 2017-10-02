var gulp = require("gulp");
var gutil = require("gulp-util");
var sass = require("gulp-sass");

gulp.task("logga",function(){
    gutil.log("ok");
});

gulp.task("sass",function(){
   return gulp.src('dev/scss/*.scss')
   .pipe(sass().on('error',sass.logError))
   .pipe(gulp.dest('dev/css'));
});

gulp.task('sass:watch',function() {
    gulp.watch('dev/scss/main.scss',['sass']);
})