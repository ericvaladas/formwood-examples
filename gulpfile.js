const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const sass = require('gulp-sass');

function pack(filename) {
  return webpackStream({
    output: {
      filename: filename
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  });
}

function buildJavaScript() {
  return gulp.src('./src/js/*.js')
    .pipe(pack('app.js'))
    .pipe(gulp.dest('./dist/js'));
}

function watchJavaScript() {
  return gulp.watch('./src/js/**/*.js', ['build']);
}

function buildCss() {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

function watchSass() {
  gulp.watch('./src/sass/**/*.scss', ['css']);
}

gulp.task('js', buildJavaScript);
gulp.task('css', buildCss);
gulp.task('build', ['js', 'css']);
gulp.task('watch-js', watchJavaScript);
gulp.task('watch-sass', watchSass);
gulp.task('watch', ['watch-js', 'watch-sass']);
gulp.task('default', ['build']);
