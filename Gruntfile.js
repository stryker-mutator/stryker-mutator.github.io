
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-npm');

  grunt.initConfig({
    clean: {
      html: ['*.html', 'blog/**/*.html'],
      blog: 'blog'
    },
    watch: {
      options: {
        livereload: true
      },
      pug: {
        files: ['src/**/*.pug', 'src/**/*.js'],
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
        src: ['**/*.pug', '!layout/*.pug'],
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
  grunt.registerTask('serve', ['clean', 'pug', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'pug', 'npm-contributors']);
};