var resolverFactory = require('./resolverFactory');

module.exports = function (options, cb) {
  var resolver = resolverFactory(options.source);

  if (!resolver) {
    return cb('no resolver found');
  }

  resolver.resolve(options, cb);
};