'use strict';

var exec = require('child_process').exec;
var rimraf = require('rimraf');
var path = require('path');
var Q = require('q');
var debug = require('debug')('gitDownloader');

/**
 * Download projects from git
 *
 * @param {object} options Can receive source and destination for the download process
 * @returns {*}
 */
module.exports = function (options) {
  options = options || {};

  debug('options: %j', options);

  if (!options.source) {
    return Q.reject(new TypeError('git-downloader: options should include \'source\' property'));
  }

  options.destination = options.destination || process.cwd();

  return Q.nfcall(exec, 'git clone ' + options.source + ' ' + options.destination + ' --depth 1')
    .then(function () {
      debug('rimraf: %s', path.join(options.destination, '.git'));

      return Q.nfcall(rimraf, path.join(options.destination, '.git'));
    });
};
