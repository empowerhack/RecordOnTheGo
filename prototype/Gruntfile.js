module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'css/main.css': ['node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.css', 'css/screen.css']
    }
  }
}
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};