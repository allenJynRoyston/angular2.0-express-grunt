define(['custom', 'threeJS', 'threeJS_stats', 'orbitControls'], function(custom, threeJS, threeJS_stats, orbitControls, gameModalCtrl, app) {
	var fileName  = 'game';
  	custom.logger(fileName + "Controller: Init");
	  return {
	  	///////////////////////////////////////
	    apply: function(app) {
			custom.logger(fileName + "Controller: Loaded");
				app.controller(fileName + 'Controller', function($scope, $modal, cfpLoadingBar, stBlurredDialog, psResponsive, SmoothScroll, toaster, uiModalCtrl, gameModalCtrl, $timeout, $interval, $window, $http, $timeout) {

					// variables
					$scope.variables = {

						// first time load
						onload:function(){
							$scope.variables.system();
							$scope.variables.camera();
							$scope.variables.io();
							$scope.variables.canvas();
							$scope.variables.grid();
							$scope.variables.physics();
							
							// USE JQUERY TO ALWAYS GET RIGHT HEIGHT - SOMETIMES BINDING DOESN'T WORK
							$('#main-wrapper').css('height', $scope.viewport_height);
							$('#game-grid-container').css('height', $scope.viewport_height);

						},

						// system variables
						system:function(){
							$scope.screenSize = psResponsive;
							$scope.pathing_tile = 'media/game/tile/';
							$scope.pathing_particle = 	'media/game/particle/';
							$scope.pathing_textures = 	'media/game/textures/';
							$scope.pathing_skybox =  	'media/game/skybox/';
							$scope.pathing_threeJS_json = 'threeJS/json/';

							$scope.aspectWidth =  $( window ).width();
							$scope.aspectHeight = $scope.aspectWidth * .5625;
							$scope.aspectMaxWidth = parseInt($('#game-wrapper').css('max-width'));
							$scope.aspectMinWidth = parseInt($('#game-wrapper').css('min-width'));														
							
							$scope.layer_bg1  = 100;
							$scope.layer_main = 1000;
							$scope.layer_fg1  = 2000;
							$scope.layer_fg2  = 3000;

							$scope.loadReady = false;
							$scope.loadComplete = 0;
							$scope.assetsLoaded = 0;
							
							$scope.hiddenWindows = [];
						},

						// grid variables
						grid: function(){
							$scope.tile_size = 50;
						},

						// camera defaults
						camera:function(){

							// height of display
							$scope.viewport_height = $(window).height();

							// container sizes
							$scope.container_width  = $('#game-wrapper').width();
							$scope.container_height = $scope.viewport_height;
							$scope.container_border_size = 5;

							// canvas size - as long as their in proportion it can be any size
							// currently its 1.8:1 width/height ratio
							$scope.mapSize_w_default = $scope.container_width;
							$scope.mapSize_h_default = $scope.viewport_height;

							// camera attributes
							$scope.camera_perspective = 200; 
							$scope.camera_isAnimated;



						},

						// io defaults
						io:function(){
							$scope.cameraType = "rotate";
							$scope.mouseCoords = {x: 0, y:0};
							$scope.touchingObject = null;
							$scope.togglePerspective = false;
							$scope.control_buffer = [];
							$scope.isControlActive = false;
							$scope.isUserInput = true;
						},

						canvas:function(){
							$scope.speed_x = .01;
							
							$scope.canvasData = [];
							$scope.canvasData['order'] = [];
							$scope.activeCanvas;
							$scope.currentLayout; 
							$scope.aspectFix = 0;
						},
						
						physics: function(){
							$scope.globalGravity = "normal";
						}

					};

					// all data request go here
					$scope.init = function(){
						custom.startLoggerGroup('WebGL');
						
						$scope.loadCompleteNeeded = 5; 	// SHOULD MATCH NUMBER OF LOAD REQUESTS in INIT
						$scope.loadPercentage = 0;
						$scope.variables.onload();
						
						$scope.canvas.buildCanvasInit();
						

						$scope.load.get_tileData( "setName", function(data){
							$scope.tileData = data;
							$scope.system.checkForComplete();
						});

						$scope.load.get_mapData( "mapName", function(data){
							$scope.mapData = data;
							$scope.system.checkForComplete();
						});

						$scope.canvas.addToScene( $scope.pathing_threeJS_json + 'ball.json', 'canvasContainer_a', false, function(){
							$scope.system.checkForComplete();
						});	
										
						$scope.canvas.addToScene( $scope.pathing_threeJS_json + 'snow.json', 'canvasContainer_b', false, function(){
							$scope.system.checkForComplete();
						});	
						
						$scope.canvas.addToScene( $scope.pathing_threeJS_json + 'dust.json', 'canvasContainer_c', false, function(){
							$scope.system.checkForComplete();
						});	
																	
					};

					// when everything is ready
					$scope.ready = {
						run:function(){
							// run only once
							if (!$scope.loadReady){
								custom.endLoggerGroup('WebGL');
								// setup canvas		
								$scope.io.watchScreen(); 	
								$scope.io.watchMouse();		
									
								// size screen
								$scope.io.executeControlBuffer();
								$scope.io.addToControlBuffer([ "changeResolution", "med" ] ); 	
								$scope.io.addToControlBuffer([ "changeLayout", "fullscreen1" ] );	
								$scope.io.addToControlBuffer([ "hideWindow", ["#game-grid-bottom-info-a", 'help', true] ]);
								//$scope.io.addToControlBuffer([ "hideWindow", ["#game-grid-bottom-info-b", 'Buttons', false] ]);	
								$scope.io.addToControlBuffer([ "hideWindow", ["#game-grid-bottom-info-c", 'T/R/Z', false] ]);	
								
								$scope.io.addToControlBuffer([ "changeOverlayColor", ["canvasContainer_a", 'white', 2.5, 0]	 ]);
								$scope.io.addToControlBuffer([ "changeOverlayColor", ["canvasContainer_b", 'white', 2.5, 0]	 ]);
								$scope.io.addToControlBuffer([ "changeOverlayColor", ["canvasContainer_c", 'white', 2.5, 0]	 ]);	
									
									
													
								$scope.canvas.init(function(){
																			
													
											$scope.grid.createMapFromData(function(map){
												console.log("Map has been built.  Object returned." );																
												$scope.loadReady = true;
												$scope.ready.fullyLoaded();
											});
										
								
								});
							}
						},
						
						fullyLoaded:function(){
							$('.hideForLoad').each(function(){	$(this).removeClass('hideForLoad');	});
							console.timeEnd('Site loaded in');
							console.groupEnd('Site Info');
						},
					};

					// web
					$scope.web = {
						callModal:function(name){

								$scope.openConfirm = function () {
									stBlurredDialog.open();
								    var modalInstance = $modal.open({
								      templateUrl: 'changeResolutionModal.html',
								      controller: gameModalCtrl.changeResolutionCtrl()
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

								$scope.results = function(data){
									$scope.io.addToControlBuffer([ "changeResolution", data ] );
									toaster.pop('success', "Resolution changed to: " + data, '' );
								};

								$scope.openConfirm();
						},
					};
					
					// system
					$scope.system = {
						
						returnRandomNumber:function(value, offset){
							var o = 0;
							if (offset){
								o = value/2;
							}
							n = Math.floor((Math.random() * value) + 1 - o);							
							return n;
						},
						
						trackMouse:function(evt) {
						    var pos = $scope.system.getMousePos(evt);	    
						    $scope.mouseCoords = {x: pos.x, y: pos.y};
						},
						
						getMousePos:function(evt) {	    
						    var doc = document.documentElement || document.body;
						    var pos = {
						        x: evt ? evt.pageX : window.event.clientX + doc.scrollLeft - doc.clientLeft,
						        y: evt ? evt.pageY : window.event.clientY + doc.scrollTop - doc.clientTop
						    };
						    return pos;
						},							
							
						getMouseVector: function(container){
							var container = $('#' + $scope.activeCanvas).parent(),
								offsetLeft = container.offset().left,
								offsetTop = container.offset().top,
								border = parseInt(container.css('border'));
								
																
								var x =   ( ($scope.mouseCoords.x - offsetLeft - border) / container.width() ) * 2 - 1,
								 	y = - ( ($scope.mouseCoords.y - offsetTop - border) / container.height() ) * 2 + 1;
								
								
							
							return {x: x, y: y};		
						},	
							
						getRandomColor:function() {
						    var letters = '0123456789ABCDEF'.split('');
						    var color = '#';
						    for (var i = 0; i < 6; i++ ) {
						        color += letters[Math.floor(Math.random() * 16)];
						    }
						    return color;
						},						
						
						hideWindow:function(name, description, allowRemove){							
							
							if ( !$(this).hasClass('hidden') ){
								$(name).animate({opacity: 0, transition: '0s'}, function(){
									$scope.hiddenWindows.push( {id: name, description: description, allowRemove: allowRemove, zIndex: $(this).css('z-index')} );
									$(this).css('z-index', -1);	
									$(this).addClass('hidden');
								});
							}
						},
						
						restoreWindow:function(name, index){
							$(name).removeClass('hidden');
							$(name).css('z-index', $scope.hiddenWindows[index].zIndex );
							$(name).animate({opacity: 1, transition: '0s'}, function(){						});	
							$scope.system.removeFromHiddenArray(index);
							
						},
						
						removeWindow:function(name, index){
							$scope.system.removeFromHiddenArray(index);
							//$(name).remove();
						},
						
						removeFromHiddenArray:function(index){
							$scope.hiddenWindows.splice(index, 1);
						},
						
						// loadComplete
						checkForComplete:function(){
							$scope.loadComplete ++;
							$scope.loadPercentage = Math.round( ($scope.loadComplete/$scope.loadCompleteNeeded)*100 );
							if ($scope.loadComplete >= $scope.loadCompleteNeeded){
								$scope.ready.run();
							};
						},

						// refresh all angular hooks
						refreshApp:function(){
							if(!$scope.$$phase) {
								$scope.$apply();
							};
						},
					};

					// input/output
					$scope.io = {

						watchMouse:function(){
							document.onmousemove = $scope.system.trackMouse;
						},
						
						// monitor screen size
						watchScreen:function(){
							$scope.$watch(function(){
							       return $window.innerWidth;
							    }, function(value) {

									var i = $scope.canvasData.order.length; while (i--){

										// get canvas object
										var canvasObj = $scope.canvasData.order[i].object;
										
										// resize canvas			
										$scope.canvas.resizeCanvas(i, $scope.resolution_x, $scope.resolution_y);
									}	
							


							});
						},

						// select camera attribute
						selectCameraType:function(type){
							toaster.pop('success', type + ' selected.' , 'Use the arrow keys!' );
							$scope.cameraType = type;
						},
						
						
										
						// keypresses
						keypressCallback: function($event){
							
							
							if($scope.isUserInput){
								$event.preventDefault();
								var keyPress = $event.which,
										dir;
										if (keyPress == 37){dir = "l";}
										if (keyPress == 38){dir = "u";}
										if (keyPress == 39){dir = "r";}
										if (keyPress == 40){dir = "d";}

								//$scope.camera.keys(dir);
								$scope.canvas.keys(dir);
							}
						},

						// add to control buffer
						addToControlBuffer:function( actionToAdd, applyBufferLimit){
								if (applyBufferLimit != undefined || applyBufferLimit != null){
									if ($scope.control_buffer.length <= applyBufferLimit){
										$scope.control_buffer.push(actionToAdd);
									}
								}
								else{
									$scope.control_buffer.push(actionToAdd);
								}
						},

						// execute what's in t
						executeControlBuffer:function(){
							$interval(function(){
							if (!$scope.isControlActive && $scope.control_buffer.length > 0){
								 	$scope.isControlActive = true;
								 	cPackage 	= $scope.control_buffer[0];
								 	action 		= cPackage[0];
								 	data   		= cPackage[1];
								 	complete 	= cPackage[2];
								 	
									switch(action) {
										
										// system 
										case "hideWindow":
											 $scope.system.hideWindow(data[0], data[1], data[2]);
											 actionComplete();
										break;									
									    
									    case "delay":
											$timeout(function(){
												actionComplete();
											}, data);
									    break;
									    
									    case "userInput":{
											$scope.isUserInput = data;
											actionComplete();	
									    }									    
									    //
										
										
										// canvas
										case "changeOverlayColor":
											// data[0]: canvasName data[1]: color data[2]: transistion time data[3]: opacity																					
											$('#' + data[0]).parent().find('.gameMask').css({	'background-color': data[1], 'transition': data[2] + 's', 'opacity': data[3]	});											
											actionComplete();	
											
																																																								
										break;
																				
									    case "rtzCanvas":
									    		$timeout(function(){									
													newCoords = data;	
														
													$scope.canvasData[$scope.activeCanvas].setting = {
														p:  newCoords.p,
														t:  newCoords.t,
														rX: newCoords.rX, rY: newCoords.rY, rZ: newCoords.rZ,
														tX: newCoords.tX, tY: newCoords.tY, tZ: newCoords.tZ,
														cX: newCoords.cX, cY: newCoords.cY, cZ: newCoords.cZ,
														offsetX: 0, offsetY: 0,										
													};													
													
													
													$scope.canvas.applyCSSToCanvas(function(){									
														actionComplete();	
													});		
												}, 1);
																			    
									    break;										
										
										
										// webGL
									    case "changeResolution":    	
									       	$scope.canvas.changeResolution(data, function(){
													actionComplete();
											});
									    break;

									    case "changeFocus":
									    	$scope.canvas.changeFocus(data);									    	
									    	actionComplete();	
									    break;
									   
									    case "changeLayout":									  
									   		$scope.canvas.changeLayout(data);									   			 									   			 
									   		actionComplete();	
									    break;
									    
									    case "clearCanvas":								  
									   		$scope.canvas.clearScene(data, function(){ 
									   			actionComplete();	
									   		});							   			 									   			 									   		
									    break;									    
									    
									    case "rebuildCanvas":				  	
									    	// IF not empty
									    	if ( $scope.canvasData[data[1]].status != 'default'){
									    		$scope.canvas.clearScene(data[1], function(){ 
													$scope.canvas.addToScene( $scope.pathing_threeJS_json + data[0], data[1], false, function(){
														actionComplete();	
														$scope.canvas.constructScene(data[1], function(){
															$scope.io.addToControlBuffer([ "changeFocus", data[1] ] );
															$scope.io.addToControlBuffer([ "changeLayout", $scope.currentLayout ] );		
														});
													});	
									    		});		
									    	}
									    	// if already cleared, then just rebuild
									    	else{
												$scope.canvas.addToScene( $scope.pathing_threeJS_json + data[0], data[1], false, function(){
													actionComplete();	
													$scope.canvas.constructScene(data[1], function(){
														$scope.io.addToControlBuffer([ "changeFocus", data[1] ] );
														$scope.io.addToControlBuffer([ "changeLayout", $scope.currentLayout ] );		
													});
												});										    		
									    	}			    												
										break;
										
									   	case "addToCanvas":										    				 
									   		$scope.canvas.addToScene( $scope.pathing_threeJS_json + data[0], data[1], true, function(){									   			
									   			actionComplete();										   			
									   		});							   			 									   			 									   		
									   	break;	
									    
									   	case "togglePause":									    				 
									   		$scope.canvas.togglePause(data);							   			
									   		actionComplete();										   									   			 									   			 									   		
									   	break;										    										

									   	case "pauseScene":
									   		$scope.canvas.pauseScene(data);
									   		actionComplete();	
									   	break;
									   	
									   	case "unpauseScene":
									   		$scope.canvas.unpauseScene(data);
									   		actionComplete();	
									   	break;									   	
									    
									   	case "pauseAllScenes":
									   		$scope.canvas.pauseAllScenes();
									   		actionComplete();	
									   	break;
									   
									   	case "unpauseAllScenes":
									   		$scope.canvas.unpauseAllScenes();
									   		actionComplete();
									   	break;
									   
									   
									  	case "toggleRender":								    				 
									   		$scope.canvas.toggleRender(data);					   			
									   		actionComplete();										   									   			 									   			 									   		
									  	break;
									  		
									  	case "activeRenderOnly":
									  		$scope.canvas.renderActiveOnly();										    				 						   			
									   		actionComplete();										   									   			 									   			 									   		
									  	break;										  		
									  		
									  	case "enableRender":									    				 
									   									   			
									   		actionComplete();										   									   			 									   			 									   		
									  	break;
									  	
									  	case "disableRender":									    				 				   			
									   		actionComplete();										   									   			 									   			 									   		
									  	break;		
									  	
									  	case "enableAllRender":									    				 
									   		$scope.canvas.resumeAllRender();					   			
									   		actionComplete();										   									   			 									   			 									   		
									  	break;	
									  	
									  	case "disableAllRender":									  											    				
									   		$scope.canvas.stopAllRender();					   			
									   		actionComplete();										   									   			 									   			 									   		
									  	break;										  									  								  	
									  											  									   
								
									}
								}
							},0);


							function actionComplete(){
								$scope.isControlActive = false;
								$scope.control_buffer.shift();
							};
						},

					};

					// canvas camera
					$scope.camera = {


						// TOGGLE PERSPECTIVE
						toggleTopdown: function(){
								$scope.togglePerspective = $scope.togglePerspective === false ? true: false;
								if($scope.togglePerspective){
									$scope.camera_perspective = 2000;
								}
								else{
									$scope.camera_perspective = 600;
								}
						},


					};

					// game grid
					$scope.grid = {

							// create map data
							createMapFromData:function(callback){

								mapData = $scope.mapData;
								tileData = $scope.tileData;

								var mapLayout = [];
								
								var i = mapData.length; while (i--){
										var n = mapData[i].length; while (n--){										

											 var tileData = 	$scope.tileData[mapData[i][n][0]];
											 var row = i;
											 var column = n;

											 mapLayout.push({texture: $scope.texture_pathing + tileData[0].fileName, location: [i, n], type: tileData[1].type});

										}
								}
								callback(mapLayout);

							},
					};

					// loading function
					$scope.load = {
						
						get_json: function(address, callback){

						  $http({method: 'GET', url: address}).
							    success(function(data, status, headers, config) {
							    	callback(true, data);
							    }).
							    error(function(data, status, headers, config) {
							    	callback(false, status);
						  });			
						  

							
						},
								
						get_mapData: function( loadParamters, callback ){

								// test map data
								var data = [
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
									[	[0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1], [0, 1], [0, 1],[0, 1], [0, 1],[0, 1]  ],
								];
								setTimeout(function(){
									callback(data);
								}, 0);
						},

						get_tileData: function( loadParameters, callback ){
							// TEXTURE DATA
							var data = [
									[ {fileName: 'grass-128x128.png'}, {type: 'grass', info: 'Basic grass.  No defense or offensive bonus.'} ],
									[ {fileName: 'grass-128x128.png'}, {type: 'blank', info: 'An empty void in time and space.'} ],
									[ {fileName: 'grass-128x128.png'}, {type: 'grass', info: '---'} ],
							];

							callback( data );
						},

					};

					// used for testing
					$scope.testing = {
						
						pause: function(sceneId){
							$scope.io.addToControlBuffer([ "togglePause", $scope.activeCanvas ] );									
						},	
						pauseAll: function(sceneId){
							//$scope.io.addToControlBuffer([ "pauseScene", $scope.activeCanvas ] );  //single		
							$scope.io.addToControlBuffer([ "pauseAllScenes" ] );					// all
						},	
						unpauseAll: function(sceneId){							
							//$scope.io.addToControlBuffer([ "unpauseScene", $scope.activeCanvas ] );	// single
							$scope.io.addToControlBuffer([ "unpauseAllScenes" ] );	// all
															
						},	
						
						render:function(){
							$scope.io.addToControlBuffer([ "toggleRender", $scope.activeCanvas ] );		
						},	
						renderOnly:function(){
							$scope.io.addToControlBuffer([ "activeRenderOnly" ] );		
						},							
											
						renderAll:function(){
							$scope.io.addToControlBuffer([ "enableAllRender" ] );	
						},						
						
						unrenderAll:function(){
							$scope.io.addToControlBuffer([ "disableAllRender" ] );				
						},							
																								
						
						changeGravity:function(type){
								switch(type) {
								    case 0:
								    	$scope.globalGravity = "normal";
								    break;
								    case 1:
								        $scope.globalGravity = "reverse";
								    break;
 									case 2:
								        $scope.globalGravity = "float";
								    break;
								};
						},
						
						clear: function(sceneId){
								$scope.io.addToControlBuffer([ "clearCanvas", $scope.activeCanvas ] );
						},
						
						rebuild: function(sceneId){
								$scope.io.addToControlBuffer([ "rebuildCanvas", ['ball.json', $scope.activeCanvas] ] );											
						},								
						
						addToCanvas:function(){											
							var i = 10; while(i--){
								$scope.io.addToControlBuffer([ "addToCanvas", ['justObjects.json', $scope.activeCanvas] ] );	
							};							
						},	
		
						// fullscreen
						screenLayout:function(type){

							if (type == 1){					
								$scope.io.addToControlBuffer([ "changeLayout", "splitWidth" ], 1);			
													
							};
							if (type == 2){			
								$scope.io.addToControlBuffer([ "changeLayout", "splitHeight" ], 1);								
												
							};		
							
							if (type == 3){
								$scope.io.addToControlBuffer([ "changeFocus", 'canvasContainer_a' ] );			
								$scope.io.addToControlBuffer([ "changeLayout", "fullscreen1" ], 1);																						
							};	
							
							if (type == 4){				
								$scope.io.addToControlBuffer([ "changeFocus", 'canvasContainer_b' ] );
								$scope.io.addToControlBuffer([ "changeLayout", "fullscreen2" ], 1);						
											
							};		
							
							if (type == 5){		
								$scope.io.addToControlBuffer([ "changeFocus", 'canvasContainer_c' ] );
								$scope.io.addToControlBuffer([ "changeLayout", "fullscreen3" ], 1);								
												
							};	
							
							if (type == 6){			
								$scope.io.addToControlBuffer([ "changeLayout", "mainBottom" ], 1);							
									
							};	

							if (type == 7){		
								$scope.io.addToControlBuffer([ "changeLayout", "mainTop" ], 1);						
															
							};																													

						},
						

					};

					// quick test
					$scope.test = function(){
						
					};

					// threejs canvas stuff
					$scope.canvas = {
						
						
						init:function(callback){
								$scope.canvas.getCanvasDefaults();				
								console.time('Build Scenes') ;
								$scope.canvas.animateLoop();
								
								$scope.canvas.constructAllScenes(function(){										
									console.timeEnd('Build Scenes') ;
									
									callback();
								});
								
						},											
						
						changeLayout:function(type){
							$scope.currentLayout = type;							
							switch(type) {
							    case "splitWidth":
									data = {
										canvas: $('#game-grid-control_1'),
										height: '100%',	width: '50%', 
										left: '0px', 	right: 'auto',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);
									
									data = {
										canvas: $('#game-grid-control_2'),
										height: '100%',	width: '50%', 
										left: 'auto', 	right: '0px',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
									
									data = {
										canvas: $('#game-grid-control_3'),
										height: '100%',	width: '100%', 
										left: 'auto', 	right: 'auto',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);		
							    break;
							    case "splitHeight":
									data = {
										canvas: $('#game-grid-control_1'),
										height: '75%',	width: '75%', 
										left: '0px', 	right: 'auto',
										bottom: 'auto', top: '0px',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);
									
									data = {
										canvas: $('#game-grid-control_2'),
										height: '75%',	width: '75%', 
										left: '0px', 	right: 'auto',
										bottom: '0px', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
									
									data = {
										canvas: $('#game-grid-control_3'),
										height: '0%',	width: '0%', 
										left: 'auto', 	right: 'auto',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
							    break;
							    case "fullscreen1":
									data = {
										canvas: $('#game-grid-control_1'),
										height: '100%',	width: '100%', 
										left: '0px', 	right: 'auto',
										bottom: 'auto', top: '0px',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);
									
									data = {
										canvas: $('#game-grid-control_2'),
										height: '0px',	width: '0px', 
										left: '0px', 	right: 'auto',
										bottom: '0px', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
									
									data = {
										canvas: $('#game-grid-control_3'),
										height: '0px',	width: '0px', 
										left: 'auto', 	right: 'auto',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
							    break;	
							    
							    case "fullscreen2":
									data = {
										canvas: $('#game-grid-control_1'),
										height: '0%',	width: '0%', 
										left: '0px', 	right: 'auto',
										bottom: 'auto', top: '0px',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);
									
									data = {
										canvas: $('#game-grid-control_2'),
										height: '100%',	width: '100%', 
										left: '0px', 	right: 'auto',
										bottom: 'auto', top: '0px',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
									
									data = {
										canvas: $('#game-grid-control_3'),
										height: '0%',	width: '0%', 
										left: 'auto', 	right: 'auto',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
							    break;
							    case "fullscreen3":
									data = {
										canvas: $('#game-grid-control_1'),
										height: '0%',	width: '0%', 
										left: 'auto', 	right: 'auto',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);
									
									data = {
										canvas: $('#game-grid-control_2'),
										height: '0%',	width: '0%', 
										left: 'auto', 	right: 'auto',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
									
									data = {
										canvas: $('#game-grid-control_3'),
										height: '100%',	width: '100%', 
										left: 'auto', 	right: 'auto',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
							    break;		
							    					    
							    case "mainBottom":
									data = {
										canvas: $('#game-grid-control_1'),
										height: '20%',	width: '20%', 
										left: '25px', 	right: 'auto',
										bottom: '50px', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);
									
									data = {
										canvas: $('#game-grid-control_2'),
										height: '20%',	width: '20%', 
										left: 'auto', 	right: '25px',
										bottom: '50px', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
									
									data = {
										canvas: $('#game-grid-control_3'),
										height: '100%',	width: '100%', 
										left: 'auto', 	right: 'auto',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
							    break;		
							    
							    case "mainTop":
									data = {
										canvas: $('#game-grid-control_1'),
										height: '20%',	width: '20%', 
										left: '25px', 	right: 'auto',
										bottom: 'auto', top: '50px',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);
									
									data = {
										canvas: $('#game-grid-control_2'),
										height: '20%',	width: '20%', 
										left: 'auto', 	right: '25px',
										bottom: 'auto', top: '50px',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
									
									data = {
										canvas: $('#game-grid-control_3'),
										height: '100%',	width: '100%', 
										left: 'auto', 	right: 'auto',
										bottom: 'auto', top: 'auto',
										speed: 0,									
									};
									$scope.canvas.animateCanvas(data);	
							    break;								    						    								    						    

							}							
							

							
						},
						
						animateCanvas:function(json){
								var animateString = "",
									canvas 		= $(json.canvas);
																										
										canvas.css('transition', '0s');
										canvas.animate({
												height: json.height, width: json.width, 
												top: json.top, bottom:json.bottom,
												left: json.left, right: json.right,
											}, (json.speed * 1000), 
											function(){
												
												var i = $scope.canvasData.order.length; while (i--){
													$scope.canvas.resizeCanvas(i, $scope.resolution_x, $scope.resolution_y);
												}
											});
								
								$scope.canvas.getCanvasDefaults();
									
								
								
						},
						
						organizeInfoDisplays:function(){
							
							var offsetLeft	= $('#' + $scope.activeCanvas).parent().offset().left; 
							var offsetTop 	= $('#' + $scope.activeCanvas).parent().offset().top; 
							var height = $('#' + $scope.activeCanvas).height();							
														
							//$('#game-grid-bottom-info-b').css({"left": offsetLeft + 'px'})
							//$('#game-grid-bottom-info-c').css({"left": offsetLeft + 'px'})
							
														
						},
						
						keys:function(dir){
									  
								var speed = .5,
									name = $scope.activeCanvas,
									old = $scope.canvasData[name].setting;
								
								
								if ($scope.cameraType == "rotate"){
									 switch (dir){
										case 'u':
												newC = {
													p:  old.p,
													t:  speed,
													rX: (old.rX + 45), rY: old.rY, rZ: old.rZ,
													tX: old.tX, tY: old.tY, tZ: old.tZ,
													cX: old.cX, cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);
											break;
										case 'd':
												newC = {
													p:  old.p,
													t:  speed,
													rX: (old.rX - 45), rY: old.rY, rZ: old.rZ,
													tX: old.tX, tY: old.tY, tZ: old.tZ,
													cX: old.cX, cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};								 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);
											break;
										case 'l':
												newC = {
													p:  old.p,
													t:  speed,
													rX: old.rX, rY: old.rY, rZ: (old.rZ + 45),
													tX: old.tX, tY: old.tY, tZ: old.tZ,
													cX: old.cX, cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);
											break;
										case 'r':
												newC = {
													p:  old.p,
													t:  speed,
													rX: old.rX, rY: old.rY, rZ: (old.rZ - 45),
													tX: old.tX, tY: old.tY, tZ: old.tZ,
													cX: old.cX, cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);
											break;
									}
								}	
								if ($scope.cameraType == "zoom"){
									 switch (dir){
										case 'u':
												newC = {
													p:  old.p,
													t:  speed,
													rX: old.rX, rY: old.rY, rZ: old.rZ,
													tX: old.tX, tY: old.tY, tZ: (old.tZ + 45),
													cX: old.cX, cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);
											break;
										case 'd':
												newC = {
													p:  old.p,
													t:  speed,
													rX: old.rX, rY: old.rY, rZ: old.rZ,
													tX: old.tX, tY: old.tY, tZ: (old.tZ - 45),
													cX: old.cX, cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);	
											break;
										case 'l':
												newC = {
													p:  old.p,
													t:  speed,
													rX: old.rX, rY: (old.rY + 45), rZ: old.rZ,
													tX: old.tX, tY: old.tY, tZ: old.tZ,
													cX: old.cX, cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);
											break;
										case 'r':
												newC = {
													p:  old.p,
													t:  speed,
													rX: old.rX, rY: (old.rY - 45), rZ: old.rZ,
													tX: old.tX, tY: old.tY, tZ: old.tZ,
													cX: old.cX, cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);
											break;
									}
								}
								if ($scope.cameraType == "translate"){
									 switch (dir){
										case 'u':
												newC = {
													p:  old.p,
													t:  speed,
													rX: old.rX, rY: old.rY, rZ: old.rZ,
													tX: old.tX, tY: (old.tY + 45), tZ: old.tZ,
													cX: old.cX, cY: (old.cY + 45), cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);										
											break;
										case 'd':
												newC = {
													p:  old.p,
													t:  speed,
													rX: old.rX, rY: old.rY, rZ: old.rZ,
													tX: old.tX, tY: (old.tY - 45), tZ: old.tZ,
													cX: old.cX, cY: (old.cY - 45), cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);		
											break;
										case 'l':
												newC = {
													p:  old.p,
													t:  speed,
													rX: old.rX, rY: old.rY, rZ: old.rZ,
													tX: (old.tX + 45), tY: old.tY, tZ: old.tZ,
													cX: (old.cX + 45), cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);		
											break;
										case 'r':
												newC = {
													p:  old.p,
													t:  speed,
													rX: old.rX, rY: old.rY, rZ: old.rZ,
													tX: (old.tX - 45), tY: old.tY, tZ: old.tZ,
													cX: (old.cX - 45), cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);	
											break;
									}
								}										
								if ($scope.cameraType == "perspective" && !$scope.togglePerspective){
									switch (dir){
										case 'u':
												newC = {
													p:  old.p + 25,
													t:  speed,
													rX: old.rX, rY: old.rY, rZ: old.rZ,
													tX: old.tX, tY: old.tY, tZ: old.tZ,
													cX: old.cX, cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);	
												break;
										case 'd':
												newC = {
													p:  old.p - 25,
													t:  speed,
													rX: old.rX, rY: old.rY, rZ: old.rZ,
													tX: old.tX, tY: old.tY, tZ: old.tZ,
													cX: old.cX, cY: old.cY, cZ: old.cZ,
													offsetX: old.oX, offsetY: old.oY,	
												};									 
												$scope.io.addToControlBuffer([ "rtzCanvas", newC ], 1);	
												break;
									}
								}								
																					
						},
						
						applyCSSToCanvas:function(callback){

										var i = $scope.canvasData.order.length; while(i--){	
											var name = $scope.canvasData.order[i].name,
											settings = $scope.canvasData[name].setting;
											
													
																					
											if (name == 'canvasContainer_a'){
												$scope.canvas_css_1 = {
													'margin-left': settings.oX + 'px',
													'margin-top':  settings.oY + 'px',
													'transition':  settings.t + 's',
													'-webkit-transform-origin': settings.cX + 'px ' + (settings.cY - $scope.aspectFix) + 'px ' + settings.cZ + 'px',
													'-webkit-transform' : 'rotateX(' + settings.rX + 'deg) rotateY(' + settings.rY + 'deg) rotateZ(' + settings.rZ + 'deg)' +
																		  'translateX(' + settings.tX + 'px) translateY(' + settings.tY + 'px) translateZ(' + settings.tZ + 'px)',		
												};	
											};
											
											if (name == 'canvasContainer_b'){
												$scope.canvas_css_2 = {
													'margin-left': settings.oX + 'px',
													'margin-top':  settings.oY + 'px',
													'transition':  settings.t + 's',
													'-webkit-transform-origin': settings.cX + 'px ' + (settings.cY - $scope.aspectFix) + 'px ' + settings.cZ + 'px',
													'-webkit-transform' : 'rotateX(' + settings.rX + 'deg) rotateY(' + settings.rY + 'deg) rotateZ(' + settings.rZ + 'deg)' +
																		  'translateX(' + settings.tX + 'px) translateY(' + settings.tY + 'px) translateZ(' + settings.tZ + 'px)',		
												};	
											};
											
											if (name == 'canvasContainer_c'){
												$scope.canvas_css_3 = {
													'margin-left': settings.oX + 'px',
													'margin-top':  settings.oY + 'px',
													'transition':  settings.t + 's',
													'-webkit-transform-origin': settings.cX + 'px ' + (settings.cY - $scope.aspectFix) + 'px ' + settings.cZ + 'px',
													'-webkit-transform' : 'rotateX(' + settings.rX + 'deg) rotateY(' + settings.rY + 'deg) rotateZ(' + settings.rZ + 'deg)' +
																		  'translateX(' + settings.tX + 'px) translateY(' + settings.tY + 'px) translateZ(' + settings.tZ + 'px)',		
												};	
											};																						
					
											
										}
										
										
										callback();
						},
						
						getCanvasDefaults:function(){
	
								var i = $scope.canvasData.order.length; while (i--){
									
									var containerWidth  = $scope.canvasData.order[i].object.parent().width();
									var containerHeight = $scope.canvasData.order[i].object.parent().height();
									
									
									settings = {
										p: 200,
										t:  0,
										rX: 0, rY: 0, rZ: 0,
										tX: 0, tY: 0, tZ: 0,
										cX: containerWidth/2, cY: containerHeight/2, cZ: 0,
										oX: 0, oY: 0,										
									};
									
									
									$scope.canvasData[$scope.canvasData.order[i].name].setting = settings;
									$scope.canvasData.order[i].object.css('transition', '0s');  // no delay for initial build
									
								}
								
								$scope.camera_perspective_1 = 200;
								$scope.camera_perspective_2 = 200;
								$scope.camera_perspective_3 = 200;									
	
								$scope.canvas.applyCSSToCanvas(function(){});
		
						},
						
						changeFocus:function(to){									
							$scope.activeCanvas = to;
							$scope.canvas.organizeInfoDisplays();						
						},
																	
						resizeCanvas:function(canvasId, resX, resY){	
							
								var name = $scope.canvasData.order[canvasId].name;
								if (  $scope.canvasData[name].render){
									
									var threeJS = $scope.canvasData[name].threeJS;												
									var camera = threeJS.camera;								 																																
									var canvas = $scope.canvasData.order[canvasId].object;
									
										var	aspectX = $(canvas).parent().width(),
											aspectY = $(canvas).parent().height();
		 									
										camera.aspect = aspectX/aspectY;
	
										var i = $scope.canvasData.order.length; while (i--){
							
											// get canvas object
											var canvasObj = $scope.canvasData.order[i].object;
			
												// fill canvas container
												$(canvasObj).width( '100%');
												$(canvasObj).height( $(canvasObj).width() * .5625 + 'px');
												
												$scope.aspectWidth =  $( window ).width() ;
												if ($scope.aspectWidth > $scope.aspectMaxWidth){
													$scope.aspectWidth = $scope.aspectMaxWidth; 
												}
												if ($scope.aspectWidth < $scope.aspectMinWidth){
													$scope.aspectWidth = $scope.aspectMinWidth;
												}
												$scope.aspectHeight = $scope.aspectWidth * .5625;
												
												
										}	
											
										camera.updateProjectionMatrix();	
								};	
										
						},

						changeResolution:function(type, callback){
							
							$scope.resolution_type = type;
							
							if (type == 'ultra'){
								$scope.resolution_x = 1920;
								$scope.resolution_y = 1080;								
							}
							if (type == 'high'){
								$scope.resolution_x = 1280;
								$scope.resolution_y = 720;
							}
							if (type == 'med'){
								$scope.resolution_x = 800;
								$scope.resolution_y = 450;
							}
							if (type == 'low'){
								$scope.resolution_x = 600;
								$scope.resolution_y = 337.5;
							}
							

							var i = $scope.canvasData.order.length; while (i--){
				
								// get canvas object
								var canvasObj = $scope.canvasData.order[i].object,
									preservedWidth = canvasObj.parent().width(),
									preservedHeight = canvasObj.parent().height(),
									name = $scope.canvasData.order[i].name; 
									
									// change render resolution
									renderer = $scope.canvasData[name].threeJS.renderer;
									renderer.setSize( $scope.resolution_x, $scope.resolution_y);

									// fill canvas container
											// fill canvas container
											$(canvasObj).width( '100%');
											$(canvasObj).height( $(canvasObj).width() * .5625 + 'px');
											
											
											
											$scope.aspectWidth =  $( window ).width() ;
											if ($scope.aspectWidth > $scope.aspectMaxWidth){
												$scope.aspectWidth = $scope.aspectMaxWidth; 
											}
											if ($scope.aspectWidth < $scope.aspectMinWidth){
												$scope.aspectWidth = $scope.aspectMinWidth;
											}											
											$scope.aspectHeight = $scope.aspectWidth * .5625;											
																					
									
							}	
							
							$scope.canvas.getCanvasDefaults();

							callback();

						},

						returnDefaultCanvas:function(canvasName){
							obj = { 
									status: 'default',
									render: false,
									canvas: {
										container: $('#' + canvasName),
									},
									scene: {
										scene: new THREE.Scene(),
									},
									threeJS:{
										controls: {},
										renderer: {},
										camera: {},
										stats: {},
										allParticles: {},	
										allCubes: {}, 												
										allSphere: {},													
										allClickable: [],	
									},
									sceneComponents:{
										list: [],
										cubeCount: 0,
										sphereCount: 0,
										particleCount: 0,
									}
									
								 };
							return obj;
						},

						assetCreator:{

							makeRenderer:function(_renderer, canvas, callback){
								var renderer = new THREE.WebGLRenderer({canvas: canvas.get(0), alpha: true });
									if (_renderer.backgroundColor != null){
										renderer.setClearColor( _renderer.bgColor, _renderer.bgOpacity );
									}
								
									renderer.shadowMapEnabled = true;
								callback(renderer);
							},

							makeCamera:function(_camera, callback){
								var camera = new THREE.PerspectiveCamera( _camera.fov, 0, _camera.near, _camera.far);
								camera.position.set( _camera.position.x, _camera.position.y, _camera.position.z );
								callback( camera );
							},

							makeStats:function(_stats, canvasId, callback){
								if (_stats.show){
									var stats = new Stats(canvasId);
									stats.setMode(0);
									$(_stats.domEle).append( stats.domElement );
									callback(stats);
								}
							},

							makeLight:function(_light, callback){
								// lighting
								var returnSet = [];
								var i = _light.data.length; while(i--){
									obj = _light.data[i];
									
									if ( obj.enable == true ){
										
										if (obj.type == "Ambient"){
											var light = new THREE.DirectionalLight( obj.color );
										} 		
										if (obj.type == "SpotLight"){ 
											var light = new THREE.SpotLight( obj.color );																		
											light.position.set( obj.position.x, obj.position.y, obj.position.z );
											light.shadowCameraFov = obj.shadow.fov;
										}
										if (obj.type == "Area"){
											var light = new THREE.DirectionalLight( obj.color );
												light.position.set( obj.position.x, obj.position.y, obj.position.z );
												light.shadowCameraFov = obj.shadow.fov;
										} 
	
										if(obj.shadow.enabled){
											light.shadowCameraVisible = obj.shadow.shadowCameraVisible;
											light.shadowDarkness = obj.shadow.shadowDarkness;
											light.intensity = obj.shadow.intensity;
											light.castShadow = true;	
										}									
										
										returnSet.push({lights: light});
										
									}
										
									
								}
								
								callback(returnSet);
								
							},

							makeSphere:function(_sphere, baseNum, callback){
								
								var returnSet = [];
								
								var i = _sphere.data.length; while(i--){
									obj = _sphere.data[i]; 
									
									
									var sphereGeometry = new THREE.SphereGeometry(obj.dimensions.x, obj.dimensions.y, obj.dimensions.z);
									
									
									// texture / color
									texture = false; 
									if (obj.texture != null){	
										texture = THREE.ImageUtils.loadTexture( $scope.pathing_textures + obj.texture );
									}	
									
									// color	
									color = false;			
									if (obj.color != null){
										color = obj.color;
										if ( obj.color == "random"){
											color = $scope.system.getRandomColor();	
											
										}											
									}	
									
									
									// make sphere				
									var sphereMaterial = new THREE.MeshLambertMaterial( { color: color, map: texture } );								
									var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );									
									
									// sphere attributes
									if(obj.position.random == true){
										sphere.position.set($scope.system.returnRandomNumber(obj.position.x, true), $scope.system.returnRandomNumber(obj.position.y - obj.dimensions.y, false), $scope.system.returnRandomNumber(obj.position.z, true));										
									}
									else{
										sphere.position.set(obj.position.x, obj.position.y, obj.position.z);
									}									
									
									
									sphere.castShadow = true;
									sphere.receiveShadow = true;
									sphere.type = "allSphere";
									sphere.name = "_" + (i + baseNum);
										
									// animation
									sphere.animation = obj.animation;										
										
									// outline
									if(obj.outline.active){
										var outlineMaterial = new THREE.MeshBasicMaterial( { color: obj.outline.color, side: THREE.BackSide } );
										var outlineMesh = new THREE.Mesh( sphereGeometry, outlineMaterial );
											outlineMesh.position = sphere.position;
											outlineMesh.scale.multiplyScalar(obj.outline.thickness);	
											outlineMesh.scale.needsUpdate = true;						
											outlineMesh.scale.dynamic = true;
											
											outlineMesh.animation = obj.animation;								
									}
									
									returnSet.push({shape: sphere, outline: outlineMesh});
								}
								
								callback(returnSet);
								
							},

							makeCube:function(_box, baseNum, callback){																					
								var returnSet = [];
								var i = _box.data.length; while(i--){
									obj = _box.data[i]; 
																
									var cubeGeometry = new THREE.BoxGeometry( obj.dimensions.x, obj.dimensions.y, obj.dimensions.z );
									
									// texture / color
									texture = false; 
									if (obj.texture != null){	
										texture = THREE.ImageUtils.loadTexture( $scope.pathing_textures + obj.texture );
									}
									
									// color	
									color = false;			
									if (obj.color != null){
										color = obj.color;
										if ( obj.color == "random"){
											color = $scope.system.getRandomColor();	
										}											
									}	
									
									// make cubes		
									var cubeMaterial = new THREE.MeshLambertMaterial( { color: color, map: texture } );
									cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
									
									// cube attributes
									if(obj.position.random == true){
										cube.position.set($scope.system.returnRandomNumber(obj.position.x, true), $scope.system.returnRandomNumber(obj.position.y - obj.dimensions.y, false), $scope.system.returnRandomNumber(obj.position.z, true));										
									}
									else{
										cube.position.set(obj.position.x, obj.position.y, obj.position.z);
									}
									cube.castShadow = true;
									cube.receiveShadow = true;
									cube.type = "allCubes";
									cube.name = "_" + (i + baseNum);
									
									// animation
									cube.animation = obj.animation;
									
									// outline
									if(obj.outline.active){
										var outlineMaterial = new THREE.MeshBasicMaterial( { color: obj.outline.color, side: THREE.BackSide } );
										var outlineMesh = new THREE.Mesh( cubeGeometry, outlineMaterial );
										outlineMesh.position = cube.position;
										outlineMesh.scale.dynamic = true;
										outlineMesh.scale.verticesNeedUpdate =true;
										outlineMesh.scale.multiplyScalar(obj.outline.thickness);
										
										outlineMesh.animation = obj.animation;
									}
								
									returnSet.push({shape: cube, outline: outlineMesh});
																		
									
								}
								
																
								callback(returnSet);
								
							},
							
							makeParticles:function(_particles, baseNum, callback ){
								if (baseNum > 1){baseNum --;};
								var returnSet = [];
								var i = _particles.data.length; while(i--){
									obj = _particles.data[i]; 
										
										var particles = new THREE.Geometry;
										var p = obj.amount; while (p--){
											if (obj.type.is == "texture"){
												var particleTexture = THREE.ImageUtils.loadTexture($scope.pathing_particle + '/' + obj.type.image);
											}																	
										    var particle = new THREE.Vector3(Math.random() * obj.range.x - obj.range.x/2 , Math.random() * obj.range.ceiling, Math.random() * obj.range.z - obj.range.z/2) ;										     	
										    var particleMaterial = new THREE.ParticleBasicMaterial({ 
										    
												  color: 0xFFFFFF,
												  size: obj.size.base + (Math.random() * obj.size.variation),
												  map: particleTexture,
												  blending: THREE.AdditiveBlending,
												  transparent: true,
												  
										    	
										    });										    										   
										    particle.velocity = new THREE.Vector3(Math.random() * obj.animation.velocitySpd.x, Math.random() * obj.animation.velocitySpd.y, Math.random() * obj.animation.velocitySpd.z);
										    particle.velocitySpd = obj.animation.velocitySpd;
										  	particle.idleGuage = {onGround: 0, delay: 250};
										  	
										  	 particles.vertices.push(particle);									   										   											
										}

										// particle system attributes
										particleSystem = new THREE.ParticleSystem(particles, particleMaterial);
										particleSystem.sortParticles = true;
										particleSystem.type = "allParticles";
										particleSystem.name = "_" + (i + baseNum);

										// range
										particleSystem.range = obj.range;
										
										// animation
										particleSystem.animation = obj.animation;

										// physics										
										particleSystem.physics = obj.physics;
										
										
										returnSet.push({particleSystem: particleSystem});
								}
								callback(returnSet);	
							},
							
							makePlane:function(_plane, callback){
									
									var returnSet = [];
									var i = _plane.data.length; while(i--){	
										obj = _plane.data[i]; 	
										
										var floorTexture = new THREE.ImageUtils.loadTexture( $scope.pathing_textures + obj.texture );
										floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
										floorTexture.repeat.set( obj.repeatSet.x, obj.repeatSet.y );
										
										
										var floorMaterial = new THREE.MeshLambertMaterial( { map: floorTexture, side: THREE.DoubleSide } );
										var floorGeometry = new THREE.PlaneGeometry(obj.dimensions.width, obj.dimensions.height, obj.dimensions.widthSegment, obj.dimensions.heightSegment);
										var floor = new THREE.Mesh(floorGeometry, floorMaterial);
										
										
										floor.position.y = 0;
										floor.rotation.x = Math.PI / 2;
										floor.receiveShadow = true;
										
										//plane = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } ) );
										returnSet.push({shape: floor});

									}
									
									callback(returnSet);
									
							},
							
							makeMirror:function(_mirror, callback){
									
									var returnSet = [];
									var i = _plane.data.length; while(i--){	
										obj = _plane.data[i]; 	
										
										var floorTexture = new THREE.ImageUtils.loadTexture( $scope.pathing_textures + obj.texture );
										floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
										floorTexture.repeat.set( obj.repeatSet.x, obj.repeatSet.y );
										
										
										var floorMaterial = new THREE.MeshLambertMaterial( { map: floorTexture, side: THREE.DoubleSide } );
										var floorGeometry = new THREE.PlaneGeometry(obj.dimensions.width, obj.dimensions.height, obj.dimensions.widthSegment, obj.dimensions.heightSegment);
										var floor = new THREE.Mesh(floorGeometry, floorMaterial);
										
										
										floor.position.y = 0;
										floor.rotation.x = Math.PI / 2;
										floor.receiveShadow = true;
										
										//plane = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } ) );
										returnSet.push({shape: floor});

									}
									
									callback(returnSet);
									
							},							

							makeSkybox:function(_skybox, callback){
								var returnSet = [];
								var i = _skybox.data.length; while(i--){	
									obj = _skybox.data[i]; 						
									
									var imagePrefix = $scope.pathing_skybox + obj.package + "/";
									var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
									var imageSuffix = ".png";
									var skyBoxGeometry = new THREE.BoxGeometry( obj.dimensions.x, obj.dimensions.y, obj.dimensions.z );		
									
									var materialArray = [];
									for (var n = 0; n < 6; n++){
										materialArray.push( new THREE.MeshBasicMaterial(
											{
											map: THREE.ImageUtils.loadTexture( imagePrefix + directions[n] + imageSuffix ),
											side: THREE.BackSide
											}
										));
									};
															
									
									var skyBoxMaterial = new THREE.MeshFaceMaterial( materialArray );
									var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
									
									returnSet.push({skybox: skyBox});
								};
								
								callback(returnSet);
							},

						},

						addToScene:function(sceneJson, container, addImmediately, callback){
			
								$scope.load.get_json( sceneJson, function(isValid, json){
									
									if (isValid){
										$scope.canvas.build( container, addImmediately, json );
										callback();
									}
									else{
										alert("JSON failed to load.");
									}
								});
						},

						clearScene:function(sceneName, callback){
										
								// variables needed
								var allAssets = [],
									scene =  $scope.canvasData[sceneName].scene.scene,																 
									list = $scope.canvasData[sceneName].sceneComponents.list,	
									threeJS = $scope.canvasData[sceneName].threeJS, 
									renderer = threeJS.renderer,
									camera = threeJS.camera;
								 										
								
								// get list of all objects	
								var n = list.length; while(n--){
										allAssets.push([scene, list[n]]);
								};	

								// clear list			
								var i = allAssets.length; while(i--){
									var scene = allAssets[i][0];
									var object = allAssets[i][1];
									scene.remove(object);		
								}	
								
								// render empty screen
								renderer.render(scene, camera);	
	
								
								// remove from array
								var i = $scope.canvasData.order.length; while(i--){
									 var aName = $scope.canvasData.order[i].name;
									
									 if (aName == sceneName){
									 	$scope.canvasData.order.splice(i, 1);
									 	$('#stats_' + sceneName).remove();
									 }
								}
								
								// reset default canvas info	
								
								$scope.canvasData[sceneName] = $scope.canvas.returnDefaultCanvas(sceneName);
								
								callback();		

						},

						buildCanvasInit:function(){
							$('.gameCanvas').each(function(index){
										var container = $(this),
											canvasName = container.attr('id');
											container.parent().css('width', container.width); 
											container.parent().css('height', container.height); 
																			
											$scope.canvasData[container.attr('id')] = $scope.canvas.returnDefaultCanvas(container.attr('id'));
											$(container).click(function(event){
												$scope.canvas.clickOn(event);
											});												
											
							});
						},

						build:function(canvasId, addImmediately, data){
										
										var container = $scope.canvasData[canvasId].canvas.container,
											scene = $scope.canvasData[canvasId].scene.scene,
											name = container.attr('id'),
											threeJS = $scope.canvasData[name].threeJS,
											sceneComponents = $scope.canvasData[name].sceneComponents,
												list = sceneComponents.list;
												
											
										// scene
										if (data.hasOwnProperty('scene')){
											var _scene = data.scene;
											if (_scene.fog.enabled){									
												fog = new THREE.Fog( _scene.fog.color, _scene.fog.near, _scene.fog.far );
												scene.fog = fog; 
											}
											
											// axis
											if (_scene.axesHelper.enabled){
												var axes = new THREE.AxisHelper(_scene.axesHelper.length);
												list.push(axes);
											}
										}
											
										// renderer
										if (data.hasOwnProperty('renderer')){
											var _renderer = data.renderer;
											$scope.canvas.assetCreator.makeRenderer(_renderer, container, function(data){
												threeJS.renderer = data;											
											});
										}
										
										
										// setup camera
										if (data.hasOwnProperty('camera')){
											var _camera = data.camera;
											var camera = null;
											$scope.canvas.assetCreator.makeCamera(_camera, function(data){
												threeJS.camera = data;
												camera = data;
												list.push(camera);
											});
										}

										/* only need one, so will overright */
										//		
											if (data.hasOwnProperty('mouse') && camera != null){
												var _mouse = data.mouse;
												if (_mouse.controls){
													threeJS.controls = new THREE.OrbitControls( camera, _renderer.domElement );
												}	
											}
											
											
											// stats
											if (data.hasOwnProperty('stats')){
												var _stats = data.stats;
												$scope.canvas.assetCreator.makeStats(_stats, canvasId, function(data){
													threeJS.stats = data;
												});
											}
										//
										/////////////
		
		
		
										// build lights
										var light = null;
										if (data.hasOwnProperty('light')){
											var _light = data.light;
											$scope.canvas.assetCreator.makeLight(_light, function(returnSet){												
												var i = returnSet.length; while(i--){
													list.push(returnSet[i].lights);																					
												}
											});
										};

									


										// build cube									
										if (data.hasOwnProperty('cube')){											
											var _cube = data.cube;
											
											$scope.canvas.assetCreator.makeCube(_cube, sceneComponents.cubeCount, function(returnSet){												
												var i = returnSet.length; while(i--){
													list.push(returnSet[i].shape);
													threeJS.allClickable.push(returnSet[i].shape);																
													threeJS.allCubes[ returnSet[i].shape.name ] = returnSet[i];																					
													
													if ( addImmediately){
														scene.add(returnSet[i].shape);
													}
													
													if (returnSet[i].outline != undefined || returnSet[i].outline != null){														
														list.push(returnSet[i].outline);
														if ( addImmediately){
															scene.add(returnSet[i].outline);
														}
													};											
												}
												threeJS.allCubes.total = Object.keys(threeJS.allCubes).length;									
											});
											
										};
								
										// build sphere								
										if (data.hasOwnProperty('sphere')){
											var _sphere = data.sphere;
											$scope.canvas.assetCreator.makeSphere(_sphere,  sceneComponents.sphereCount, function(returnSet){
												var i = returnSet.length; while(i--){	
													list.push(returnSet[i].shape);
													threeJS.allClickable.push(returnSet[i].shape);																
													threeJS.allSphere[ returnSet[i].shape.name ] = returnSet[i]	;	
													
													if ( addImmediately){
														scene.add(returnSet[i].shape);
													}
																																
													if (returnSet[i].outline != undefined || returnSet[i].outline != null){	
														list.push(returnSet[i].outline);
														
														if ( addImmediately){
															scene.add(returnSet[i].outline);
														}
														
													};
											
												}				
												threeJS.allSphere.total = Object.keys(threeJS.allSphere).length;													
											});
										};
										
										// particles
										if (data.hasOwnProperty('particles')){
											var _particles = data.particles;
											$scope.canvas.assetCreator.makeParticles(_particles, sceneComponents.particleCount, function(returnSet){
												var i = returnSet.length; while(i--){		
													threeJS.allParticles[ returnSet[i].particleSystem.name ] = returnSet[i]	;			
													list.push(returnSet[i].particleSystem);
												};
											
												
												
												threeJS.allParticles.total =  Object.keys(threeJS.allParticles).length;
												
											});
										}
											
										// build floor
										var plane = null;
										if (data.hasOwnProperty('plane')){
											var _plane = data.plane;
											$scope.canvas.assetCreator.makePlane(_plane, function(returnSet){
												var i = returnSet.length; while(i--){
													list.push(returnSet[i].shape);
												}
											});
											
										};

										// build skybox
										var skybox = null;										
										if (data.hasOwnProperty('skybox')){
											var _skybox = data.skybox;
											$scope.canvas.assetCreator.makeSkybox(_skybox, function(returnSet){
												var i = returnSet.length; while(i--){
													list.push(returnSet[i].skybox);	
												};
											});
											 
										};
										
										// grab component count
										sceneComponents.cubeCount = Object.keys(threeJS.allCubes).length - 1;
										sceneComponents.sphereCount = Object.keys(threeJS.allSphere).length - 1;
										sceneComponents.particleCount = Object.keys(threeJS.allParticles).length - 1;
										
										if ( sceneComponents.cubeCount < 0){sceneComponents.cubeCount = 0;}
										if ( sceneComponents.sphereCount < 0){sceneComponents.sphereCount = 0;}
										if ( sceneComponents.particleCount < 0){sceneComponents.particleCount = 0;}																					
																																											
										if (!addImmediately){
											$scope.canvasData.order.push({name: name, object: container});
											$scope.canvasData[name].status = "ready";	
											$scope.canvasData[name].render = true;	
										}
										
						},

						constructScene:function(sceneName, callback){
								$scope.assetsLoaded = 0; $scope.totalAssets = 0;
								var allAssets = [];
									threeJS = $scope.canvasData[sceneName].threeJS, 
								 	scene =  $scope.canvasData[sceneName].scene.scene,																 
									list = $scope.canvasData[sceneName].sceneComponents.list;										
									n = list.length; while(n--){
										allAssets.push([scene, list[n]]);
									};	
							
								
								$scope.totalAssets = allAssets.length; 
								var i = allAssets.length; while(i--){
									var scene = allAssets[i][0];
									var object = allAssets[i][1];
									scene.add(object);
									$timeout(function(){
										$scope.assetsLoaded ++;	
										if ( $scope.assetsLoaded == $scope.totalAssets){											
											callback();
										};
									}, i * 10);	// increase for artifical loading speed					
								}
	
						},

						constructAllScenes:function(callback){
								$scope.assetsLoaded = 0; $scope.totalAssets = 0;
								
								var allAssets = [];
								var i = $scope.canvasData.order.length; while (i--){	
										var	name = $scope.canvasData.order[i].name, 
											threeJS = $scope.canvasData[name].threeJS, 
										 	scene =  $scope.canvasData[name].scene.scene,																 
											list = $scope.canvasData[name].sceneComponents.list;										
											n = list.length; while(n--){
												allAssets.push([scene, list[n]]);
											};	
											
											
								};
								
								
								$scope.totalAssets = allAssets.length; 
								var i = allAssets.length; while(i--){
									var scene = allAssets[i][0];
									var object = allAssets[i][1];
									scene.add(object);
									$timeout(function(){
										$scope.assetsLoaded ++;	
										if ( $scope.assetsLoaded == $scope.totalAssets){											
											callback();
										};
									}, i * 100);	// increase for artifical loading speed					
								}
	
						},
							
						clickOn:function(evt){
								evt.preventDefault();
									
										var obj = $scope.canvas.intersectCheck(); 
											
											if (obj != false){
												obj.shape.animation.enabled = !obj.shape.animation.enabled;												
												obj.shape.animation.rotationSpd = {x: .025, y: .025, z: .025}; 
											}  											   	
								
						},
						
						intersectCheck: function(callback){
								if ($scope.activeCanvas != undefined || $scope.activeCanvas != null){
									//setup raycast
									var projector = new THREE.Projector(), 
								    mouse_vector = new THREE.Vector3(),
								    ray = new THREE.Raycaster( new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0) ),
								    intersects = []; 											
									
									// grab canvas information
									var render = $scope.canvasData[$scope.activeCanvas].render;
									if (render){					
										var threeJS = $scope.canvasData[$scope.activeCanvas].threeJS,
											camera = threeJS.camera,
											container = threeJS.container,
											allClickable = threeJS.allClickable;		
											
									   	// get mouse coords								
										var cords = $scope.system.getMouseVector(container); 
										
										
										// new vector
									    mouse_vector.set( cords.x, cords.y, 1 );
									    
										// update and find intersects
									    projector.unprojectVector( mouse_vector, camera );
									    var direction = mouse_vector.sub( camera.position ).normalize();							  
									    ray.set( camera.position, direction );
									    intersects = ray.intersectObjects( allClickable );
									    
		
									    if( intersects.length ) { 
									       var 	type = intersects[0].object.type,
									       		name = intersects[0].object.name;
									      		return threeJS[type][name]; 
									    }
									    else{
									    	return false;
									    }
								   }
							   }
							   else{ return false; }
						},							

						animateLoop:function(){
							
								var oldSettings,
									oldMaterial,
									scaleSize = 1.10,
									hoverColor = 0x00FF00;
								
							
								function renderLoop() {	
									 
																	
									function gainFocus(obj){
										if ( obj === undefined){
											oldSettings = null;
										}
										else{
											/*
											oldSettings = obj.shape.material.emissive;
								            oldMaterial = obj.shape.material.map;
								            if (oldMaterial != false){
								            	obj.shape.material.map = THREE.ImageUtils.loadTexture( $scope.pathing_textures + 'checkerboard.jpg');
								            	obj.shape.material.needsUpdate = true;										
											}	
											obj.shape.material.emissive.setHex(hoverColor);
											*/
											if ( obj.outline != undefined){
												obj.outline.scale.set( scaleSize, scaleSize , scaleSize );
											}
										}
										
									};
									
									function lostFocus(obj){
										
										/*
										obj.shape.material.map = oldMaterial;
										obj.shape.material.emissive.setHex(oldSettings);
										*/
										if ( obj.outline != undefined){
											obj.outline.scale.set(1, 1, 1);
										}
										oldSettings = null;
										
									};
									
								
									requestAnimationFrame(renderLoop);
									var i = $scope.canvasData.order.length; while (i--){
											
											
											var name = $scope.canvasData.order[i].name, 
												canvasData = $scope.canvasData[name],
												threeJS = canvasData.threeJS,
												status = canvasData.status,
												render = canvasData.render,
												sceneComponents = canvasData.sceneComponents;
												
												if (render){
													var scene = $scope.canvasData[name].scene.scene,
														camera = threeJS.camera,
														renderer = threeJS.renderer,
														effect = threeJS.renderer,
														controls = threeJS.controls,
														stats = threeJS.stats,
														allParticles = threeJS.allParticles,
														allCubes = threeJS.allCubes,
														allSphere = threeJS.allSphere;
													
												
													// start
													stats.begin();
													
													// do computations if not paused
													if (status != 'pause'){
														// particles
														n = sceneComponents.particleCount; while(n--){
															root = allParticles["_" + n],
															particleSystem = root.particleSystem,
															particles = particleSystem.geometry.vertices,
															range = particleSystem.range,
															animation = particleSystem.animation,
																rotationSpd = animation.rotationSpd,
																velocityDefaults = animation.velocitySpd,
																maxVelocity = animation.maxVelocity,																											
															physics = particleSystem.physics;
																
															
															// movement																										
															particleSystem.rotation.x += rotationSpd.x;
															particleSystem.rotation.y += rotationSpd.y;
															particleSystem.rotation.z += rotationSpd.z;
															
															// individual particles
															var pCount = particles.length; while(pCount--){
																    // get the particle
																    var particle = particles[pCount],
																    	velocity = particle.velocity,
																    	velocitySpd = particle.velocitySpd,
																		idleGuage = particle.idleGuage;
		  																
		  																if ( physics.gravity == "global"){
		  																	gravity = $scope.globalGravity;
		  																}
		  																else{
		  																	gravity	= physics.gravity;
		  																};
		  																// gravity = physics.gravity
		  																
																    	// velocity			
																    	if (gravity == "normal"){
																    		toggle = true;
																    	}
																    	if (gravity == "reverse"){
																    		toggle = false;
																    	}
																    	if (gravity == "float"){
																    		toggle = Math.random() < 0.5 ? true : false;	
																    	}
																    		    	
																    	function checkLimits(){
																	    	// y limits
																	    	if (toggle){		
																	    		velocity.y = velocity.y -= velocitySpd.y;									    															    		
																	    		if (velocity.y < -maxVelocity.y){ velocity.y = -maxVelocity.y;};														    															    		
																	    	} 
																	    	else {
																	    		velocity.y = velocity.y += velocitySpd.y;								    															    		
																	    		if (velocity.y > maxVelocity.y){ velocity.y = maxVelocity.y;};														    																    																    														    			
																	    	}
																	    	
																	    	// x limits
																			if (velocitySpd.x < 0){ 
																				velocity.x = velocity.x += velocitySpd.x;		
																				if (velocity.x < -maxVelocity.x){ velocity.x = -maxVelocity.x;};	
																				
																			};
																			if (velocitySpd.x > 0){ 
																				velocity.x = velocity.x += velocitySpd.x;		
																				if (velocity.x > maxVelocity.x){ velocity.x = maxVelocity.x;};	
																				
																			};
			
																	    	// z limits
																			if (velocitySpd.z < 0){ 
																				velocity.z = velocity.z += velocitySpd.z;		
																				if (velocity.z < -maxVelocity.z){ velocity.z = -maxVelocity.x;};	
																				
																			};
																			if (velocitySpd.z > 0){ 
																				velocity.z = velocity.z += velocitySpd.z;		
																				if (velocity.z > maxVelocity.z){ velocity.z = maxVelocity.z;};	
																				
																			};																
																			
																			
																	    	// x range
																	    	if (velocitySpd.x < 0){
																	    		if (particle.x < -range.x + (range.x/2)){
																	    			particle.x = range.x/2 + (Math.random() * range.x - range.x/2) ;
																	    		}
																	    	}
																			if (velocitySpd.x > 0){
																	    		if (particle.x > range.x - (range.x/2)){
																	    			particle.x = -range.x/2 - (Math.random() * range.x - range.x/2);
																	    		}						
																	    	}	
																	    	if (velocitySpd.z < 0){
																	    		if (particle.z < -range.z + (range.z/2)){
																	    			particle.z = range.z/2 + (Math.random() * range.z - range.z/2) ;
																	    		}
																	    	}
																			if (velocitySpd.z > 0){
																	    		if (particle.z > range.z - (range.z/2)){
																	    			particle.z = -range.z/2 - (Math.random() * range.z - range.z/2);
																	    		}						
																	    	}
																    	}	
																    	checkLimits();														    	
																    															    	
																    	
					    												// movement
					    												if (physics.behavior == "bounce" && particle.y == 0){
																   			particle.x += 0; 
																   			particle.z += 0;
																   		}
																   		else{
																   			particle.x += velocity.x;
																   			particle.z += velocity.z;
																   		}
																   		particle.y += velocity.y; 
																   		
			
																		/* physics */
																   		// normal
																   		if (gravity == "normal"){
																			if ( particle.y < range.floor){
																				
																				if (physics.behavior == "bounce"){
																					particle.y = range.floor;
																					velocity.y = -velocity.y/physics.weight;
																					
																					if (particle.y <= range.floor){ 
																						velocitySpd.x = velocitySpd.x/physics.weight; 
																						velocity.x = velocity.x/physics.friction;	
																						
																						velocitySpd.z = velocitySpd.z/physics.weight; 
																						velocity.z = velocity.z/physics.friction;	
																																										
																						/*
																						idleGuage.onGround ++ 
																						if (idleGuage.onGround > idleGuage.delay){
																							idleGuage.onGround = 0; 
																							particle.y = 1000
																							velocitySpd.x = 25;
																						}
																						*/
																					}
																				}
																				if (physics.behavior == "loop"){
																      				particle.y = range.ceiling + Math.floor(Math.random() * range.vy) - range.vy/2;
																					if (physics.loopType == "reset"){
																     					velocity.y = 0;
																     				}
																					if (physics.loopType == "half"){
																     					velocity.y = velocity.y/2;
																     				}														     																		      				
																      			}
		
																    		}	
																    	}
																    	
																    	// reverse
																    	if (gravity == "reverse"){
																			if ( particle.y > range.ceiling){
																				
																				if (physics.behavior == "bounce"){
																					particle.y = range.ceiling;
																					velocity.y = -velocity.y/physics.weight;
																						
																						velocitySpd.x = velocitySpd.x/physics.weight; 
																						velocity.x = velocity.x/physics.friction;	
																						
																						velocitySpd.z = velocitySpd.z/physics.weight; 
																						velocity.z = velocity.z/physics.friction;																				
																																																												
																				}																		
																				if (physics.behavior == "loop"){
																					particle.y = range.floor + Math.floor(Math.random() * range.vy) - range.vy/2;
																					if (physics.loopType == "reset"){
																     					velocity.y = 0;
																     				}
																					if (physics.loopType == "half"){
																     					velocity.y = velocity.y/2;
																     				}																				
																				};
																				
																				
																				
																			}
																		}
																    	
																    	// float
																    	if (gravity == "float"){
																    		if ( particle.y > range.ceiling){
																    			particle.y = range.floor;
																    			
																    		}
																    		if ( particle.y < range.floor){
																    			particle.y = range.ceiling;
																    			
																    		}
																    	}										    															   		
																    
									    	
															    
		
															}
															
														}
															
														// animate cubes
														n = sceneComponents.cubeCount; while(n--){
															var cubeCheck = allCubes["_" + n],
																shape = cubeCheck.shape,
																	rotation = shape.rotation;
																outline = cubeCheck.outline,																	
																animation = shape.animation,
																	animation_enabled = animation.enabled,
																	rotationSpd = animation.rotationSpd; 
																													
															if (animation_enabled){														
																rotation.set(rotation.x += rotationSpd.x, rotation.y += rotationSpd.y, rotation.z += rotationSpd.z);														
																if (cubeCheck.outline != undefined){
																	var outlineRotation = outline.rotation;
																	outlineRotation.set( outlineRotation.x += rotationSpd.x, outlineRotation.y += rotationSpd.y, outlineRotation.z += rotationSpd.z );
																};				
															}										
	
														}
															
														// animate cubes
														n = sceneComponents.sphereCount; while(n--){
															var sphereCheck = allSphere["_" + n],
																shape = sphereCheck.shape,
																	rotation = shape.rotation;
																outline = sphereCheck.outline,																	
																animation = shape.animation,
																	animation_enabled = animation.enabled,
																	rotationSpd = animation.rotationSpd; 
																	
															if (animation_enabled){														
																rotation.set(rotation.x += rotationSpd.x, rotation.y += rotationSpd.y, rotation.z += rotationSpd.z);														
																if (cubeCheck.outline != undefined){
																	var outlineRotation = outline.rotation;
																	outlineRotation.set( outlineRotation.x += rotationSpd.x, outlineRotation.y += rotationSpd.y, outlineRotation.z += rotationSpd.z );
																};				
															}	
														}
													
													}
													
													// check for raycaster
													var touching = $scope.canvas.intersectCheck();
													if (touching != false){
														// check to see if focused on anything
														if ($scope.touchingObject == null || ($scope.touchingObject != touching) ){
															
															// currently focused but swapped to new object
															if ($scope.touchingObject != null){
																lostFocus($scope.touchingObject);
															}
															// new focus
															gainFocus(touching);
															
															
														}													
														$scope.touchingObject = touching;
														// do something code for touching	
													}
													else{
														// lose focus
														if ($scope.touchingObject != null){
															lostFocus($scope.touchingObject);
															
														}
														$scope.touchingObject = null;
													}
																									
													// controls
													if (controls.enabled != undefined){
														controls.enabled = false;
														if (name == $scope.activeCanvas){
															controls.enabled = true;																														
														}
														controls.update();
													}	
													
													// renderer																					
													renderer.render(scene, camera);
													
												// end
												stats.end();
											
											}
											
									}
								};
								renderLoop();							
						},						
						
						
						////////////////////////////////
						togglePause:function(canvasName){
							var status = $scope.canvasData[canvasName].status;
							if (status != 'pause'){
								$scope.canvas.pauseScene(canvasName);
							}else{
								$scope.canvas.unpauseScene(canvasName);
							}
						},
												
						unpauseAllScenes: function(toggle){
							var i = $scope.canvasData.order.length; while (i--){
									var name = $scope.canvasData.order[i].name; 	
									$scope.canvas.unpauseScene(name, toggle);
							}
						},

						pauseAllScenes: function(toggle){
							
							var i = $scope.canvasData.order.length; while (i--){
									var name = $scope.canvasData.order[i].name; 	
									$scope.canvas.pauseScene(name, toggle);
							}
						},
						
						pauseScene:function(canvasName){
							$scope.canvasData[canvasName].status = 'pause';			
						},
						
						unpauseScene:function(canvasName){
							$scope.canvasData[canvasName].status = 'ready';							
						},
						
						
						
						////////////////////////////////
						
						////////////////////////////////
						renderActiveOnly:function(){
							var i = $scope.canvasData.order.length; while (i--){
									var name = $scope.canvasData.order[i].name; 	
									
									if (name != $scope.activeCanvas){										
										$scope.canvas.stopRender(name);	
									}else{
										$scope.canvas.resumeRender(name);
									}								
							}	
						},						
						
						toggleRender:function(canvasName){
							
							var render = $scope.canvasData[canvasName].render;
							if (render){
								$scope.canvas.stopRender(canvasName);
							}else{
								$scope.canvas.resumeRender(canvasName);
							}
						},
						
						resumeRender:function(canvasName){
							$scope.canvasData[canvasName].render = true;
						},
						
						stopRender:function(canvasName, toggle){
							$scope.canvasData[canvasName].render = false;
						},
						
						stopAllRender:function(){
							var i = $scope.canvasData.order.length; while (i--){
									var name = $scope.canvasData.order[i].name; 	
									$scope.canvas.stopRender(name);
							}
						},
						
						resumeAllRender:function(){
							var i = $scope.canvasData.order.length; while (i--){
									var name = $scope.canvasData.order[i].name; 	
									$scope.canvas.resumeRender(name);
							}
						},						
						////////////////////////////////
						
					};


				});

	    },
	    ///////////////////////////////////////
  };
});
