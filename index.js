var path = require('path');
var fs = require('fs-extra');

exports.setup = function(tar) {
  var src = path.resolve(__dirname, 'blog');
  fs.copySync(src, tar);
};
