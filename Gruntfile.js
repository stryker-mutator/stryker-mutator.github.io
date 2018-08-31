var md = require('jstransformer')(require('jstransformer-markdown-it'));
const sdedit = require('./tasks/grunt-sdedit');
const sass = require('./tasks/grunt-sass');

module.exports = function (grunt) {

  const sdFiles = grunt.file.expand('src/**/*.sd');

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-npm');
  sdedit(grunt);
  sass(grunt);

  const watchConfig = {
    options: {
      livereload: true
    },
    sdedit: {
      files: ['src/**/*.sd'],
      tasks: ['sdedit']
    },
    sass: {
      files: ['src/**/*.scss'],
      tasks: ['sass']
    },
    pug: {
      files: ['src/**/*.pug', 'src/**/*.js', 'src/**/*.json'],
      tasks: ['pug']
    },
    js: {
      files: ['javascripts/**/*.js']
    },
    css: {
      files: ['stylesheets/**/*.css']
    }
  };


  const config = {
    clean: {
      html: ['*.html', 'blog/**/*.html'],
      blog: 'blog'
    },
    watch: watchConfig,
    sdedit: {
      sequence: {
        expand: true,
        cwd: 'src',
        src: ['**/*.sd'],
        dest: 'images',
        extDot: 'last',
        ext: '.png'
      }
    },

    connect: {
      server: {
        options: {
          open: true,
          livereload: true,
          host: 'localhost',
          hostname: 'localhost',
          // directory: {
          //   filter(filename, index, files, dir) {
          //     console.log('test');
          //   },
          //   path
          // },
          middleware: (_, _1, middlewares) => {
            middlewares.unshift((req, _, next) => {
              if (!req.url.endsWith('/') && req.url.indexOf('.') === -1) {
                req.url += '.html';
              }
              next();
            });
            return middlewares;
          }

          //   return middlewares;
          // },
        }
      }
    },

    sass: {
      bootstrap: {
        src: ['src/scss/custom.scss'],
        dest: 'css/bootstrap.css'
      }
    },

    pug: {
      compile: {
        options: {
          data: require('./src/fillViewModel.js'),
          filters: { // Add markdown-it-named-headers as plugin
            'markdown-it': function (text, options) {
              return md.render(text, {
                plugins: ['markdown-it-named-headers'],
                html: true
              }).body;
            }

          }
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
  };


  grunt.initConfig(config);
  grunt.registerTask('serve', ['clean', 'sass', 'pug', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'sass', 'pug', 'npm-contributors']);
};
