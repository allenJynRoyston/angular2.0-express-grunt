define(['custom', 'konami'], function(custom, konami, app) {
	var fileName  = 'header';
  	custom.logger(fileName + "Controller: Init");
	  return {
	  	///////////////////////////////////////
	    apply: function(app) {
			custom.logger(fileName + "Controller: Loaded");
			
				app.controller(fileName + 'Controller', function($scope, $timeout, $rootScope, psResponsive, $localStorage, $sessionStorage, $detection, stBlurredDialog, $modal, toaster, uiModalCtrl, accountModalCtrl) {	   
				   $scope.fileName = fileName;
				  

				  

					///////////////////////	  INIT
					$scope.pageStatus = {
						isLoading: true,
						hasData: '',						
						hasErrors: false,	
						errorMsg: ''										
					};

					$scope.init = function(){
				  		$scope.userData = [];				  		  		
				  		custom.checkUserData(function(returnState, data){	
				  			$scope.pageStatus.isLoading = false; 
				  			$scope.pageStatus.hasData = returnState; 
				  			
				  			// IF RETURNING USER DATA
				  			if (returnState){					  							  							  			
				  				$scope.userData = data.user;
				  				$scope.userImage = data.image;				  				
				  				$scope.$apply();	
				  			}else{				  								  			
				  				$scope.pageStatus.hasErrors  = data[0];
				  				$scope.pageStatus.errorMsg  = data[1];
				  				if (data[0]){$scope.$apply();};
				  			} 	 						  			
				  		});
				  		
			  			// GET LOGSTATE
			  			 custom.fetchLogState(function(state){				  			 		
			  			 	$scope.logState = state;				  			 		
			  			 });				  		
			  		
					};
					///////////////////////	 
					
					
		 			
		 			////////////////////// LOGOUT
		 			$scope.logout = function(){
		 				stBlurredDialog.open();
		 				$timeout( function(){
			 				var checkOnce = false; 
			 				var fbLogin = new Firebase( custom.firebaseRoot() );
							var auth = new FirebaseSimpleLogin(fbLogin, function() {
									if (!checkOnce){
										checkOnce = true;
							 			toaster.pop('success', "Logged out!", "");	 			
										custom.setLogout();								
						 			} 	
								
							});	
			 				auth.logout();
		 				}, 500);
		 			};
		 			//////////////////////
	  
				 	////////////////////// OPEN LOGIN MODAL			 	
					$scope.login = function () {
						stBlurredDialog.open();
						var modalInstance = $modal.open({
					      	templateUrl: 'loginModal.html',
					  		controller: accountModalCtrl.loginModalCtrl(),
							
						});
					
						modalInstance.result.then(function(returnData)
						{	// LOGIN SUCCESSFUL 					
							$scope.logState = true;				 
							stBlurredDialog.close();
					  		custom.logger('Modal dismissed at: ' + new Date());						 		
						}, 
						function (){
							// MODAL DISMISS
							stBlurredDialog.close();
					  		custom.logger('Modal dismissed at: ' + new Date());
						});
					};
					//////////////////////		



				  	// DETECT AND APPLY STICKY IF IT WORKS
				  	if ($detection.isAndroid()){
				  		$scope.stickyWorks = true;
				  	}
				  	else if($detection.isiOS()){				  		
				  		$scope.stickyWorks = false;
				  	}
				  	else if($detection.isWindowsPhone()){
				  		$scope.stickyWorks = true;
				  	}
				  	else{				  		
				  		// PC OR DESKTOP
				  		$scope.stickyWorks = true;
				  	}
				   
				    $rootScope.responsive = psResponsive;
					$scope.offcanvasToggle = function(){
						 stBlurredDialog.open();	
							custom.offcanvas('toggle');
					};
				   
				   

					
				});			
				
				



				
								
					
	    },
	    ///////////////////////////////////////
  };
});
