// ESTABLISH REQUIREJS PATHING
require.config({


	// URL
	baseUrl: '',

	// LOCATION OF SCRIPTS
	paths: {

		// DEPENDENCIES
		"stBlurredDialog": "vendor/screenblur/js/st-blurred-dialog",
		"SmoothScroll": "vendor/angular/module/ng-smoothscroll.min",
		"jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
		"foundation": "vendor/foundation5/js/foundation.min",
		"firebaseJS": "https://cdn.firebase.com/v0/firebase",
		"app": "require/app",

		// THREEJS //
		"threeJS": "vendor/threeJS/js/threeJS", 												// http://cdnjs.cloudflare.com/ajax/libs/three.js/r67/three.min
		"threeJS_stats": "vendor/threeJS/js/stats", 											// https://github.com/mrdoob/stats.js
		"orbitControls": "vendor/threeJS/js/orbitControls",										// https://github.com/mrdoob/stats.js
		
		
		// THREEJS EFFECTS //
		"ascii": "vendor/threeJS/effects/ascii",


		// MODULES //
		"angular": "vendor/angular/js/angular-1.2.2",
		"ui.router": "vendor/angular/module/angular-ui-router",									//https://github.com/angular-ui/ui-router
		"ngAnimate": "vendor/angular/module/angular-animation-1.2.2",							//http://code.angularjs.org/1.1.4/docs/api/ng.directive:ngAnimate
		"ngSanitize": "vendor/angular/module/angular-sanitize",									//https://github.com/angular/bower-angular-sanitize
		"angular-centered": "vendor/angular/module/angular-centered",							//http://ngmodules.org/modules/angular-centered
		"sticky": "vendor/angular/module/sticky",												//https://github.com/d-oliveros/angular-sticky
		"contenteditable": "vendor/angular/module/angular-contenteditable",						//https://github.com/akatov/angular-contenteditable
		"mm.foundation": "vendor/foundation5/js/foundation5",									//http://madmimi.github.io/angular-foundation/
		"ui.utils": "vendor/angular/module/ui-utils.min",										//http://angular-ui.github.io/
		"psResponsive": "vendor/angular/module/ps-responsive",									//https://github.com/lavinjj/angular-responsive
		"angular-carousel": "vendor/angular/module/angular-carousel.min",						//https://github.com/revolunet/angular-carousel
		"FBAngular": "vendor/angular/module/angular-fullscreen",								//https://github.com/fabiobiondi/angular-fullscreen
		"chieffancypants.loadingBar": "vendor/angular/module/loading-bar",						//http://chieffancypants.github.io/angular-loading-bar/
		"dcbImgFallback": "vendor/angular/module/angular.dcb-img-fallback.min",					//http://ngmodules.org/modules/angular-img-fallback
		"adaptive.detection": "vendor/angular/module/angular-adaptive-detection.min",			//https://github.com/angular-adaptive/adaptive-detection
		"ngStorage": "vendor/angular/module/ngStorage.min",										//https://github.com/gsklee/ngStorage
		"toaster": "vendor/angular/module/toaster",												//https://github.com/jirikavi/AngularJS-Toaster
		"ngTouch": "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular-touch.min",	//https://github.com/angular/bower-angular-touch
		"string": "vendor/angular/module/ng-string.min",										//https://github.com/angular/bower-angular-touch //https://github.com/goodeggs/ng-string"
		"angularSpinkit": "vendor/angular/module/angular-spinkit",								//https://github.com/urigo/angular-spinkit
		"angularSpinkit": "vendor/angular/module/angular-spinkit",								//https://github.com/urigo/angular-spinkit
		"gd.ui.jsonexplorer": "vendor/jsonexplorer/js/gd-ui-jsonexplorer",						//https://github.com/Goldark/ng-json-explorer
		"urish.load": "vendor/angular/module/angular-load.min",									//https://github.com/urish/angular-load
		"adaptive.youtube": "vendor/angular/module/angular-adaptive-youtube.min",				//https://github.com/angular-adaptive/adaptive-youtube
		"angularify.angular-lazyload": "vendor/angular/module/angular-lazy-load.min",			//https://github.com/angularify/angular.lazy.load.js
		"angularFileUpload": "vendor/angular/module/angular-file-upload",						//https://github.com/danialfarid/angular-file-upload
		"truncate": "vendor/angular/module/truncate",											//https://github.com/sparkalow/angular-truncate
		"imageresize": "vendor/angular/module/imageresize",										//CUSTOM MADE
		"checklist-model": "vendor/angular/module/checklist-model",								//https://github.com/vitalets/checklist-model
		"formly": "vendor/angular/module/formly",												//https://github.com/nimbly/angular-formly
		"ngClickSelect": "vendor/angular/module/ng-click-select",								//https://github.com/adjohnson916/ng-click-select
		"multi-select": "vendor/multiSelect/js/angular-multi-select",							//http://isteven.github.io/angular-multi-select/
		"ngFitText": "vendor/angular/module/ng-FitText",										//http://ngmodules.org/modules/ng-FitText.js
		"smartTable.table": "vendor/angular/module/smartTable.min",								//http://lorenzofox3.github.io/smart-table-website/#/section-filter
		"ngPatternRestrict": "vendor/angular/module/ng-pattern-restrict",						//https://github.com/AlphaGit/ng-pattern-restrict
		"wiz.validation": "vendor/angular/module/wizValidation.min",							//https://github.com/GrumpyWizards/ngValidation

		// MODAL CONTROLLERS //
		"uiModalCtrl": "layout/modals/ui/ui-modalControls",
		"accountModalCtrl": "layout/modals/account/account-modalControls",
		"gameModalCtrl": "layout/modals/game/game-modalControls",

		// FACTORIES //
		"custom": "vendor/angular/factory/custom",
		"konami": "vendor/angular/factory/konami",

		// FIREBASE //
		"firebase": "https://cdn.firebase.com/libs/angularfire/0.7.1/angularfire.min",						//https://www.firebase.com/quickstart/angularjs.html
		"firebaseAuthenticate": "https://cdn.firebase.com/js/simple-login/1.3.2/firebase-simple-login",	//https://www.firebase.com/docs/security/simple-login-email-password.html

		// LAYOUT //
		"overlayCtrl": "layout/overlay/overlay",
		"offcanvasCtrl": "layout/offcanvas/offcanvas",
		"sliderCtrl": "layout/slider/slider",


		// PAGE CONTROLLERS //
		"headerCtrl": "components/header/header",
		"footerCtrl": "components/footer/footer",
		"homeCtrl": "components/home/home",
		"firebaseCtrl": "components/firebase/firebase",
		"angularUICtrl": "components/angularUI/angularUI",
		"foundationCtrl": "components/foundationParts/foundationParts",
		"carouselCtrl": "components/carousel/carousel",
		"testbedCtrl": "components/testbed/testbed",
		"fileUploadCtrl": "components/fileUpload/fileUpload",
		"parallaxCtrl": "components/parallax/parallax",
		"gameCtrl": "components/game/game",
	},

    //DEPENDENCIES
    shim: {

        //MODULES//
        "angular": {
            exports: "angular"
        },
        "custom":{
        	deps: ['angular', 'firebase', 'firebaseAuthenticate']
        },
        "ui.router": {
        	deps: ['angular'],
            exports: "angular"
        },
        "ngAnimate": {
        	deps: ['angular'],
        	exports: "angular"
        },
        "ngSanitize": {
        	deps: ['angular'],
            exports: "angular"
        },
        "angular-centered": {
        	deps: ['angular'],
        	exports: "angular"
        },
        "sticky": {
        	deps: ['angular'],
        	exports: "angular"
        },
        "contenteditable": {
        	deps: ['angular'],
        	exports: "angular"
        },
        "mm.foundation": {
        	deps: ['angular'],
        	exports: "angular"
        },
        "ui.utils": {
        	deps: ['angular'],
            exports: "angular"
        },
        "psResponsive": {
        	deps: ['angular'],
        	exports: "angular"
        },
        "angular-carousel": {
        	deps: ['angular', 'ngTouch'],
        	exports: "angular"
        },
        "FBAngular": {
        	deps: ['angular', 'ngTouch'],
        	exports: "angular"
        },
        "chieffancypants.loadingBar": {
        	deps: ['angular', 'ngTouch'],
        	exports: "angular"
        },
        "dcbImgFallback":{
        	deps: ['angular'],
        	exports: "angular"
        },
        "adaptive.detection": {
        	deps: ['angular'],
        	exports: "angular"
        },
        "ngStorage": {
        	deps: ['angular'],
        	exports: "angular"
        },
        "toaster": {
        	deps: ['angular'],
        	exports: "angular"
        },
        "ngTouch": {
        	deps: ['angular'],
        	exports: "angular"
        },
        "string":{
        	deps: ['angular'],
        	exports: "angular"
        },
        "angularSpinkit":{
			deps: ['angular'],
        	exports: "angular"
        },
        "gd.ui.jsonexplorer":{
        	deps: ['angular'],
        	exports: "angular"
        },
        "urish.load":{
        	deps: ['angular'],
        	exports: "angular"
        },
        "angularify.angular-lazyload":{
        	deps: ['angular'],
        	exports: "angular"
        },
        "angularFileUpload":{
        	deps: ['angular'],
        	exports: "angular"
        },
        "truncate":{
        	deps: ['angular'],
        	exports: "angular"
        },
        "imageresize":{
			deps: ['angular'],
        	exports: "angular"
        },
        "checklist-model":{
			deps: ['angular'],
        	exports: "angular"
        },
        "formly":{
			deps: ['angular'],
        	exports: "angular"
        },
        "ngClickSelect":{
			deps: ['angular'],
        	exports: "angular"
        },
        "multi-select":{
			deps: ['angular'],
        	exports: "angular"
        },
        "ngFitText":{
			deps: ['angular'],
        	exports: "angular"
        },
        "smartTable.table":{
			deps: ['angular'],
        	exports: "angular"
        },
        "ngPatternRestrict":{
			deps: ['angular'],
        	exports: "angular"
        },
        "wiz.validation":{
			deps: ['angular'],
        	exports: "angular"
        },



        // MODALS
        "uiModalCtrl":{
					deps: ['angular'],
        	exports: "angular"
        },
        "accountModalCtrl":{
					deps: ['angular'],
        	exports: "angular"
        },
				"gameModalCtrl":{
					deps: ['angular'],
					exports: "angular"
				},


        // THREEJS
        "threeJS":{
        	exports: "threeJS"
        },
        "threeJS_stats":{
        	deps: ['threeJS'],
        },
        "orbitControls":{
        	deps: ['threeJS'],
        },
		"physi":{
			deps: ['threeJS'],
			exports: 'physi'
		},
		
		// THREEJS EFFECTS
		"ascii":{
			deps: ['threeJS'],
		},





		//DEPENDENCIES//
      	"stBlurredDialog":{
			deps: ['angular'],
        	exports: "angular"
      	},
    	"SmoothScroll":{
			deps: ['angular'],
        	exports: "angular"
    	},
    	"adaptive.youtube":{
			deps: ['angular'],
        	exports: "angular"
    	},


    	//FIREBASE
        "firebase": {
			deps: ['angular', 'firebaseJS', 'firebaseAuthenticate'],
        	exports: "angular"
        }
    }

});


