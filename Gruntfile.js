const markdownIt = require('./tasks/markdown-it');
const webpackConfig = require('./webpack.config');


module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-npm');

  const watchConfig = {
    options: {
      livereload: true
    },
    pug: {
      files: ['src/**/*.pug', 'src/**/*.js', 'src/**/*.json'],
      tasks: ['pug']
    },
    webpack: {
      files: ['src/js/**/*.js', 'src/scss/**/*.scss', 'webpack.config.js'],
      tasks: ['webpack:dev']
    }
  };


  const config = {
    clean: {
      html: ['generated-root']
    },
    watch: watchConfig,
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
          base: ['root', 'generated-root'],
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

    pug: {
      compile: {
        options: {
          data: require('./src/fillViewModel.js'),
          filters: { 
            'markdown-it': markdownIt
          }
        },
        pretty: true,

        cwd: 'src',
        src: ['**/*.pug', '!layout/*.pug'],
        dest: 'generated-root',
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
  grunt.registerTask('serve', ['clean', 'webpack:dev', 'pug', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'webpack:prod', 'pug', 'npm-contributors']);
};
