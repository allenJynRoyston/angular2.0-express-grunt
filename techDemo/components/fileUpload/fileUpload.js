define(['custom'], function(custom) {

	
	var fileName  = 'fileUpload';
  	custom.logger(fileName + "Controller: Init");
	  return {
	  	///////////////////////////////////////
	    apply: function(app) {
			custom.logger(fileName + "Controller: Loaded");
				app.controller(fileName + 'Controller', function($scope, $upload) {	   
				    
				    
  					$scope.greeting = "Image Manipulation";	
  						
					// INIT ///////////////////
					$scope.init = function(){
						
					};
					///////////////////////////

			    	//////////////////////// UPLOAD ONE OR MULTIPLE IMAGES
			    	$scope.fileData = [];			    	 
					$scope.previewImage = function($files) {
						    
						    var imageCount = 0; 
						    var totalImages = $files.length;
						    						    
						    function processData(imgCount){		
						    	
						    					    	
						        var reader = new FileReader();						
						        reader.onload = function (e) {								      		
						            $scope.fileData.push( {name: $files[imgCount].name, src: e.target.result, ext: fileExt});
						            $scope.imgPreview = e.target.result;						            
						            $scope.$apply();	
						            
						            imageCount++;
						            if (imageCount < totalImages){
						            	processData(imageCount);
						            }
						            					            
						        };
						        var fileExt = $files[imgCount].name.split('.').pop();
						        
						        //FILTER TYPES
								if (fileExt == 'jpg' || fileExt == 'png' || fileExt == 'gif'){						       					
						        	reader.readAsDataURL($files[imgCount]);
						      	};
						    };
						    processData(imageCount);
					};
					//////////////////////// 
					
					//////////////////////// REMOVE FILE
					$scope.removeImage = function(index){
						$scope.fileData.splice(index, 1);
					};
					////////////////////////
				    
			    	//////////////////////// FILE UPLOAD 
					$scope.uploadFiles = function() {
					    //$files: an array of files selected, each file has name, size, and type.
						alert("files to be uploaded: " + $scope.fileData);
					
						/*
						for (var i = 0; i < $files.length; i++) {
						  var file = $files[i];
						  $scope.upload = $upload.upload({
						    url: 'server/upload/url', //upload.php script, node.js route, or servlet url
						    // method: POST or PUT,
						    // headers: {'header-key': 'header-value'},
						    // withCredentials: true,
						    data: {myObj: $scope.myModelObj},
						    file: file, // or list of files: $files for html5 only
						    // set the file formData name ('Content-Desposition'). Default is 'file'
						    // fileFormDataName: myFile, //or a list of names for multiple files (html5).
						    // customize how data is added to formData. See #40#issuecomment-28612000 for sample code 
						    // formDataAppender: function(formData, key, val){}
						  }).progress(function(evt) {
						    console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
						  }).success(function(data, status, headers, config) {
						    // file is uploaded successfully
						    console.log(data);
						  });
						  //.error(...)
						  //.then(success, error, progress); 
						  //.xhr(function(xhr){xhr.upload.addEventListener(...)})// access and attach any event listener to XMLHttpRequest.
						}
						// alternative way of uploading, send the file binary with the file's content-type.
						// Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed. 
						// It could also be used to monitor the progress of a normal http post/put request with large data
						// $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
						*/
					};
					////////////////////////
					
					
					
					
					//////////////////////// SINGLE TO RESIZE
					$scope.resizeData = {
						sizes 	: "50, 150, 500",
						quality : "70",
						type    : "image/jpeg"
					};
					
					$scope.quality = 70;  
					////////////////////////					
					
					$scope.uploadMultiFiles = function(data){
						alert("files to be uploaded: " + data);
					};
					
					$scope.testUpload = function(){
						
						$('#imageDuplicate1').val('media/background.jpg');
						
					};
					
					
				    
				});				
	    },
	    ///////////////////////////////////////
  };
});
