// Generated on 2014-12-20 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: css
//   sass: _assets\scss
//   javascript: js
//   images: img
//   fonts: fonts

module.exports = function(grunt) {
    // Show elapsed time after tasks run
    require('time-grunt')(grunt);
    // Load all Grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Configurable paths
        yeoman: {
            app: 'app',
            dist: 'dist',
            baseurl: 'v-zasadnyy-com'
        },
        watch: {
            sass: {
                files: ['<%= yeoman.app %>/_assets/scss/**/*.{scss,sass}'],
                tasks: ['sass:server', 'autoprefixer:server']
            },
            scripts: {
                files: ['<%= yeoman.app %>/_assets/js/**/*.{js}'],
                tasks: ['uglify:server']
            },
            jekyll: {
                files: [
                    '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
                    '<%= yeoman.app %>/*.{html,yml,md,mkd,markdown}',
                    '!<%= yeoman.app %>/_bower_components/**/*'
                ],
                tasks: ['jekyll:server']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '.jekyll/**/*.{html,yml,md,mkd,markdown}',
                    '.tmp/<%= yeoman.baseurl %>/css/*.css',
                    '.tmp/<%= yeoman.baseurl %>/js/*.js',
                    '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: {
                        target: 'http://localhost:9000/<%= yeoman.baseurl %>'
                    },
                    base: [
                        '.jekyll',
                        '.tmp'
                    ]
                }
            },
            dist: {
                options: {
                    open: {
                        target: 'http://localhost:9000/<%= yeoman.baseurl %>'
                    },
                    base: [
                        '<%= yeoman.dist %>',
                        '.tmp'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '.jekyll',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            }
        },
        clean: {
            server: [
                '.jekyll',
                '.tmp'
            ],
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            }
        },
        sass: {
            options: {
                includePaths: ['<%= yeoman.app %>/_assets/scss']
            },
            server: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/_assets/scss',
                    src: '**/*.{scss,sass}',
                    dest: '.tmp/<%= yeoman.baseurl %>/css',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/_assets/scss',
                    src: '**/*.{scss,sass}',
                    dest: '.tmp/<%= yeoman.baseurl %>/css',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 versions']
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '.tmp/<%= yeoman.baseurl %>/css',
                    src: '**/*.css',
                    dest: '.tmp/<%= yeoman.baseurl %>/css'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/<%= yeoman.baseurl %>/css',
                    src: '**/*.css',
                    dest: '.tmp/<%= yeoman.baseurl %>/css'
                }]
            }
        },
        jekyll: {
            options: {
                // bundleExec: true,
                config: '_config.yml,_config.build.yml',
                src: '<%= yeoman.app %>'
            },
            dist: {
                options: {
                    dest: '<%= yeoman.dist %>/<%= yeoman.baseurl %>',
                }
            },
            server: {
                options: {
                    config: '_config.yml',
                    dest: '.jekyll/<%= yeoman.baseurl %>'
                }
            },
            check: {
                options: {
                    doctor: true
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>/<%= yeoman.baseurl %>'
            },
            html: '<%= yeoman.dist %>/<%= yeoman.baseurl %>/index.html'
        },
        usemin: {
            options: {
                assetsDirs: '<%= yeoman.dist %>/<%= yeoman.baseurl %>',
            },
            html: ['<%= yeoman.dist %>/<%= yeoman.baseurl %>/**/*.html'],
            css: ['<%= yeoman.dist %>/<%= yeoman.baseurl %>/css/**/*.css']
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>/<%= yeoman.baseurl %>',
                    src: '**/*.html',
                    dest: '<%= yeoman.dist %>/<%= yeoman.baseurl %>'
                }]
            }
        },
        // Usemin adds files to uglify
        uglify: {
            server: {
                files: {
                    '.tmp/<%= yeoman.baseurl %>/js/scripts.js': ['<%= yeoman.app %>/_assets/js/vendor/jquery.appear.min.js', '<%= yeoman.app %>/_assets/js/scripts.js']
                }
            },
            dist: {
                files: {
                    '.tmp/<%= yeoman.baseurl %>/js/scripts.js': ['<%= yeoman.app %>/_assets/js/vendor/jquery.appear.min.js', '<%= yeoman.app %>/_assets/js/scripts.js']
                }
            }
        },
        // Usemin adds files to cssmin
        cssmin: {
            dist: {
                options: {
                    check: 'gzip'
                },
                files: [{
                    expand: true,
                    cwd: '.tmp/<%= yeoman.baseurl %>/css',
                    src: ['*.css'],
                    dest: '.tmp/<%= yeoman.baseurl %>/css'
                }]
            }
        },
        uncss: {
            dist: {
                options: {
                    // csspath: '../../.tmp',
                    stylesheets: ['../../../../.tmp/<%= yeoman.baseurl %>/css/blog.css'],
                    // htmlroot: '<%= yeoman.dist %>/<%= yeoman.baseurl %>'
                    // report: 'min'
                },
                files: {
                    '.tmp/<%= yeoman.baseurl %>/css/blog.css': ['<%= yeoman.dist %>/<%= yeoman.baseurl %>/**/*.html']
                }
            }
        },
        imagemin: {
            dist: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>/<%= yeoman.baseurl %>/img/vitaliy/posts',
                    src: '**/*.{jpg,jpeg,png}',
                    dest: '<%= yeoman.dist %>/<%= yeoman.baseurl %>/img/vitaliy/posts'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>/<%= yeoman.baseurl %>/img/vitaliy',
                    src: '**/*.svg',
                    dest: '<%= yeoman.dist %>/<%= yeoman.baseurl %>/img/vitaliy'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '.tmp/<%= yeoman.baseurl %>',
                    src: [
                        'css/**/*',
                        'js/**/*'
                    ],
                    dest: '<%= yeoman.dist %>/<%= yeoman.baseurl %>'
                }]
            },
        },
        buildcontrol: {
            dist: {
                options: {
                    dir: '<%= yeoman.dist %>/<%= yeoman.baseurl %>',
                    remote: 'git@github.com:zasadnyy-inc/v-zasadnyy-com.git',
                    branch: 'gh-pages',
                    commit: true,
                    push: true,
                    connectCommits: false
                }
            }
        },
        concurrent: {
            server: [
                'jekyll:server'
            ],
            dist: [
                'copy:dist'
            ]
        }
    });

    // Define Tasks
    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'sass:server',
            'concurrent:server',
            'autoprefixer:server',
            // 'uglify:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function() {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });


    grunt.registerTask('build', [
        'clean',
        'jekyll:dist',
        'sass:dist',
        'autoprefixer:dist',
        'useminPrepare',
        // 'uglify:dist',
        'imagemin',
        'svgmin',
        // 'copy',
        'uncss',
        'usemin',
        'cssmin',
        'htmlmin'
    ]);

    grunt.registerTask('deploy', [
        'build',
        'concurrent:dist',
        'buildcontrol'
    ]);

    grunt.registerTask('default', [
        'serve'
    ]);
};