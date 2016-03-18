define(['custom'], function(custom) {

	
	var fileName  = 'slider';
  	custom.logger(fileName + "Controller: Init");
	  return {
	  	///////////////////////////////////////
	    apply: function(app) {
			custom.logger(fileName + "Controller: Loaded");
				app.controller(fileName + 'Controller', function($scope, $firebase) {	   
				    
   
			
			            // 1st ngRepeat demo
			            $scope.slides = [	{id: 1, label: 'slide', img: 'http://dummyimage.com/1000x300/000000/fff'},
			            					{id: 2, label: 'slide', img: 'http://dummyimage.com/1000x300/86B32D/fff'},
			            					{id: 3, label: 'slide', img: 'http://dummyimage.com/1000x300/86B32D/fff'}
			            				];				    
				    

				

				   
				    
				});				
	    },
	    ///////////////////////////////////////
  };
});
