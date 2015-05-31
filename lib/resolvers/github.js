module.exports = {
  resolve: function(options, cb) {

    // Grab the org/repo
    // /xxxxx/yyyyy.git or :xxxxx/yyyyy.git (.git is optional)
    var pair = this.getOrgRepoPair(options.source);

    if (!pair) {
      return cb('Invalid GitHub URL');
    }

    var tarballUrl = 'https://github.com/' + pair.org + '/' + pair.repo + '/archive/' + options.tag + '.tar.gz';
    console.log(tarballUrl);
    cb();
  },
  getOrgRepoPair: function (url) {
    url = url.replace(/^git\+/, '');
    var match;

    match = url.match(/(?:@|:\/\/)github.com[:\/]([^\/\s]+?)\/([^\/\s]+?)(?:\.git)?\/?$/i);
    if (!match) {
      return null;
    }

    return {
      org: match[1],
      repo: match[2]
    };
  }
};