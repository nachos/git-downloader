var resolvers = require('./resolvers');

module.exports = function(source) {

  // Git case: git git+ssh, git+http, git+https
  //           .git at the end (probably ssh shorthand)
  //           git@ at the start
  if (/^git(\+(ssh|https?))?:\/\//i.test(source) || /\.git\/?$/i.test(source) || /^git@/i.test(source)) {

    // If it's a GitHub repository, use the specialized resolver
    if (resolvers.github.getOrgRepoPair(source)) {
      return resolvers.github;
    }

    return resolvers.git;
  }
};