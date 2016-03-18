define(['custom'], function(custom) {


	custom.logger("Modal Controller Factory Ready");
	angular.module('gameModalCtrl', []).	
	factory('gameModalCtrl', function(){


		return {

			//////////////////////
			/* MODAL CONTROLLER */
			changeResolutionCtrl: function(){
				var cntrl = function ($scope, $modalInstance, stBlurredDialog) {

					$scope.select = function(data) {
							stBlurredDialog.close();
							$modalInstance.close(data);
					};

					$scope.cancel = function(){
							stBlurredDialog.close();
							$modalInstance.dismiss();
					};
				};
				return cntrl;
			},
			/* END MODAL CONTROLLER */
			//////////////////////


		};



	});

});
