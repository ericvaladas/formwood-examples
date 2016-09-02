const gulp = require('gulp');
const webpackStream = require('webpack-stream');

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
  return gulp.src('./src/js/app.js')
    .pipe(pack('app.js'))
    .pipe(gulp.dest('./dist/js'));
}

function watchJavaScript() {
  return gulp.watch('./src/js/**/*.js', ['build']);
}

gulp.task('build', buildJavaScript);
gulp.task('watch', watchJavaScript);
gulp.task('default', ['build']);
