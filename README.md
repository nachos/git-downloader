# git-downloader

A tool to download projects from a git repository

<table>
  <thead>
    <tr>
      <th>Linux</th>
      <th>OSX</th>
      <th>Windows</th>
      <th>Coverage</th>
      <th>Dependencies</th>
      <th>DevDependencies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" align="center">
        <a href="https://travis-ci.org/nachos/git-downloader"><img src="https://img.shields.io/travis/nachos/git-downloader.svg?style=flat-square"></a>
      </td>
      <td align="center">
        <a href="https://ci.appveyor.com/project/nachos/git-downloader"><img src="https://img.shields.io/appveyor/ci/nachos/git-downloader.svg?style=flat-square"></a>
      </td>
      <td align="center">
<a href='https://coveralls.io/r/nachos/git-downloader'><img src='https://img.shields.io/coveralls/nachos/git-downloader.svg?style=flat-square' alt='Coverage Status' /></a>
      </td>
      <td align="center">
        <a href="https://david-dm.org/nachos/git-downloader"><img src="https://img.shields.io/david/nachos/git-downloader.svg?style=flat-square"></a>
      </td>
      <td align="center">
        <a href="https://david-dm.org/nachos/git-downloader#info=devDependencies"><img src="https://img.shields.io/david/dev/nachos/git-downloader.svg?style=flat-square"/></a>
      </td>
    </tr>
  </tbody>
</table>

## Have a problem? Come chat with us!
[![Join the chat at https://gitter.im/nachos/git-downloader](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nachos/git-downloader?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Installation
``` bash
$ [sudo] npm install git-downloader --save
```

## Examples
``` js
var gitDownloader = require('git-downloader');

var options = { source: 'test' };

// Downloads project from source to current working dir
gitDownloader(options)
  .then(function() {
    // Done!
  });
  
  
options = { 
  source: 'test',
  destination: 'dest'
};

// Downloads project from source to destination
gitDownloader(options)
  .then(function() {
    // Done!
  });
```

## Run Tests
``` bash
$ npm test
```

## License

[MIT](LICENSE)
