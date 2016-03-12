import {Injectable} from 'angular2/core';
declare var $;

@Injectable()
export class apiServices {


  getGoogleMaps(callback){
    var url = window.location.origin + '/api/v1/google/GET/maps'
    $.ajax({
      url: url,
      success: function(res){
        callback(res);
      },
    });

  }


  getFuelStations(callback) {
    var url = window.location.origin + '/api/v1/gov/GET/fuel'
    $.ajax({
      url: url,
      success: function(res){
        callback(res);
      },
    });
  }


}
