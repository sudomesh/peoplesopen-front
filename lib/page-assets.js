// This is for copying over assets that are grouped
// according to the one page on which they are used.

const gulp = require('gulp');

module.exports = () => gulp.src(`./src/assets/page-assets/**/*`)
  .pipe(gulp.dest('./web/assets/page-assets'));
