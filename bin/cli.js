#! /usr/bin/env node

/**
 * Created by fritx on 5/8/14.
 */

var path = require('path');
var fs = require('fs-extra');
var parseArgs = require('minimist');

var args = parseArgs(process.argv.slice(2), {
  boolean: ['version', 'help', 'force'],
  alias: {
    version: 'v',
    help: 'h',
    force: 'f'
  }
});

(function () {

  var pkg = require('../package.json');

  if (args.version) {
    console.log('v' + pkg.version);
    return;
  }

  if (args.help) {
    console.log('See: ' + pkg.homepage);
    return;
  }

  var tar = path.resolve(process.cwd(), args._[0] || '.');

  if (fs.existsSync(tar)) {
    if (!fs.statSync(tar).isDirectory()) {
      console.log('Target should be a directory');
      return;
    }
    if (!args.force) {
      console.log('Target already exists. Force flag needed');
      return;
    }
  }

  var src = path.resolve(__dirname, '../blog');

  fs.copySync(src, tar);
  console.log('Blog based up at: ' + tar);

})();
