const path = require('path');
const fs = require('fs');
const sass = require('node-sass');
const { promisify } = require('util');
const mkdirp = require('mkdirp');
const renderAsPromised = promisify(sass.render);
const writeFileAsPromised = promisify(fs.writeFile);
const mkdirpAsPromised = promisify(mkdirp);

module.exports = function (grunt) {
  grunt.registerMultiTask('sass', 'compile sass', function () {
    let done = this.async(),
      promises;

    mkdirpAsPromised(path.dirname(this.data.dest))
      .then(
        Promise.all(this.filesSrc.map((file) =>
          renderAsPromised({ file })
            .then(({ css }) => writeFileAsPromised(this.data.dest, css)))
        ))
      .then(() => {
        grunt.log.ok(`Written ${this.data.dest}`);
        done();
      })
      .catch(error => {
        grunt.log.error(error);
        done(false);
      });
  });
};
