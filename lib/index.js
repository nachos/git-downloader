var exec = require('child_process').exec;
var rimraf = require('rimraf');
var path = require('path');

module.exports = function (options, cb) {
  exec('git clone ' + options.source + ' ' + options.dest + ' --depth 1',
    function (err) {
      if (err) {
        return cb(err);
      }

      rimraf(path.join(options.dest, '.git'), cb);
    });
};