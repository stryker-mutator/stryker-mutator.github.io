const md = require('jstransformer')(require('jstransformer-markdown-it'));
const webpackConfig = require('./webpack.config');

const sdedit = require('./tasks/grunt-sdedit');
const sass = require('./tasks/grunt-sass');

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webpack');
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
    webpack: {
      files: ['src/js/**/*.js'],
      tasks: ['webpack:dev']
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

    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: { ...webpackConfig, mode: 'development' }
    },

    connect: {
      server: {
        options: {
          open: true,
          livereload: true,
          host: 'localhost',
          hostname: 'localhost',
          middleware: (_, _1, middlewares) => {
            middlewares.unshift((req, _, next) => {
              if (!req.url.endsWith('/') && req.url.indexOf('.') === -1) {
                req.url += '.html';
              }
              next();
            });
            return middlewares;
          }
        }
      }
    },

    sass: {
      all: {
        src: ['src/scss/all.scss'],
        dest: 'dist/all.css'
      }
    },

    pug: {
      compile: {
        options: {
          data: require('./src/fillViewModel.js'),
          filters: { // Add markdown-it-named-headers as plugin
            'markdown-it': function (text) {
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
  grunt.registerTask('serve', ['clean', 'webpack:dev', 'sass', 'pug', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'webpack:prod', 'sass', 'pug', 'npm-contributors']);
};
