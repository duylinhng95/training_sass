var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
            .pipe(sass({
		      includePaths: ['node_modules']
		    }))
            .pipe(gulp.dest('app/css'))
})

gulp.task('watch', function(){
  gulp.watch('app/scss/*.scss', gulp.series('sass')); 
})