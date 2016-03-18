// core
import {Component, Input}        from 'angular2/core';
import {CORE_DIRECTIVES}  from 'angular2/common';
import {apiServices}      from '../../services/api.gov'

// directives
import {googleMaps}       from '../../apiComponents/googleMaps/googleMap'
import {uiSemanticModal}  from '../../directives/semantic-ui-modal/modal.directive';
import {uiSemanticSidebar} from '../../directives/semantic-ui-sidebar/sidebar.directive';


declare var $;
declare var google;
declare var _root;
//------------------------------------
@Component({
  selector: 'fuel-stations',
  directives: [CORE_DIRECTIVES, googleMaps, uiSemanticModal,uiSemanticSidebar],
  providers: [apiServices],
  styles: [`
    #map {
        height: 600px;
    }
    .custom-map-padding{
        width: 100%;
        height: 600px;
        padding: 0px!important;
    }
    .custom-list-padding{
      width: 100%;
      height: 600px;
      padding: 10px;
      overflow-y: auto
    }

    .hover-card

  `],
  template: `

  <div id='sidebarLeft' class='ui left vertical menu sidebar inverted'>
    <a class="item" *ngFor="#station of data.fuelstations.fuel_stations; #index = index"
      (mouseenter)='highlightAddress(station.index, true)'
      (mouseleave)='highlightAddress(station.index, false)'>
      <span  ui-modal [options]="{selector: '#modal1', blurring: true, transition: 'scale'}"
          (click)='data.currentStation = station'
          (mouseenter)='moveToLocation(station)'>
          <small>{{station.station_name}}</small>
      </span>
    </a>
  </div>


  <div>
    <p>Expression status: {{show}}</p>
    <button (click)="clicked()">Toggle Header</button>
    <div style="border: 1px solid black; padding: 10px; width: 400px; margin-top: 10px;">
      <div *ng-if="show">
        <h2>Hello Angular2!</h2>
      </div>
    </div>
  </div>

  <div class="ui secondary  menu">
    <div class="item">
      <div class="ui icon input">
        <input #i (keyup.enter)="updateZip(i.value)" type="text" placeholder="Zipcode...">
        <i (click)='updateZip(i.value)' class="search link icon"></i>
      </div>
    </div>
    <div class="right menu">
      <a class='ui facebook button' ui-sidebar [options]="{selector: '#sidebarLeft', animation: 'push'}">Sidebar</a>
    </div>
  </div>
  <br>
  <div class="ui grid" style='height: 600px' >
    <div class="twelve wide column custom-map-padding">
      <div id='map'>
        <google-maps></google-maps>
      </div>
    </div>
    <div class="four wide column custom-list-padding">
        <div class="ui link cards">
          <div *ngFor="#station of data.fuelstations.fuel_stations; #index = index" class="card"
              (click)='moveToLocation(station)'
              (mouseenter)='highlightAddress(station.index, true)'
              (mouseleave)='highlightAddress(station.index, false)'>
            <div class="content" style='text-align: left'>
              <div class="header">
                <a  ui-modal [options]="{selector: '#modal1', blurring: true, transition: 'scale'}"
                    (click)='data.currentStation = station'>
                    <small>{{station.station_name}}</small>
                </a>
              </div>
              <div class="meta">
              </div>
              <div class="description">
                  <p>{{station.distance}}</p> Miles Away
              </div>
            </div>
          </div>
          <div class='card'>
            <button class="fluid ui button orange">Fetch More</button>
          </div>
        </div>
    </div>
  </div>


  <div id="modal1" class="ui modal"><i class="close icon"></i>
    <div class="header">
      {{data.currentStation.station_name}}
    </div>
    <div class="image content">
      <div class="ui small image"><img src="media/images/googleMap.png"/></div>
      <div class="description">
        <div class="ui header">
          {{data.currentStation.street_address}}
          <br>
          {{data.currentStation.city}}, {{data.currentStation.state}} {{data.currentStation.zip}}
          <br>
          {{data.currentStation.station_phone}}
          <br>

        </div>
        <p>{{data.currentStation.access_days_time}}</p>
      </div>
    </div>
    <div class="actions">
      <a target="_blank" href='https://www.google.com/maps/place/{{data.currentStation.street_address}}+{{data.currentStation.city}}+{{data.currentStation.state}}' class="ui positive right labeled icon button">Open in Maps!<i class="checkmark icon"></i></a>
    </div>
  </div>
  `
})
export class fuelStations {

  constructor(private _apiService: apiServices){}

