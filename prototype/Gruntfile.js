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
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    { expand: true, src: ['node_modules/angular/angular.js'], dest: 'js/', filter: 'isFile', flatten: true },


                ],
            },
        },
        watch: {
            scripts: {
                files: ['css/*.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                },
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['cssmin', 'copy', 'watch']);

};
