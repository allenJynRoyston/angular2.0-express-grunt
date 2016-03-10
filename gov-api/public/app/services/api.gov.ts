import {Injectable} from 'angular2/core';
declare var $;

@Injectable()
export class apiServices {


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
