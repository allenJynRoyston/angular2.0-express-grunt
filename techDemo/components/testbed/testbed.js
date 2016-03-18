define(['custom'], function(custom) {

	
	var fileName  = 'testbed';
  	custom.logger(fileName + "Controller: Init");
	  return {
	  	///////////////////////////////////////
	    apply: function(app) {
			custom.logger(fileName + "Controller: Loaded");
				app.controller(fileName + 'Controller', function($scope, $timeout, cfpLoadingBar, string, Fullscreen, $rootScope, psResponsive, $firebase, angularLoad) {	   
				    

  					$scope.greeting = "Testbed";	
  						
  					
  						
					// INIT ///////////////////
					$scope.init = function(){
						 cfpLoadingBar.start();
					};
					///////////////////////////
					
					

					
				    // LOADING BAR TEST 
				    $timeout(function() {
				      cfpLoadingBar.complete();
				    }, 750);
				   ////////////////////////////
				   
				   
				   
				   // GO FULLSCREEN //////////
				   $scope.goFullscreen = function () {
				
				      if (Fullscreen.isEnabled())
				         Fullscreen.cancel();
				      else
				         Fullscreen.all();
				
				   };
				   ///////////////////////////
				   
				   // CONTENT EDITABLE ///////				
				   	
					$scope.contentEdit="Content editable is <i>interesting</i> stuff.";
									   
				   ///////////////////////////
				   
				   
				   // CONTENT EDITABLE ///////				
				    $scope.data = {
					    'name': 'Json Explorer',
					    'qty': 10,
					    'has_data': true,
					    'arr': [
					        10,
					        'str',
					        {
					            'nested': 'object'
					        }
					    ],
					    'obj': {
					        'hello': 'world'
					    }
					};		   
				   ///////////////////////////	
				   
				   ///////////////////////////	FIREBASE
				   //
				   var firebasePosts = new Firebase( custom.firebaseRoot() + '/all/post');	    
				   $scope.users = $firebase(firebasePosts);
				   $scope.firebaseLoaded = true; 
				   $scope.users.$on("loaded", function() {		
				   		$scope.firebaseLoaded = false; 	
				   });
				   //			
				   ///////////////////////////	
				   

				   
				   ///////////////////////////	ANGULARLOAD
				   // 
				   $scope.isJSLoadingComplete = 'Loading Javascript in Progress...';
				   $scope.JSexternalScript = '//ajax.googleapis.com/ajax/libs/webfont/1.5.2/webfont.js';
					angularLoad.loadScript($scope.JSexternalScript).then(function() {
					    $scope.isJSLoadingComplete = "Javascript loading complete!"
					    
					}).catch(function() {
					    $scope.isJSLoadingComplete = "Javascript loading failure..."
					});		
					
				   $scope.isCSSLoadingComplete = 'Loading CSS in Progress...';
				   $scope.CSSexternalScript = '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css';
					angularLoad.loadCSS($scope.CSSexternalScript).then(function() {
					    $scope.isCSSLoadingComplete = "CSS loading complete!"
					    
					}).catch(function() {
					    $scope.isCSSLoadingComplete = "CSS loading failure..."
					});							   
					//			
				   ///////////////////////////	
				   
				   
				   ///////////////////////////	YOUTUBE
				   // 
				   $scope.youtubeId = 'kxopViU98Xo';					   
				   //			
				   ///////////////////////////	  
				  
				});				
	    },
	    ///////////////////////////////////////
  };
});
