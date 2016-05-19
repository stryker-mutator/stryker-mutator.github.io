
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    
    watch:{
      pug:{
        files: ['src/**/*.pug'],
        tasks: ['pug']
      }
    },
    
    pug: {
      compile: {
        options: {
          data: {
            debug: true,
            name: 'Stryker - The JavaScript mutation testing framework',
            tagline: 'Measure the effectiveness of your JavaScript unit tests.'
          },
          pretty: true
        },
        src: 'src/index.pug',
        dest: 'index.html'
      }
    }
  });

  grunt.registerTask('serve', ['pug', 'watch']);
}