// CUSTOM CONSOLE FORMAT
console.group('Site Info');
console.time('Site loaded in');
console.groupCollapsed('Init');


// INITALIZE ANGULAR IN CONTROLLERS
require(	[	// DEPENDENCIES
				'app', 'firebase',

 				// OVERLAY
				'overlayCtrl', 'offcanvasCtrl', 'sliderCtrl',

				// PAGES
				'headerCtrl', 'footerCtrl','homeCtrl',
				'firebaseCtrl',	'angularUICtrl', 'foundationCtrl', 'carouselCtrl',
				'testbedCtrl', 'fileUploadCtrl', 'parallaxCtrl',

				// working
				'gameCtrl'
			],

	function (	app, firebase,
				overlayCtrl, offcanvasCtrl, headerCtrl, footerCtrl,
				homeCtrl, firebaseCtrl, sliderCtrl, angularUICtrl, foundationCtrl, carouselCtrl,
				testbedCtrl, fileUploadCtrl, parallaxCtrl, gameCtrl
			) {

	// START CONTROLLERS
	overlayCtrl.apply(app);
	offcanvasCtrl.apply(app);
	sliderCtrl.apply(app);

	headerCtrl.apply(app);
	footerCtrl.apply(app);
	homeCtrl.apply(app);

	firebaseCtrl.apply(app);
	angularUICtrl.apply(app);
	foundationCtrl.apply(app);
	carouselCtrl.apply(app);
	testbedCtrl.apply(app);
	fileUploadCtrl.apply(app);
	parallaxCtrl.apply(app);

	gameCtrl.apply(app);

	app.init();
	console.groupEnd('Init');
});
