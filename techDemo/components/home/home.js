define(['custom'], function(custom) {

	
	var fileName  = 'home';
  	custom.logger(fileName + "Controller: Init");
	  return {
	  	///////////////////////////////////////
	    apply: function(app) {
			custom.logger(fileName + "Controller: Loaded");
				app.controller(fileName + 'Controller', function($scope, $timeout, cfpLoadingBar, $firebase) {	   
				    
					// INIT
					$scope.init = function(){
						 cfpLoadingBar.start();
					};	
					
				    // fake the initial load so first time users can see it right away:
				    $timeout(function() {
				      cfpLoadingBar.complete();
				    }, 750);
				   

					// validation      
					$scope.demo = {};		
					$scope.testDate = new Date();
					$scope.today = new Date();
					$scope.addDay = function () {
						$scope.testDate.setDate($scope.testDate.getDate() + 1);
					};

				   
				   	// smart tables      
			            var fakeUserList = [
			
			                {
			                    firstName: "Allen",
			                    lastName: "Royston",
			                    email: "allen@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "Stephen",
			                    lastName: "Halverson",
			                    email: "stephen@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "Josh",
			                    lastName: "Crawford",
			                    email: "josh@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "Little",
			                    lastName: "Mac",
			                    email: "punchedout@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "Mike",
			                    lastName: "Bison",
			                    email: "shadowloo@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "Mister",
			                    lastName: "Fister",
			                    email: "ewgross@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "Kirby",
			                    lastName: "Superstar",
			                    email: "isuck@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "Mario",
			                    lastName: "Mario",
			                    email: "supermario@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "Cory",
			                    lastName: "Feldmen",
			                    email: "worstpersonever@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "Jorney",
			                    lastName: "The Band",
			                    email: "theyonlyhaveonegoodsonganditisterrible@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "The",
			                    lastName: "Jesus",
			                    email: "imaginaryfriend@gravityjack.com",
			                    logo: "image.jpg",
			
			                },
			                {
			                    firstName: "New",
			                    lastName: "Girl",
			                    email: "sopretty@gravityjack.com",
			                    logo: "image.jpg",
			
			                }
			
			            ];
						$scope.actionCollection = [];   // FOR DELETION
						$scope.rowCollection = fakeUserList;     // PULLED FROM DATACONTEXT 
						$scope.columnCollection = [     // SORTS THE TABLE
						{ isEditable: true, label: 'First Name', map: 'firstName', headerClass: "firstName-header" },
						{ isEditable: true, label: 'Last Name', map: 'lastName', cellClass: "lastName-cell" },
						{ isEditable: true, label: 'e-mail', map: 'email' },
						{ label: 'Logo', map: 'logo' }
						];
						
						//KEEP TRACK OF SELECTED ITEMS / ADDS TO ACTION COLLECTION
						$scope.$on('selectionChange', function (event, args) {
						    $scope.actionCollection = [];
						    for (var i = 0; i < $scope.rowCollection.length; i++) {
						        if ($scope.rowCollection[i].isSelected == true) {
						            $scope.actionCollection.push({ order: i, object: $scope.rowCollection[i] })
						        }
						    }
						
						});
						
						
			        // DELETE ENTRY 
			        $scope.deleteAction = function () {
			            for (i = 0; i < $scope.actionCollection.length; i++) {
			                var order = $scope.actionCollection[i].order;
			                $scope.rowCollection.splice(order, 1);                
			            }
			            $scope.actionCollection = [];
			            console.log("Removed locally: [REQUIRES ENDPOINT]");
			        }						
						
						
						

                    // TABLE CONFIGURATION - CHANGE BEHAVIOR HERE
                    $scope.globalConfig = {
                        isGlobalSearchActivated: true,
                        selectionMode: 'single',
                        displaySelectionCheckbox: true,
                        isPaginationEnabled: true,
                        itemsByPage: 8,
                    };
									   	
				   
				   
				    // SELECT 
				    $scope.singleResultData = [];
					$scope.singleWebBrowsers = [
					 	{	icon: "<img src='media/select/OmniWeb.png'>",	name: "Opera...",				maker: "(Opera Software)",		ticked: true	},
					 	{	icon: "<img src='media/select/OmniWeb.png'>",	name: "Internet Explorer...",	maker: "(Microsoft)",			ticked: false	},
					 	{	icon: "<img src='media/select/OmniWeb.png'>",	name: "Firefox...",				maker: "(Mozilla Foundation)",	ticked: false	},
					 	{	icon: "<img src='media/select/OmniWeb.png'>",	name: "Safari...",				maker: "(Apple)",				ticked: false	},
					 	{	icon: "<img src='media/select/OmniWeb.png'>",	name: "Chrome...",				maker: "(Google)",				ticked: false	}
					];
					
				    // MULTI 
				    $scope.multiResultData = [];
					$scope.multiWebBrowsers = [
					 	{	icon: "<img src='media/select/OmniWeb.png'>",	name: "Opera...",				maker: "(Opera Software)",		ticked: true	},
					 	{	icon: "<img src='media/select/OmniWeb.png'>",	name: "Internet Explorer...",	maker: "(Microsoft)",			ticked: false	},
					 	{	icon: "<img src='media/select/OmniWeb.png'>",	name: "Firefox...",				maker: "(Mozilla Foundation)",	ticked: false	},
					 	{	icon: "<img src='media/select/OmniWeb.png'>",	name: "Safari...",				maker: "(Apple)",				ticked: false	},
					 	{	icon: "<img src='media/select/OmniWeb.png'>",	name: "Chrome...",				maker: "(Google)",				ticked: false	}
					];					


				   	// SELECTION 
					  $scope.selectionStuff = [
					    {selected: false, label: 'Scotchy scotch'},
					    {selected: true, label: 'Monacle'},
					    {selected: true, label: 'Curly mustache'},
					    {selected: false, label: 'Top hat'}
					  ];
				   
				   
				   
					// CHECKLIST 
						$scope.roles = [
						    {id: 1, text: 'guest'},
						    {id: 2, text: 'user'},
						    {id: 3, text: 'customer'},
						    {id: 4, text: 'admin'}
						];
						$scope.user = {
						    roles: [$scope.roles[1]]
						};
						$scope.checkAll = function() {
						    $scope.user.roles = angular.copy($scope.roles);
						};
						$scope.uncheckAll = function() {
						    $scope.user.roles = [];
						};
						$scope.checkFirst = function() {
						    $scope.user.roles.splice(0, $scope.user.roles.length); 
						    $scope.user.roles.push($scope.roles[0]);
						};
					// END CHECKLIST
					
					  	

				
			  		// FORMLY 
			  					  		 
					  	// SETUP
						$scope.formOptions = {
							uniqueFormId: 'simpleform',
							submitCopy: 'Save Info'
						};	
						$scope.submittedData = new Object; 
						$scope.formData = {};													  
					 
					
						
						// EXAMPLE DATA
						$scope.formFields = [
							{
								type: 'email',
								placeholder: 'janedoe@gmail.com',
								key: 'email',
								required: true,
							},
							{
								type: 'text',
								label: 'First Name',
								placeholder: 'Jane',
								required: true,
							}, 
							{
								type: 'text',
								label: 'Last Name',
								placeholder: 'Doe',
								required: true,
							},
							{
								type: 'textarea',
								label: 'Textarea',
								placeholder: 'I am a textarea!',
								lines: 4,
								required: true,
							},					
							{
								type: 'radio',
								label: 'Radio Buttons',
								default: 'valueMaybe',
								required: true,
								options: [
									{
										name: 'YES',
										value: 'valueYes'
									}, {
										name: 'MAYBE',
										value: 'valueMaybe'
									}, {
										name: 'NO',
										value: 'valueNo'
									}
								]
							},
							{
									type: 'text',
									label: 'Disabled field',
									disabled: true,
									default: 'yes',
									required: true
							}, 
							{
									type: 'number',
									label: 'Number 1-10',
									default: 5,
									min: 0,
									max: 10,
									required: true
							},
							{
									type: 'select',
									label: 'Select and Options',
									default: 0,
									required: true,
									options: [
										{
											name: 'Car',
											group: 'inefficiently'
										}, {
											name: 'Helicopter',
											group: 'inefficiently'
										}, {
											name: 'Sport Utility Vehicle',
											group: 'inefficiently'
										}, {
											name: 'Bicycle',
											group: 'efficiently'
										}, {
											name: 'Skateboard',
											group: 'efficiently'
										}, {
											name: 'Walk',
											group: 'efficiently'
										}, {
											name: 'Bus',
											group: 'efficiently'
										}, {
											name: 'Scooter',
											group: 'efficiently'
										}, {
											name: 'Train',
											group: 'efficiently'
										}, {
											name: 'Hot Air Baloon',
											group: 'efficiently'
										}
									]
								},
								{
										type: 'password',
										label: 'Password',
										required: true,
								}, 
								{
										type: 'checkbox',
										label: 'Checkbox',
										required: true,
										
								}																			
																											
						];
						
						// SUBMIT
						$scope.isReady = false; 
						$scope.onSubmit = function onSubmit() {
							$scope.formData;
							$scope.isReady = true; 
							
							// SAVE TO FIREBASE TEST
							var root = custom.firebaseRoot();
							var testPost	 = root + "/test/";
							var firebase_test = new Firebase(testPost);							
				            firebase_test.setWithPriority( $scope.formData, 1);							
							
							
											
						};							
					
				
	    
				});				
	    },
	    ///////////////////////////////////////
  };
});
