'use strict';

var bump = require('gulp-bump');
var config = require('../config');

module.exports = function (gulp) {
  gulp.task('bump:patch', function () {
    return gulp.src(config.manifests)
      .pipe(bump({type: 'patch'}))
      .pipe(gulp.destination('./'));
  });

  gulp.task('bump:minor', function () {
    return gulp.src(config.manifests)
      .pipe(bump({type: 'minor'}))
      .pipe(gulp.destination('./'));
  });

  gulp.task('bump:major', function () {
    return gulp.src(config.manifests)
      .pipe(bump({type: 'major'}))
      .pipe(gulp.destination('./'));
  });
};
