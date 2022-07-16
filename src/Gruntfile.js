module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'build/App.css': 'App.css',
                    'build/Home.css': 'Home.css',
                    'build/Hero.css': 'Hero.css',
                    'build/Footer.css': 'Footer.css',
                    'build/Header.css': 'Header.css',
                    'build/Privacy.css': 'Privacy.css',
                    'build/Terms.css': 'Terms.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['App.css', 'Home.css', 'Footer.css', 'Header.css', 'Hero.css', 'Privacy.css', 'Terms.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};