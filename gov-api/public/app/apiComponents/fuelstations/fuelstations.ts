// core
import {Component}        from 'angular2/core';
import {CORE_DIRECTIVES}  from 'angular2/common';
import {apiServices}       from '../../services/api.gov'
declare var $;
declare var google;
//------------------------------------
@Component({
  selector: 'fuel-stations',
  directives: [CORE_DIRECTIVES],
  providers: [apiServices],
  styles: [`
    #map {
        height: 500px;
    }
  `],
  template: `
  <h1>Fuel Stations</h1>
  <li *ngFor="#station of data.fuelstations.fuel_stations; #index = index">
    {{index}}: {{station.city}}
  </li>
  <div id="map"></div>
  `
})
export class fuelStations {

  constructor(private _apiService: apiServices){}

  public data = {
    fuelstations: [],
  }

  ngOnInit(){
      this.getFuelStations();
  }

  getFuelStations(){
    var d = this.data;
    this._apiService.getFuelStations(function(res){
          d.fuelstations = JSON.parse(res.data.body)
    })

    this._apiService.getGoogleMaps(function(res){
      //console.log(res.data.body)
    })
    /*
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }
    */

  }

}
//------------------------------------
