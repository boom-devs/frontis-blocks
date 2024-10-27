module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Clean the dist directory
    clean: {
      dist: ['dist']
    },

    // Copy files to dist
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: [
              '**',
              '!node_modules/**',
              '!src/**',
              '!admin/**',
              '!.idea/**',
              '!.babelrc',
              '!.prettierrc',
              '!.gitignore',
              '!Gruntfile.js',
              '!package.json',
              '!package-lock.json',
              '!yarn.lock',
              '!.DS_Store',
              '!README.md',
              '!.distignore',
              '!LICENSE',
              '!phpcs.xml.dist',
              '!phpunit.xml.dist',
              '!webpack.config.js',
              '!webpack.config.admin.js',
              '!**/*.map'
            ],
            dest: 'dist/'
          }
        ]
      }
    },

    // Convert README.md to readme.txt
    wp_readme_to_markdown: {
        convert: {
            files: {
                'readme.txt': 'README.md'
            }
        }
    },

    // Minify CSS
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['**/*.css', '!**/*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    },

    // Uglify JS
    uglify: {
      options: {
        mangle: false
      },
      target: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'dist',
          ext: '.min.js'
        }]
      }
    },

    // Create zip file
    compress: {
      main: {
        options: {
          archive: 'dist/frontis-blocks.zip'
        },
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['**/*'],
            dest: 'frontis-blocks/'
          }
        ]
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-wp-readme-to-markdown');

  // Build task(s)
  grunt.registerTask('build', [
    'clean',
    'copy',
    'wp_readme_to_markdown',
    'cssmin',
    'uglify',
    // 'compress'
  ]);
};
