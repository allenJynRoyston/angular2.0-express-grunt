//---------------------------------------------- default
exports.endpoint = function(req, res){
	// modules/API keys
	var request = require('request'),
			googleAPIKey = 'AIzaSyAO2sYcau79tW0H3jG3z_qmb94SE8XNSKs',
			govAPIKey = 'rVKRnhx5JbJCyqmZxeE65Sfvwrn3eREiCmdZwMjH';

	// parameters
	var type = req.params.type,
			state = req.params.state,
			method = req.params.method;

	// query - can be anything as long as they match the url
	var q1 = req.query.q1;
	var q2 = req.query.q2;
	var q3 = req.query.q3;


	//------------------- GOV API
	if(type == "gov"){

		// http://localhost:3000/api/v1/gov/GET/fuel
		//------------------- MAPS
		if(method == "fuel"){
			var url = 'https://api.data.gov/nrel/alt-fuel-stations/v1/nearest.json?api_key=' + govAPIKey + '&location=' + q1 + '+' + q2 + '&offset=' + q3;
			request({
			    url: url,
			    method: state,
			}, function(error, response, body){
			    if(error) {
			      res.json({success: false})
			    } else {
						if(response.statusCode == 200){
							res.json({success: true, data: response});
						}
						else{
							res.json({success: false, data: response})
						}
			    }
			});
		}
		//-------------------

		//------------------- CATCHES
		else{
			res.json({success: true, data: type + "/" + method + " is not a valid endpoint."});
		}
		//-------------------

	}
	//-------------------



	//------------------- GOV API
	else if(type == "google"){

		// http://localhost:3000/api/v1/gov/GET/fuel
		//------------------- MAPS
		if(method == "geocode"){
			var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + q1 + ',' + q2 + '&sensor=false';

			request({
					url: url,
					method: state,
			}, function(error, response, body){
					if(error) {
						res.json({success: false})
					} else {
						if(response.statusCode == 200){
							res.json({success: true, data: response});
						}
						else{
							res.json({success: false, data: response})
						}
					}
			});
		}
		//-------------------


		//------------------- MAPS
		else if(method == "zip"){
			var url = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + q1 + '&sensor=false';

			request({
					url: url,
					method: state,
			}, function(error, response, body){
					if(error) {
						res.json({success: false})
					} else {
						if(response.statusCode == 200){
							res.json({success: true, data: response});
						}
						else{
							res.json({success: false, data: response})
						}
					}
			});
		}
		//-------------------

	//------------------- CATCHES
	else{
		res.json({success: true, data: type + "/" + method + " is not a valid endpoint."});
	}
	//-------------------

}
//-------------------

	else{
				res.json({success: true, data: type + " is not a valid endpoint."});
	}

};
//----------------------------------------------
