module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // grunt plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-nodemon');


  // Project configuration.
  grunt.initConfig({

    //-------------
    concurrent: {
      options:{
        limit: 10,
        logConcurrentOutput: true
      },
  		watch: [
        'shell:start', 'watch:reloads', 'nodemon:dev'
       ]
  	},
    //-------------



    //-------------
    concat: {
      //---------
      core: {
        src: [
          // angularjs 2 required files - in public directory
          'public/node_modules/es6-shim/es6-shim.min.js',
          'public/node_modules/systemjs/dist/system-polyfills.js',
          'public/node_modules/systemjs/dist/system.src.js',
          'public/node_modules/rxjs/bundles/Rx.js',
          'public/node_modules/angular2/bundles/angular2.dev.js',
          'public/javascripts/system.config.js',
        ],
        dest: 'public/javascripts/unminified/core.js',
      },
      //---------

      //---------
      framework: {
        src: [
          // angularjs 2 required files - in public directory
          'node_modules/jquery/dist/jquery.js',
          'node_modules/semantic-ui/dist/semantic.js',
        ],
        dest: 'public/javascripts/unminified/framework.js',
      },
      //---------


      // in modules root folder


      //---------
      css: {
        src: [
          // node_modules
          'node_modules/semantic-ui/dist/semantic.css',

          // custom
          'public/stylesheets/custom/*.*',
        ],
        dest: 'public/stylesheets/unminified/style.css',
      }
      //---------

    },
    //-------------


    //-------------
    uglify: {
      core: {
        src: [
            'public/javascripts/unminified/framework.js',
        ],
        dest: 'public/javascripts/minified/framework.min.js'
      },

      framework: {
        src: [
            'public/javascripts/unminified/core.js',
        ],
        dest: 'public/javascripts/minified/core.min.js'
      }
    },
    //-------------

    //-------------
    cssmin: {
      css: {
        src: 'public/stylesheets/unminified/style.css',
        dest: 'public/stylesheets/minified/style.min.css'
      }
    },
    //-------------


    //-------------
    jade: {
      app:{
        options: {
            client: false,
            pretty: true,
        },
        files: [{
          src: "appViews/*.jade",
          dest: "public/",
          expand: true,
          ext: ".html"
        }]
      }
    },
    //-------------


    //-------------
    watch: {


      //------------------
		  reloads: {
		    files: [
          'views/*.*',
          'public/app/**/*.js',
          'public/appViews/*.html',
          'appViews/*.jade',
        ],
        tasks: ['jade:app'],
		    options: {
					livereload: 35729,	// https://github.com/gruntjs/grunt-contrib-watch#optionslivereload
		      spawn: false
		    },
		  },
		  //------------------
    },
    //-------------


    //--------------------------
		/* WATCHES FOR CHANGES ON APP.JS FILE */
		nodemon: {
			  dev: {
			    script: 'app.js'
			  },
		},
		//--------------------------


    //-------------
		shell: {
        options: {
            stderr: false
        },
        start: {
            command: 'npm start'
        }
    }
    //-------------

  });


  // ***** GRUNT COMMANDS *******//
  //*****************************//

    // -------------------
    grunt.registerTask('_jade', ['jade:app'])
    // -------------------

    // -------------------
    grunt.registerTask('css', ['concat:css', 'cssmin:css'])
    // -------------------

    // -------------------
    grunt.registerTask('build', [
      'concat:core',      'uglify:core',
      'concat:framework', 'uglify:framework',
      'concat:css'
    ])
    // -------------------

    // -------------------
  	grunt.registerTask('default', ['concurrent:watch']);
    // -------------------

  //*****************************//

};
