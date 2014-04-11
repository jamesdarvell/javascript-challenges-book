var path = require("path");

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-gitbook');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    'gitbook': {
      development: {
        output: path.join(__dirname, ".grunt/gitbook"),
        input: "./",
        title: "Javascript Challenges",
        description: "Challenge your self to learn and understand the most obscure and tricky parts of Javascript.",
        github: "tcorral/javascript-challenges-book"
      }
    },
    'gh-pages': {
      options: {
        base: '.grunt/gitbook'
      },
      src: ['**']
    },
    'clean': {
      files: '.grunt'
    }
  });

  grunt.registerTask('publish', [
    'gitbook',
    'gh-pages',
    'clean'
  ]);
  grunt.registerTask('default', 'gitbook');
};