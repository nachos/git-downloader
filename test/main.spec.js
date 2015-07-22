'use strict';

var chai = require('chai');
var expect = chai.expect;
var mockery = require('mockery');
var sinon = require('sinon');
var childProcess = require('child_process');
var rimraf = require('rimraf');
var path = require('path');

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));

describe('git-downloader', function () {
  describe('exports', function () {
    var gitDownloader = require('../lib');

    it('should expose function', function () {
      expect(gitDownloader).to.be.a.function;
    });
  });

  describe('download', function () {
    var gitDownloader;

    before(function () {
      childProcess.exec = sinon.stub().callsArgWith(1, null);

      rimraf = sinon.stub().callsArgWith(1, null);

      mockery.registerMock('rimraf', rimraf);
      mockery.registerMock('child-process', childProcess);

      mockery.enable({
        useCleanCache: true,
        warnOnUnregistered: false
      });

      gitDownloader = require('../lib');
    });

    after(function () {
      mockery.deregisterMock('child-process');
      mockery.deregisterMock('rimraf');
    });

    describe('with invalid parameters', function () {
      it('should be rejected with TypeError', function () {
        expect(gitDownloader()).to.eventually.be.rejectedWith(TypeError);
      });
    });

    describe('with valid parameters', function () {
      describe('without destination', function () {
        it('should exec git clone', function () {
          var opt = {
            source: 'test'
          };

          return gitDownloader(opt)
            .then(function () {
              return expect(childProcess.exec).to.be.calledWithMatch('git clone test ' + process.cwd());
            });
        });

        it('should rimraf .git folder', function () {
          var opt = {
            source: 'test'
          };

          return gitDownloader(opt)
            .then(function () {
              return expect(rimraf).to.be.calledWithMatch(path.join(process.cwd(), '.git'));
            });
        });
      });

      describe('with destination', function () {
        it('should exec git clone', function () {
          var opt = {
            source: 'test',
            destination: 'testdest'
          };

          return gitDownloader(opt)
            .then(function () {
              return expect(childProcess.exec).to.be.calledWithMatch('git clone test testdest');
            });
        });

        it('should rimraf .git folder', function () {
          var opt = {
            source: 'test',
            destination: 'testdest'
          };

          return gitDownloader(opt)
            .then(function () {
              return expect(rimraf).to.be.calledWithMatch(path.join('testdest', '.git'));
            });
        });
      });
    });
  });
});