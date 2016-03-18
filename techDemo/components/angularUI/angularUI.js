define(['custom'], function(custom) {

	
	var fileName  = 'angularUI';
  	custom.logger(fileName + "Controller: Init");
	  return {
	  	///////////////////////////////////////
	    apply: function(app) {
			custom.logger(fileName + "Controller: Loaded");
				app.controller(fileName + 'Controller', function($scope, $timeout, cfpLoadingBar, toaster) {	   
				    
				    	$scope.greeting = "AngularUI";

				    	
				    	$scope.contentEdit="<i>interesting</i> stuff";
					
					    $scope.keypressCallback = function($event) {
					        toaster.pop('note', "Keypress", $event.which);					        
					        $event.preventDefault();
					    };
					    
						$scope.items = [
							{ firstName: 'Dean', lastName: 'Sofer',	id: 1, gender: 'Male' },
							{ firstName: 'Dean', lastName: 'Kuntz',	id: 2, gender: 'Male' },
							{ firstName: 'Peter', lastName: 'Piper',id: 3, gender: 'Female' },
							{ firstName: 'Peter', lastName: 'Darwin',id: 4, gender: 'Male' },
							{ firstName: 'Janet', lastName: 'Piper',id: 5, gender: 'Female' },
							{ firstName: 'Dan', lastName: 'Doyon',id: 6, gender: 'Male' },
							{ firstName: 'Andy', lastName: 'Joslin',id: 1, gender: 'Male' },
						];					    
					    
						$scope.inflectorText = 'This is a regular sentence';
						$scope.inflectorType = 'humanize';		    
			   
						$scope.tokenExampleString = "Allen Royston";
						$scope.tokenExample1 = { name:'Bob', subject:'wife' };
				    	$scope.tokenExample2 = ['first','second','third'];
				    	
						$scope.blurCallback = function(evt) {
							toaster.pop('note', "Blur", "");									
						};	
						
						$scope.clickCallback = function(evt){
							toaster.pop('note', "Click", "");	
						};	
						
						$scope.testToaster = function(type){
							
							toaster.pop(type, "Toast successful!", "It works!");
						};
						
						// INIT
						$scope.init = function(){
							 cfpLoadingBar.start();
						};
						
						
					    // fake the initial load so first time users can see it right away:
					    $timeout(function() {
					      cfpLoadingBar.complete();
					    }, 750);
				    	
				    	
				});				
	    },
	    ///////////////////////////////////////
  };
});
