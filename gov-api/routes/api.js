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
	console.log(type, state, method)

	//------------------- GOOGLE API
	if(type == "google"){

		// http://localhost:3000/api/v1/google/GET/maps
		//------------------- MAPS
		if(method == "maps"){
			var url = 'https://maps.googleapis.com/maps/api/js?key=' + googleAPIKey + '&callback=initMap';
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
	else if(type == "gov"){

		// http://localhost:3000/api/v1/gov/GET/fuel
		//------------------- MAPS
		if(method == "fuel"){
			var url = 'https://api.data.gov/nrel/alt-fuel-stations/v1/nearest.json?api_key=' + govAPIKey + '&location=Seattle+WA&offset=20';
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
