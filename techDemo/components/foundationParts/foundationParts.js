define(['custom'], function(custom) {
	var fileName  = 'foundation';
  	custom.logger(fileName + "Controller: Init");
	  return {	
	    apply: function(app) {
			custom.logger(fileName + "Controller: Loaded");
			///////////////////////////////////////
			// INSERT CODE //
				app.controller(fileName + 'Controller', function($scope, $modal, $timeout, cfpLoadingBar, stBlurredDialog, uiModalCtrl, toaster) {	   
				    				    	
					$scope.greeting = "Foundation Components";						
						
	
						/* TEST MODAL */
						  $scope.items = ['item1', 'item2', 'item3'];
						  var exampleModalCtrl 	= uiModalCtrl.foundationModalCtrl();
						  $scope.open = function () {
							stBlurredDialog.open();
						    var modalInstance = $modal.open({
						      templateUrl: 'foundationModal.html',
						      controller: exampleModalCtrl,
						      resolve: {
						        items: function () {
						          return $scope.items;
						        }
						      }
						    });
						
							modalInstance.result.then(
								function (selectedItem) {
									$scope.selected = selectedItem;}, 
								function () {
									stBlurredDialog.close();
						  			custom.logger('Modal dismissed.');
						    });
						};
						/* END MODAL */
						
						/* CONFIRM MODAL */				  					  
						var confirmModalCtrl 	= uiModalCtrl.confirmModalCtrl();						
						  $scope.openConfirm = function () {
							stBlurredDialog.open();
						    var modalInstance = $modal.open({
						      templateUrl: 'confirmModal.html',
						      controller: confirmModalCtrl						      
						    });
						
							modalInstance.result.then(
								// VIA CLOSE
								function (returnData) 
								{	
									$scope.results(returnData);								
									
								}, 
								// VIA DISMISS
								function () 
								{
									stBlurredDialog.close();
						  			custom.logger('Modal dismissed.');
						    	});
						};
						
						$scope.results = function(type){
							if (type){
								toaster.pop('success', "Yes", '');
							}else{
								toaster.pop('warning', "No", '');
							};
							
						};
						/* END MODAL */						
						
						
						
						/* DROPDOWN */
						  $scope.dropdownItems = [
						    "The first choice!",
						    "And another choice for you.",
						    "but wait! A third!"
						  ];
						/* END DROPDOWN */	
						
						/* ALERTS */
						$scope.alerts = [
						    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
						    { type: 'success round', msg: 'Well done! You successfully read this important alert message.' }
					 	];
					
						$scope.addAlert = function() {
						    $scope.alerts.push({type: 'danger', msg: "Another alert!"});
						};
						
						$scope.closeAlert = function(index) {
						    $scope.alerts.splice(index, 1);
						};
						/* END ALERT */	
						
						/* ACCORDIAN */
						$scope.oneAtATime = true;
							
						$scope.groups = [
						    {
							      title: "Dynamic Group Header - 1",
								  content: "Dynamic Group Body - 1"
							},
							{
							  title: "Dynamic Group Header - 2",
							  content: "Dynamic Group Body - 2"
							    }
						];
							
						$scope.items = ['Item 1', 'Item 2', 'Item 3'];
							
						$scope.addItem = function() {
							    var newItemNo = $scope.items.length + 1;
							    $scope.items.push('Item ' + newItemNo);
						};						
				    	/* END ACCORDIAN */
				    	
				    	/* PROGRESSSBAR */
						  $scope.max = 200;
						
						  $scope.random = function() {
						    var value = Math.floor((Math.random() * 100) + 1);
						    var type;
						
						    if (value < 25) {
						      type = 'success';
						    } else if (value < 50) {
						      type = 'info';
						    } else if (value < 75) {
						      type = 'warning';
						    } else {
						      type = 'alert';
						    }
						
						    $scope.showWarning = (type === 'alert' || type === 'warning');
						
						    $scope.dynamic = value;
						    $scope.type = type;
						  };
						  $scope.random();
  						/* END PROGRESSBAR */
  						
						/* RATINGS */
						$scope.rate = 7;
						$scope.max = 10;
						$scope.isReadonly = false;
						
						$scope.hoveringOver = function(value) {
						    $scope.overStar = value;
						    $scope.percent = 100 * (value / $scope.max);
						};
						
						$scope.ratingStates = [
						    {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
						    {stateOn: 'fa-star', stateOff: 'fa-start-o'},
						    {stateOn: 'fa-heart', stateOff: 'fa-ban'},
						    {stateOn: 'fa-heart'},
						    {stateOff: 'fa-power-off'}
						];
						/* END RATINGS */  	
						
						/* TABS */  	
						  $scope.tabs = [
						    { title:"Dynamic Title 1", content:"Dynamic content 1" },
						    { title:"Dynamic Title 2", content:"Dynamic content 2" }
						  ];
						
						  $scope.alertMe = function() {
						    setTimeout(function() {
						      alert("You've selected the alert tab!");
						    });
						  };						
						/* END TABS */  
						
						// INIT
						$scope.init = function(){
							 cfpLoadingBar.start();
						};
						

					    // fake the initial load so first time users can see it right away:
					    $timeout(function() {
					      cfpLoadingBar.complete();
					    }, 750);
		
  						
				});
				
										
								
		// END INSERT CODE //
		 ///////////////////////////////////////					
	    },   
  };
});
