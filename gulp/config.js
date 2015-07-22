'use strict';

module.exports = {
  paths: {
    lib: './lib/**/*.js',
    test: './test/**/*.spec.js',
    gulp: ['./gulpfile.js', './gulp/**/*.js'],
    coverage: 'coverage/**/lcov.info'
  },
  manifests: ['./package.json']
};