
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({

    watch: {
      options: {
        livereload: true
      },
      pug: {
        files: ['src/**/*.pug'],
        tasks: ['pug']
      },
      css: {
        files: ['stylesheets/**/*.css']
      }
    },

    connect: {
      server: {
        options: {
          open: true,
          livereload: true,
          host: 'localhost',
          hostname: 'localhost'
        }
      }
    },

    pug: {
      compile: {
        options: {
          data: require('./src/fillViewModel.js')
        },
        pretty: true,

        cwd: 'src',
        src: '*.pug',
        dest: './',
        ext: '.html',
        expand: true
      }
    }

  });
  grunt.registerTask('serve', ['pug', 'connect', 'watch']);
}