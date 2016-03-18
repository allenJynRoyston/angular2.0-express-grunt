define(['custom'], function(custom) {

	
	var fileName  = 'firebase';
  	custom.logger(fileName + "Controller: Init");
	  return {
	  	///////////////////////////////////////
	    apply: function(app) {
			custom.logger(fileName + "Controller: Loaded");
				app.controller(fileName + 'Controller', function($scope, $timeout, $firebase, toaster, $localStorage, stBlurredDialog, $modal, accountModalCtrl) {	   
				    
				    ///////////////////////  VARIABLES
				    $scope.greeting = 'Client-Side Firebase Example';					    				    
					///////////////////////	    
					 
								
					
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
					
					
					
				 	////////////////////// OPEN LOGIN MODAL			 	
					$scope.login = function () {						
						var theFunction =custom.startLogin();
						theFunction.start();
						
					};
					//////////////////////											


					

					//////////////////////  DELETE USER ACCOUNT									
					$scope.openDeleteModal = function () {
						ctrl = accountModalCtrl.deleteModalCtrl(); 	
						stBlurredDialog.open();				
						
						var modalInstance = $modal.open({
					      	templateUrl: 'deleteModal.html',
					  		controller: ctrl,
						    resolve: {
						        data: function () {
						         // return $scope.deleteUserObj;
						        }
						    }
						});
					
					
						modalInstance.result.then(
							function (returnData) {		// CLOSED
								stBlurredDialog.close(); 
								custom.logger('Modal dismissed at: ' + new Date());
								}, 
							function () {				// DISMISSED
								stBlurredDialog.close();
					  			custom.logger('Modal dismissed at: ' + new Date());
					    });
					};
					//////////////////////			

					//////////////////////  CREATE NEW ACCOUNT
					$scope.createNewAccount = function(){
							ctrl = accountModalCtrl.createModalCtrl();
							stBlurredDialog.open();
							
							var modalInstance = $modal.open({
						      	templateUrl: 'createModal.html',
						  		controller: ctrl,
							    resolve: {
							        data: function () {
							        // return $scope.deleteUserObj;
							        }
							    }
							});
						
						
							modalInstance.result.then(
								function (returnData) {  // CLOSE
									toaster.pop("success", "User has been created!", "");
									stBlurredDialog.close();
									custom.logger('Modal dismissed at: ' + new Date());
									}, 
								function () {			// DISMISS
									stBlurredDialog.close();
						  			custom.logger('Modal dismissed at: ' + new Date());
						    });
					
		
					};
					//////////////////////
					
					
					////////////////////// EDIT PROFILE IMAGE					
					$scope.editProfilePic = function(){						
							ctrl = accountModalCtrl.editProfileModalCntrl();						
							stBlurredDialog.open();
							
							var modalInstance = $modal.open({
						      	templateUrl: 'editProfileModal.html',
						  		controller: ctrl,
							    resolve: {
							        data: function () {
							        // return $scope.deleteUserObj;
							        }
							    }
							});
						
						
							modalInstance.result.then(
								function (returnData) {  // CLOSE	
									$scope.init();																					
									stBlurredDialog.close();
									custom.logger('Modal dismissed at: ' + new Date());
									}, 
								function () {			// DISMISS
									
									stBlurredDialog.close();
						  			custom.logger('Modal dismissed at: ' + new Date());
						    });
					
		
					};
					//////////////////////	
					
					
					////////////////////// EDIT PROFILE IMAGE					
					$scope.editProfileData = function(){						
							var ctrl = accountModalCtrl.editProfileDataModalCntrl();						
							stBlurredDialog.open();
							
							var modalInstance = $modal.open({
						      	templateUrl: 'editProfileDataModal.html',
						  		controller: ctrl,
							    resolve: {
							        data: function () {
							        // return $scope.deleteUserObj;
							        }
							    }
							});
						
						
							modalInstance.result.then(
								function (returnData) {  // CLOSE																														
									stBlurredDialog.close();
									custom.logger('Modal dismissed at: ' + new Date());
									$scope.init();
									}, 
								function () {			// DISMISS
									
									stBlurredDialog.close();
						  			custom.logger('Modal dismissed at: ' + new Date());
						    });
					
		
					};
					//////////////////////										
					
					//////////////////////
					$scope.changePassword = function(){
						
							var ctrl = accountModalCtrl.changePasswordCtrl();						
							stBlurredDialog.open();
							
							var modalInstance = $modal.open({
						      	templateUrl: 'changePasswordModal.html',
						  		controller: ctrl,
							    resolve: {
							        data: function () {
							        // return $scope.deleteUserObj;
							        }
							    }
							});
						
						
							modalInstance.result.then(
								function (returnData) {  // CLOSE	
									toaster.pop("success", "Password has been changed!", "");																												
									stBlurredDialog.close();
									custom.logger('Modal dismissed at: ' + new Date());
									}, 
								function () {			// DISMISS
									
									stBlurredDialog.close();
						  			custom.logger('Modal dismissed at: ' + new Date());
						    });	
						
					};
					//////////////////////
					
					
					
					
					
					
					
					
					

				    ///////////////////////  FIREBASE
					    var firebasePosts = new Firebase( custom.firebaseRoot() + '/all/posts/');	    
					    $scope.users = $firebase(firebasePosts);
					    
					    
						firebasePosts
						    .startAt(0)
						    .once('value', function(snapshot) {
						       //$scope.postCount = snapshot.numChildren();
						       console.log(snapshot.val()); 
						       //console.log("Number of posts: " + snapshot.numChildren() ); 
						    });	
						
						// ONCE COMPLETED

						// LISTENING FOR ADD ENTRY
						$scope.allPosts = [];
						firebasePosts.on('child_added', function(snapshot) {
						  var location = snapshot.val();						  	
							  	var messageLocation = new Firebase( custom.firebaseRoot() + "/users/" +  location.post);	   
						 	 		messageLocation.once('value', function(msg) {						 	 			
						 	 			if (msg.val() != null){
						 	 				$scope.allPosts.push(msg.val());
						 	 				$scope.$apply();
						 	 			}
						 	 			else{
						 	 				
											var onComplete = function(error, toaster) {
											  if (error){  	
											  	console.log("Error occured.");
											  }
											  else{	
												console.log("Removed.")
											  }
											};							
											
											var deletePost = new Firebase( custom.firebaseRoot() + "/all/posts/" +  location.timestamp );
											deletePost.remove(onComplete);							 	 				
						 	 				
						 	 			}
						 	 		});
						  
						});										
								
						// LISTENING FOR REMOVEnb v ENTRY		
						firebasePosts.on('child_removed', function(snapshot) {
						  var messageInfo = snapshot.val();
						 
						  //alert('Message ' + messageInfo.text + ' from user ' + messageInfo.user_id + ' should no longer be displayed.');
						});											





					
					// DELETE ENTRY ///////
					$scope.isThinking = false;
					$scope.deleteItem = function(entry){
						
						if (!$scope.isThinking){
							$scope.isThinking = true; 
					        var id = $scope.userData.id;
					        var email = $scope.userData.email;						
			            	var root = custom.firebaseRoot(); 
			            	
			            
			            	
			            	var day = $scope.allPosts[entry].day; 
			            	var month = $scope.allPosts[entry].month;
			            	var year = $scope.allPosts[entry].year;
			            	var date = day + "-" + month + "-" + year;		            	 
			            	var timestamp = $scope.allPosts[entry].timestamp; 								            	

							
																
							var userPosts	 = root + "/users/" + id + "/posts/" + date + "/" + timestamp + "/";							
							var allPosts	 = root + "/all/posts/" + timestamp;
							toaster.pop("success", "Entry deleted", "");
							
							var onComplete = function(error, toaster) {
							  if (error){  	
							  	console.log("Error occured.");
							  }
							  else{	
  
							  }
							};
							
							var onCompleteNext = function(error, toaster) {
							  if (error){  	
							  	console.log("Error occured.");
							  }
							  else{	
							  	$scope.isThinking = false; 
							  	$scope.allPosts.splice(entry, 1);							  	 
							  	$scope.$apply();	
							  }
							};							
							
						
							var deletePost 		= new Firebase(allPosts);
							var deleteUserPost	= new Firebase(userPosts);
							
							deleteUserPost.remove(onComplete);	
							deletePost.remove(onCompleteNext);	
							
						}
						
					};				
					///////////////////////
					

					
					
				   	///////////////////////  FUNCTIONS
					$scope.addToFirebase = function(ev){				            
				            if (ev == undefined) {		// NO EVENT 
								intent();
				            }				            
				            else{
				                if (ev.which == 13) { 	// RETURN EVENT
									intent();
				                }
				            };
				            
				            function intent(){

				            	var timeObj = custom.fetchTimestamp(); 
				            	var day = timeObj.day; 
				            	var month = timeObj.month;
				            	var year = timeObj.year; 
				            	var timestamp = timeObj.time;      	
				            	var root = custom.firebaseRoot(); 
				      			var id = $scope.userData.id;
				      			var email = $scope.userData.email;
				            	var date =  day + "-" + month + "-" + year;
				            					            					            	
								
								// PLACE INTO USER TABLE
								var userPosts	 = root + "/users/" + id + "/posts/" + date + "/" + timestamp + "/";
				            	var firebase_byUser = new Firebase(userPosts);				            	
				            	var entrydata = 	{	id: id,
				            							name: email, 
				            							message: $scope.msg, 
				            							day: day,
				            							month: month,
				            							year: year,
				            							timestamp: timestamp				            					
				            						};										            										            	
				            	firebase_byUser.setWithPriority( entrydata, timestamp);
				            	
				            	
				            	// PLACE INTO USER TABLE
				            	var allPosts	 = root + "/all/posts/" + timestamp;
				            	var firebase_allUser = new Firebase(allPosts);
				            	var postString = id + "/posts/" + date + "/" + timestamp;				            	
				            	firebase_allUser.setWithPriority( {post: postString, timestamp: timestamp}, timestamp);
				            	
				            	$scope.postCount ++;		
				            	
				            	console.log("Posted on: " + day, month, year, timestamp);
				            };
					};		
					///////////////////////
					
					

				   
				    
				});		
				
				
				
						
	    },
	    
	    
	    
    
	    
	    ///////////////////////////////////////
  };
});

