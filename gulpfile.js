const { src, dest, watch, series } = require("gulp")
const concat = require("gulp-concat")
const terser = require("gulp-terser")
const cleanCSS = require("gulp-clean-css")

function jsTask() {
  return src("index.js")
    .pipe(concat("main.min.js"))
    .pipe(terser())
    .pipe(dest("dist/js"))
}

function cssTask() {
  return src("css/project.css")
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(dest("dist/css"))
}

function imagesTask() {
  return src("images/**/*.*")
    .pipe(dest("dist/images"))
}

function fontsTask() {
  return src("webfonts/**/*.*")
    .pipe(dest("dist/webfonts"))
}

function watchTask() {
  watch("index.js", jsTask)
  watch("css/**/*.css", cssTask)
  watch("images/**/*.*", imagesTask)
  watch("webfonts/**/*.*", fontsTask)
}

exports.default = series(jsTask, cssTask, imagesTask, fontsTask, watchTask)
