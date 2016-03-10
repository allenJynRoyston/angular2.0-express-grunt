// core
import {Component}        from 'angular2/core';
import {CORE_DIRECTIVES}  from 'angular2/common';
import {apiServices}       from '../../services/api.gov'
declare var $;

//------------------------------------
@Component({
  selector: 'fuel-stations',
  directives: [CORE_DIRECTIVES],
  providers: [apiServices],
  template: `
  <h1>Fuel Stations</h1>
  <li *ngFor="#station of data.fuelstations.fuel_stations; #index = index">
    {{index}}: {{station.city}}
  </li>

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
          d.fuelstations = res;
    })
  }

}
//------------------------------------
