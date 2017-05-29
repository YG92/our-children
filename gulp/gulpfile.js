var gulp = require('gulp'),
  sass = require('gulp-sass');
  browserSync = require('browser-sync');
  del = require('del');

gulp.task('sass', function(){
  return gulp.src('app/sass/**/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['sass'], function() {
  var buildCss = gulp.src('app/css/main.css')
  .pipe(gulp.dest('../static'))

  var buildHtml = gulp.src('app/*.html')
  .pipe(gulp.dest('../templates'))
})
