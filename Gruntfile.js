
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-npm');

  grunt.initConfig({

    watch: {
      options: {
        livereload: true
      },
      pug: {
        files: ['src/**/*.pug'],
        tasks: ['pug']
      },
      js: {
        files: ['javascripts/**/*.js']
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
    },

    'npm-contributors': {
      options: {
        commitMessage: 'chore: update contributors'
      }
    }

  });
  grunt.registerTask('serve', ['pug', 'connect', 'watch']);
  grunt.registerTask('build', ['pug', 'npm-contributors']);
};