  public data = {
    fuelstations: {
      fuel_stations: []
    },
    coords:[],
    markers: [],
    map: null,
    currentStation: {},
    totalMarkers: 0,
    count: 0,
    root: _root
  }


  public page = {
    search: ""
  }

  show: Boolean = false;

  clicked() {
    this.show = !this.show;
  }

  //-------------
  ngOnInit(){
    console.log( this.data.root.globals.isMobile )
    this.centerOnUsersLocation();
  }
  //-------------


  //-------------
  centerOnUsersLocation(){
    var t = this;
    this._apiService.getUsersCoords(function(res){
          var options = {center: {lat: res.lat, lng: res.long}, zoom: 13};
          setTimeout(function(){
            t.data.map = new google.maps.Map(document.getElementById('_map_canvas'), options)

            var marker = new google.maps.Marker({
              position: {lat: res.lat, lng: res.long},
              animation: google.maps.Animation.DROP,
              map: t.data.map,
              icon: '/media/images/brown_MarkerA.png',
              title: 'Current Location'
            })

            /*
            t.data.map.addListener('center_changed', function() {
               window.setTimeout(function() {
                 t.data.map.panTo(marker.getPosition());
               }, 1500);
             });
             */


            t.getFuelStations({city: res.address.data.city, state: res.address.data.state, offset: 30});
          }, 100)    // must wait for script to download - refine this later
    })
  }
  //-------------

  //-------------
  // with strong typing
  updateZip(zip){
    var t = this;
    this._apiService.getCityByZip({zip: zip}, function(res){

        for(var i = 0; i < t.data.markers.length; i++){
          t.data.markers[i].Ob.setMap(null)
        }

        var center = new google.maps.LatLng(res.coords.lat, res.coords.long);
        t.data.map.panTo(center);
        t.getFuelStations({city: res.address.data.city, state: res.address.data.state, offset: 30});

    })
  }
  //-------------

  //-------------
  getFuelStations(params){
    var t = this;
    this._apiService.getFuelStations({city: params.city, state: params.state, offset: 30}, function(res){

        //
        t.data.totalMarkers = res.total_results;

          // assign index
          for (var i in res.fuel_stations){
            var station = res.fuel_stations[i]
                station.index = t.data.count
                t.data.count ++;
          }

          // assign data to scope
          t.data.fuelstations = res;
          t.data.coords = [];

          // get coords
          for (var i in res.fuel_stations){
            var station = res.fuel_stations[i]
            t.data.coords.push({index: i, name: station.station_name, phone: station.station_phone, lat: station.latitude, long: station.longitude})
          }


          t.createMarkersForStations(t.data.coords);
    })
  }
  //-------------


  //-------------
  highlightAddress(index, toggle){
    var t = this,
        marker = t.data.markers[index],
        marketObj = marker.Ob;
        // looks like the marker.property changes....
        if(toggle == undefined){
          if (marketObj.getAnimation() !== null) {
            marketObj.setAnimation(null);
          } else {
            marketObj.setAnimation(google.maps.Animation.BOUNCE);
          }
        }
        else{
          if(toggle){
            marketObj.setAnimation(google.maps.Animation.BOUNCE);
          }
          else{
            marketObj.setAnimation(null);
          }
        }
  }
  //-------------


  //-------------
  createMarkersForStations(coords){
    var t = this;
    for (var i = 0; i < coords.length; i++){
      var c = coords[i];
      var marker = {
        position: {lat: c.lat, lng: c.long},
        animation: google.maps.Animation.DROP,
        map:  t.data.map,
        title: c.name,
        index: i
      }
      t.addMarkerWithTimeout(marker, i * 50);
    }
  }
  //-------------


  //-------------
  markerCallback(marker){
    var t = this;
    t.data.currentStation =  t.data.fuelstations.fuel_stations[marker.index];
    $("#modal1").modal('show')
  }

  moveToLocation(marker){
    var t = this;
        t.data.map.panTo( t.data.markers[marker.index].Ob.getPosition() )
  }
  //-------------

  //-------------
  addMarkerWithTimeout(marker, timeout){
    var t = this;
    window.setTimeout(function() {
      t.data.markers.push(new google.maps.Marker(marker)
        .addListener('click', function(){
          if (this.getAnimation() !== null) {
            //this.setAnimation(null);
          } else {
            //this.setAnimation(google.maps.Animation.BOUNCE);
            t.data.map.panTo(this.getPosition());
            t.markerCallback(this)
          }
        })

      );
    }, timeout);
  }
  //-------------




}
//------------------------------------
