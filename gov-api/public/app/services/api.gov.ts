import {Injectable} from 'angular2/core';
declare var $;

@Injectable()
export class apiServices {

	// google maps API key AIzaSyAO2sYcau79tW0H3jG3z_qmb94SE8XNSKs
  getGoogleMaps(callback){
    var url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAO2sYcau79tW0H3jG3z_qmb94SE8XNSKs&callback=initMap'

    $.ajax({
      url: url,
      type: 'GET',
      crossDomain: true,    
      success: function(res){
        console.log(res)
        callback(res);
      },
    });

  }

  // Uses http.get() to load a single JSON file
  getFuelStations(callback) {
    var url = 'https://api.data.gov/nrel/alt-fuel-stations/v1/nearest.json?api_key=rVKRnhx5JbJCyqmZxeE65Sfvwrn3eREiCmdZwMjH&location=Seattle+WA&offset=20';

    $.ajax({
      url: url,
      success: function(res){
        callback(res);
      },
    });
  }


}
