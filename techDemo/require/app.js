define("app", 	[	"custom", "angular",
					"ui.router", "ngAnimate", "ngSanitize", "angular-centered", "sticky", "contenteditable", "mm.foundation",
					"ui.utils", "psResponsive", "angular-carousel", "FBAngular", "chieffancypants.loadingBar", "dcbImgFallback",
					"stBlurredDialog", "SmoothScroll","adaptive.detection", "ngStorage", "toaster", "firebase", "string", "angularSpinkit",
					"gd.ui.jsonexplorer", "urish.load", "adaptive.youtube", "angularify.angular-lazyload", "angularFileUpload", "truncate",
					"imageresize", "uiModalCtrl", "accountModalCtrl", "gameModalCtrl", "checklist-model", "formly", "ngClickSelect", "multi-select",
					"ngFitText", "smartTable.table", "ngPatternRestrict", "wiz.validation"
				], function(custom) {
	


	////////////////
	// INIT
	var app = angular.module('app', [	"ui.router", "ngAnimate", "ngSanitize", "angular-centered", "sticky", "contenteditable", "mm.foundation",
										"ui.utils", "psResponsive", "angular-carousel", "FBAngular", "chieffancypants.loadingBar", "dcbImgFallback",
										"stBlurredDialog", "SmoothScroll","adaptive.detection", "ngStorage", "toaster", "firebase", "string", "angularSpinkit",
										"gd.ui.jsonexplorer", "urish.load", "adaptive.youtube", "angularify.angular-lazyload", "angularFileUpload", "truncate",
										"imageresize", "uiModalCtrl", "gameModalCtrl", "accountModalCtrl", "checklist-model", "formly", "ngClickSelect", "multi-select",
										"ngFitText", "smartTable.table", "ngPatternRestrict", "wiz.validation"
									]);

	app.init = function () {
		custom.setDefaultUserData(function(){
			angular.bootstrap(document, ['app']);
		});
	};
	////////////////

	// let's make a nav called `myOffCanvas`
	app.factory('myOffCanvas', function (cnOffCanvas) {
	  return cnOffCanvas({
	    controller: 'headerCtrl',
	    templateUrl: 'components/offcanvas/offcanvas.html'
	  });
	}).

	// typically you'll inject the offCanvas service into its own
	// controller so that the nav can toggle itself
	controller('MyOffCanvasCtrl', function (myOffCanvas) {
	  this.toggle = myOffCanvas.toggle;
	}).


	directive('styleParent', function(){
	   return {
	     restrict: 'A',
	     link: function(scope, elem, attr) {
	         elem.on('load', function() {
	            var w = $(this).width(),
	                h = $(this).height();

					//$('#mainSlider').css('min-height', h + 'px');
					//$('#headerFiller').css('height', h + 'px'  ) ;
	            //check width and height and apply styling to parent here.
	         });
	     }
	   };
	}).

	////////////////  CONFIG
	//
	config(function($stateProvider, $urlRouterProvider) {

			// For any unmatched url, redirect to /state1
			$urlRouterProvider.otherwise("/home");

			// Now set up the states
			$stateProvider
			    .state('home', {
			      url: "/home",
			      views: {
			        "overlay": { templateUrl: "layout/overlay/overlay.html",
			        			controller: "overlayController"
			        },
			        "offcanvas": { templateUrl: "layout/offcanvas/offcanvas.html",
			        			controller: "offcanvasController"
			        },
			        "slider": { templateUrl: "layout/slider/slider.html",
			        			controller: "sliderController"
			        },
			        "ui-modals": { templateUrl: "layout/modals/ui/ui-modals.html"

			        },
			        "account-modals": { templateUrl: "layout/modals/account/account-modals.html"

			        },
			        "header": { templateUrl: "components/header/header.html",
			        			controller: "headerController"
			        },
			        "footer": { templateUrl: "components/footer/footer.html",
			        			controller: "footerController"
			        },
			        "body": { 	templateUrl: "components/home/home.html",
			        			controller: "homeController"
			         },
			      },
				  onEnter: function(){
				   custom.transitionStart();
				  },
				  onExit: function(){
				    custom.transitionEnd();
				  },

			    })

			    .state('page1', {
			      url: "/page1",
			      views: {
			        "overlay": { templateUrl: "layout/overlay/overlay.html",
			        			controller: "overlayController"
			        },
			        "offcanvas": { templateUrl: "layout/offcanvas/offcanvas.html",
			        			controller: "offcanvasController"
			        },
			        "ui-modals": { templateUrl: "layout/modals/ui/ui-modals.html"

			        },
			        "account-modals": { templateUrl: "layout/modals/account/account-modals.html"

			        },
			        "header": { templateUrl: "components/header/header.html",
			        			controller: "headerController"
			        },
			        "footer": { templateUrl: "components/footer/footer.html",
			        			controller: "footerController"
			        },
			        "body": { 	templateUrl: "components/angularUI/angularUI.html",
			        			controller: "angularUIController"
			         },
			      },
				  onEnter: function(){
				   custom.transitionStart();
				  },
				  onExit: function(){
				    custom.transitionEnd();
				  },
			    })

			    .state('page2', {
			      url: "/page2",
			      views: {
			        "overlay": { templateUrl: "layout/overlay/overlay.html",
			        			controller: "overlayController"
			        },
			        "offcanvas": { templateUrl: "layout/offcanvas/offcanvas.html",
			        			controller: "offcanvasController"
			        },
			        "ui-modals": { templateUrl: "layout/modals/ui/ui-modals.html"

			        },
			        "account-modals": { templateUrl: "layout/modals/account/account-modals.html"

			        },
			        "header": { templateUrl: "components/header/header.html",
			        			controller: "headerController"
			        },
			        "footer": { templateUrl: "components/footer/footer.html",
			        			controller: "footerController"
			        },
			        "body": { 	templateUrl: "components/foundationParts/foundationParts.html",
			        			controller: "foundationController"
			         },
			      },
			      onEnter: function(){
				   custom.transitionStart();
				  },
				  onExit: function(){
				    custom.transitionEnd();
				  },
			    })

			    .state('page3', {
			      url: "/page3",
			      views: {
			        "overlay": { templateUrl: "layout/overlay/overlay.html",
			        			controller: "overlayController"
			        },
			        "offcanvas": { templateUrl: "layout/offcanvas/offcanvas.html",
			        			controller: "offcanvasController"
			        },
			        "ui-modals": { templateUrl: "layout/modals/ui/ui-modals.html"

			        },
			        "account-modals": { templateUrl: "layout/modals/account/account-modals.html"

			        },
			        "header": { templateUrl: "components/header/header.html",
			        			controller: "headerController"
			        },
			        "footer": { templateUrl: "components/footer/footer.html",
			        			controller: "footerController"
			        },
			        "body": { 	templateUrl: "components/carousel/carousel.html",
			        			controller: "carouselController"
			         },
			      },
				  onEnter: function(){
				   custom.transitionStart();
				  },
				  onExit: function(){
				    custom.transitionEnd();
				  },
			    })

			    .state('page4', {
			      url: "/page4",
			      views: {
			        "overlay": { templateUrl: "layout/overlay/overlay.html",
			        			controller: "overlayController"
			        },
			        "offcanvas": { templateUrl: "layout/offcanvas/offcanvas.html",
			        			controller: "offcanvasController"
			        },
			        "ui-modals": { templateUrl: "layout/modals/ui/ui-modals.html"

			        },
			        "account-modals": { templateUrl: "layout/modals/account/account-modals.html"

			        },
			        "header": { templateUrl: "components/header/header.html",
			        			controller: "headerController"
			        },
			        "footer": { templateUrl: "components/footer/footer.html",
			        			controller: "footerController"
			        },
			        "body": { 	templateUrl: "components/testbed/testbed.html",
			        			controller: "testbedController"
			         },
			      },
				  onEnter: function(){
				   custom.transitionStart();
				  },
				  onExit: function(){
				    custom.transitionEnd();
				  },
			    })

			    .state('page5', {
			      url: "/page5",
			      views: {
			        "overlay": { templateUrl: "layout/overlay/overlay.html",
			        			controller: "overlayController"
			        },
			        "offcanvas": { templateUrl: "layout/offcanvas/offcanvas.html",
			        			controller: "offcanvasController"
			        },
			        "ui-modals": { templateUrl: "layout/modals/ui/ui-modals.html"

			        },
			        "account-modals": { templateUrl: "layout/modals/account/account-modals.html"

			        },
			        "header": { templateUrl: "components/header/header.html",
			        			controller: "headerController"
			        },
			        "footer": { templateUrl: "components/footer/footer.html",
			        			controller: "footerController"
			        },
			      	"body": { 	templateUrl: "components/firebase/firebase.html",
			        			controller: "firebaseController"
			         },
			      },
				  onEnter: function(){
				   custom.transitionStart();
				  },
				  onExit: function(){
				    custom.transitionEnd();
				  },
			    })

			    .state('page6', {
			      url: "/page6",
			      views: {
			        "overlay": { templateUrl: "layout/overlay/overlay.html",
			        			controller: "overlayController"
			        },
			        "offcanvas": { templateUrl: "layout/offcanvas/offcanvas.html",
			        			controller: "offcanvasController"
			        },
			        "ui-modals": { templateUrl: "layout/modals/ui/ui-modals.html"

			        },
			        "account-modals": { templateUrl: "layout/modals/account/account-modals.html"

			        },
			        "header": { templateUrl: "components/header/header.html",
			        			controller: "headerController"
			        },
			        "footer": { templateUrl: "components/footer/footer.html",
			        			controller: "footerController"
			        },
			        "body": { 	templateUrl: "components/fileUpload/fileUpload.html",
			        			controller: "fileUploadController"
			         },
			      },
				  onEnter: function(){
				   custom.transitionStart();
				  },
				  onExit: function(){
				    custom.transitionEnd();
				  },
			    })

			    .state('page7', {
			      url: "/page7",
			      views: {
			        "overlay": { templateUrl: "layout/overlay/overlay.html",
			        			controller: "overlayController"
			        },
			        "offcanvas": { templateUrl: "layout/offcanvas/offcanvas.html",
			        			controller: "offcanvasController"
			        },
			        "ui-modals": { templateUrl: "layout/modals/ui/ui-modals.html"

			        },
			        "account-modals": { templateUrl: "layout/modals/account/account-modals.html"

			        },
			        "header": { templateUrl: "components/header/header.html",
			        			controller: "headerController"
			        },
			        "footer": { templateUrl: "components/footer/footer.html",
			        			controller: "footerController"
			        },
			        "body": { 	templateUrl: "components/parallax/parallax.html",
			        			controller: "parallaxController"
			         },
			      },
				  onEnter: function(){
				   custom.transitionStart();
				  },
				  onExit: function(){
				    custom.transitionEnd();
				  },
			    })


			    .state('game', {
			      url: "/game",
			      views: {
			        "overlay": { templateUrl: "layout/overlay/overlay.html",
			        			controller: "overlayController"
			        },
			        "ui-modals": { templateUrl: "layout/modals/ui/ui-modals.html"

			        },
			        "game-modals": { templateUrl: "layout/modals/game/game-modals.html"

			        },
			        "body": { 	templateUrl: "components/game/game.html",
			        			controller: "gameController"
			         },
			      },
				  onEnter: function(){
				   custom.transitionStart();
				  },
				  onExit: function(){
				    custom.transitionEnd();
				  },
			    });






		});
		//
		////////////////

	return app;

});
