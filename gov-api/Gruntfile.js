module.exports = function(grunt) {

	// required
  require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

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
        'shell:start', 'watch:css', 'watch:reloads', 'nodemon:dev'
       ]
  	},
    //-------------



    //-------------
    concat: {
      //---------
      core: {
        src: [
          // angularjs 2 required files - in public directory
          'public/javascripts/angular2/es6-shim.min.js',
          'public/javascripts/angular2/system-polyfills.js',
          'public/javascripts/angular2/system.src.js',
          'public/javascripts/angular2/bundles/Rx.js',
					'public/javascripts/angular2/angular2.dev.js',
          'public/javascripts/angular2/angular2-polyfills.min.js'
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
        dest: 'public/javascripts/minified/framework.js'
      },

      framework: {
        src: [
            'public/javascripts/unminified/framework.js',
        ],
        dest: 'public/javascripts/minified/framework.js'
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
          src: "public/app/components/**/*.jade",
          expand: true,
          ext: ".html"
        }]
      }
    },
    //-------------


    //-------------
    watch: {

			//------------------
		  css: {
		    files: [
          'public/stylesheets/**/*.css',
        ],
        tasks: ['concat:css', 'cssmin:css']
		  },
		  //------------------

      //------------------
		  reloads: {
		    files: [
          'views/*.*',
          'public/app/**/*.js',
          'public/app/components/**/*.jade',
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
            stderr: false,
            maxBuffer: Infinity
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
      'concat:css', 'cssmin:css'
    ])
    // -------------------

    // -------------------
  	grunt.registerTask('default', ['concurrent:watch']);
    // -------------------

  //*****************************//

};
