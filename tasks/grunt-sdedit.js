'use strict';
const SdEdit = require('sdedit').SdEdit;
const path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('sdedit', 'Create sequence diagrams from cleartext using java and sdedit.jar', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      type: 'png'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filePath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filePath)) {
          grunt.log.warn('Source file "' + filePath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      src.forEach(function(file) {
        grunt.file.mkdir(path.dirname(f.dest));
        new SdEdit(['-o', f.dest, '-t', options.type, file]).run();
      });

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};