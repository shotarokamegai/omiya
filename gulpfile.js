const gulp = require("gulp");
const connect = require('gulp-connect');
const notify = require('gulp-notify');
const webpack = require("webpack");
const cleanCSS = require('gulp-clean-css');
const webpackStream = require("webpack-stream");
const fs = require('fs');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require("autoprefixer");
const tailwindcss = require('tailwindcss');
// const webserver = require('gulp-webserver');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss')
const ejs = require("gulp-ejs");
const errorHandler = { errorHandler: notify.onError("Error: <%= error.message %>") };

// 監視　※gulp4の書き方です。
gulp.task('watch', (done) => {
    // gulp.watch(["./**/*.html", "./**/*.css", "./**/*.js"], gulp.task( "sass" ) ); 
  gulp.watch("src/js/**/*.js", gulp.task("js")); // jsディレクトリ以下の.jsファイルの更新を監視
  gulp.watch("src/scss/**/*.scss", gulp.task("sass")); // sassディレクトリ以下の.scssファイルの更新を監視
  gulp.watch("src/ejs/**/*.ejs", gulp.task("ejs")); // ejsディレクトリ以下の.ejsファイルの更新を監視
  // gulp.watch("assets/json/**/*.json", gulp.task("ejs")); // jsonディレクトリ以下の.ejsファイルの更新を監視
  done();
});

// localhost
// gulp.task('connect', (done) => {
//   connect.server({
//     root: './',
//     livereload: true
//   });
//   done();
// });

gulp.task("js", (done) => {
  gulp.src('./src/js/main.js')
    .pipe(plumber(errorHandler))
    .pipe(webpackStream({
      mode: 'none',
      entry: {
        'script': './src/js/main.js'
      },
      output: {
        filename: 'main.js'
      },
      // ローダーの設定
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules\/(?!(swiper|dom7)\/).*/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env"]
              , plugins: ["transform-class-properties"]
            }
          }]
        },
{
  test: /\.(vert|frag|obj)$/i,
  type: 'asset/source'
}
      ]
      },
    }, webpack))
    // .pipe(connect.reload())
    .pipe(gulp.dest('./assets/js/'));
  done();
});
// });

// Sass
gulp.task('sass', () => {
  var pc = gulp.src('./src/scss/style.scss')
    // return gulp.src( 'sass/*.scss' )
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([tailwindcss(), autoprefixer()]))
    // .pipe(webpack())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write('.'))
    // .pipe(connect.reload())
    .pipe(gulp.dest('./assets/css/'));

  return (pc);
});

// EJS
gulp.task('ejs', (done) => {
  gulp.src('./src/ejs/_index.ejs')
    .pipe(ejs())
    .pipe(rename('index.html'))
    // .pipe(connect.reload())
    .pipe(gulp.dest(`./`));
  done();
});

gulp.task('default', gulp.series(gulp.parallel('ejs', 'sass', 'js', 'watch')));