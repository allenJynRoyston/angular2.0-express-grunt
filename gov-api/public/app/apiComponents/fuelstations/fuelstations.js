System.register(['angular2/core', 'angular2/common', '../../services/api.gov', '../../apiComponents/googleMaps/googleMap', '../../directives/semantic-ui-modal/modal.directive', '../../directives/semantic-ui-sidebar/sidebar.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, api_gov_1, googleMap_1, modal_directive_1, sidebar_directive_1;
    var fuelStations;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (api_gov_1_1) {
                api_gov_1 = api_gov_1_1;
            },
            function (googleMap_1_1) {
                googleMap_1 = googleMap_1_1;
            },
            function (modal_directive_1_1) {
                modal_directive_1 = modal_directive_1_1;
            },
            function (sidebar_directive_1_1) {
                sidebar_directive_1 = sidebar_directive_1_1;
            }],
        execute: function() {
            //------------------------------------
            fuelStations = (function () {
                function fuelStations(_apiService) {
                    this._apiService = _apiService;
                    this.data = {
                        fuelstations: {
                            fuel_stations: []
                        },
                        coords: [],
                        markers: [],
                        map: null,
                        currentStation: {},
                        totalMarkers: 0,
                        count: 0,
                        root: _root
                    };
                    this.page = {
                        search: ""
                    };
                    this.show = false;
                }
                fuelStations.prototype.clicked = function () {
                    this.show = !this.show;
                };
                //-------------
                fuelStations.prototype.ngOnInit = function () {
                    console.log(this.data.root.globals.isMobile);
                    this.centerOnUsersLocation();
                };
                //-------------
                //-------------
                fuelStations.prototype.centerOnUsersLocation = function () {
                    var t = this;
                    this._apiService.getUsersCoords(function (res) {
                        var options = { center: { lat: res.lat, lng: res.long }, zoom: 13 };
                        setTimeout(function () {
                            t.data.map = new google.maps.Map(document.getElementById('_map_canvas'), options);
                            var marker = new google.maps.Marker({
                                position: { lat: res.lat, lng: res.long },
                                animation: google.maps.Animation.DROP,
                                map: t.data.map,
                                icon: '/media/images/brown_MarkerA.png',
                                title: 'Current Location'
                            });
                            /*
                            t.data.map.addListener('center_changed', function() {
                               window.setTimeout(function() {
                                 t.data.map.panTo(marker.getPosition());
                               }, 1500);
                             });
                             */
                            t.getFuelStations({ city: res.address.data.city, state: res.address.data.state, offset: 30 });
                        }, 100); // must wait for script to download - refine this later
                    });
                };
                //-------------
                //-------------
                // with strong typing
                fuelStations.prototype.updateZip = function (zip) {
                    var t = this;
                    this._apiService.getCityByZip({ zip: zip }, function (res) {
                        for (var i = 0; i < t.data.markers.length; i++) {
                            t.data.markers[i].Ob.setMap(null);
                        }
                        var center = new google.maps.LatLng(res.coords.lat, res.coords.long);
                        t.data.map.panTo(center);
                        t.getFuelStations({ city: res.address.data.city, state: res.address.data.state, offset: 30 });
                    });
                };
                //-------------
                //-------------
                fuelStations.prototype.getFuelStations = function (params) {
                    var t = this;
                    this._apiService.getFuelStations({ city: params.city, state: params.state, offset: 30 }, function (res) {
                        //
                        t.data.totalMarkers = res.total_results;
                        // assign index
                        for (var i in res.fuel_stations) {
                            var station = res.fuel_stations[i];
                            station.index = t.data.count;
                            t.data.count++;
                        }
                        // assign data to scope
                        t.data.fuelstations = res;
                        t.data.coords = [];
                        // get coords
                        for (var i in res.fuel_stations) {
                            var station = res.fuel_stations[i];
                            t.data.coords.push({ index: i, name: station.station_name, phone: station.station_phone, lat: station.latitude, long: station.longitude });
                        }
                        t.createMarkersForStations(t.data.coords);
                    });
                };
                //-------------
                //-------------
                fuelStations.prototype.highlightAddress = function (index, toggle) {
                    var t = this, marker = t.data.markers[index], marketObj = marker.Ob;
                    // looks like the marker.property changes....
                    if (toggle == undefined) {
                        if (marketObj.getAnimation() !== null) {
                            marketObj.setAnimation(null);
                        }
                        else {
                            marketObj.setAnimation(google.maps.Animation.BOUNCE);
                        }
                    }
                    else {
                        if (toggle) {
                            marketObj.setAnimation(google.maps.Animation.BOUNCE);
                        }
                        else {
                            marketObj.setAnimation(null);
                        }
                    }
                };
                //-------------
                //-------------
                fuelStations.prototype.createMarkersForStations = function (coords) {
                    var t = this;
                    for (var i = 0; i < coords.length; i++) {
                        var c = coords[i];
                        var marker = {
                            position: { lat: c.lat, lng: c.long },
                            animation: google.maps.Animation.DROP,
                            map: t.data.map,
                            title: c.name,
                            index: i
                        };
                        t.addMarkerWithTimeout(marker, i * 50);
                    }
                };
                //-------------
                //-------------
                fuelStations.prototype.markerCallback = function (marker) {
                    var t = this;
                    t.data.currentStation = t.data.fuelstations.fuel_stations[marker.index];
                    $("#modal1").modal('show');
                };
                fuelStations.prototype.moveToLocation = function (marker) {
                    var t = this;
                    t.data.map.panTo(t.data.markers[marker.index].Ob.getPosition());
                };
                //-------------
                //-------------
                fuelStations.prototype.addMarkerWithTimeout = function (marker, timeout) {
                    var t = this;
                    window.setTimeout(function () {
                        t.data.markers.push(new google.maps.Marker(marker)
                            .addListener('click', function () {
                            if (this.getAnimation() !== null) {
                            }
                            else {
                                //this.setAnimation(google.maps.Animation.BOUNCE);
                                t.data.map.panTo(this.getPosition());
                                t.markerCallback(this);
                            }
                        }));
                    }, timeout);
                };
                fuelStations = __decorate([
                    core_1.Component({
                        selector: 'fuel-stations',
                        directives: [common_1.CORE_DIRECTIVES, googleMap_1.googleMaps, modal_directive_1.uiSemanticModal, sidebar_directive_1.uiSemanticSidebar],
                        providers: [api_gov_1.apiServices],
                        styles: ["\n    #map {\n        height: 600px;\n    }\n    .custom-map-padding{\n        width: 100%;\n        height: 600px;\n        padding: 0px!important;\n    }\n    .custom-list-padding{\n      width: 100%;\n      height: 600px;\n      padding: 10px;\n      overflow-y: auto\n    }\n\n    .hover-card\n\n  "],
                        template: "\n\n  <div id='sidebarLeft' class='ui left vertical menu sidebar inverted'>\n    <a class=\"item\" *ngFor=\"#station of data.fuelstations.fuel_stations; #index = index\"\n      (mouseenter)='highlightAddress(station.index, true)'\n      (mouseleave)='highlightAddress(station.index, false)'>\n      <span  ui-modal [options]=\"{selector: '#modal1', blurring: true, transition: 'scale'}\"\n          (click)='data.currentStation = station'\n          (mouseenter)='moveToLocation(station)'>\n          <small>{{station.station_name}}</small>\n      </span>\n    </a>\n  </div>\n\n\n  <div>\n    <p>Expression status: {{show}}</p>\n    <button (click)=\"clicked()\">Toggle Header</button>\n    <div style=\"border: 1px solid black; padding: 10px; width: 400px; margin-top: 10px;\">\n      <div *ng-if=\"show\">\n        <h2>Hello Angular2!</h2>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"ui secondary  menu\">\n    <div class=\"item\">\n      <div class=\"ui icon input\">\n        <input #i (keyup.enter)=\"updateZip(i.value)\" type=\"text\" placeholder=\"Zipcode...\">\n        <i (click)='updateZip(i.value)' class=\"search link icon\"></i>\n      </div>\n    </div>\n    <div class=\"right menu\">\n      <a class='ui facebook button' ui-sidebar [options]=\"{selector: '#sidebarLeft', animation: 'push'}\">Sidebar</a>\n    </div>\n  </div>\n  <br>\n  <div class=\"ui grid\" style='height: 600px' >\n    <div class=\"twelve wide column custom-map-padding\">\n      <div id='map'>\n        <google-maps></google-maps>\n      </div>\n    </div>\n    <div class=\"four wide column custom-list-padding\">\n        <div class=\"ui link cards\">\n          <div *ngFor=\"#station of data.fuelstations.fuel_stations; #index = index\" class=\"card\"\n              (click)='moveToLocation(station)'\n              (mouseenter)='highlightAddress(station.index, true)'\n              (mouseleave)='highlightAddress(station.index, false)'>\n            <div class=\"content\" style='text-align: left'>\n              <div class=\"header\">\n                <a  ui-modal [options]=\"{selector: '#modal1', blurring: true, transition: 'scale'}\"\n                    (click)='data.currentStation = station'>\n                    <small>{{station.station_name}}</small>\n                </a>\n              </div>\n              <div class=\"meta\">\n              </div>\n              <div class=\"description\">\n                  <p>{{station.distance}}</p> Miles Away\n              </div>\n            </div>\n          </div>\n          <div class='card'>\n            <button class=\"fluid ui button orange\">Fetch More</button>\n          </div>\n        </div>\n    </div>\n  </div>\n\n\n  <div id=\"modal1\" class=\"ui modal\"><i class=\"close icon\"></i>\n    <div class=\"header\">\n      {{data.currentStation.station_name}}\n    </div>\n    <div class=\"image content\">\n      <div class=\"ui small image\"><img src=\"media/images/googleMap.png\"/></div>\n      <div class=\"description\">\n        <div class=\"ui header\">\n          {{data.currentStation.street_address}}\n          <br>\n          {{data.currentStation.city}}, {{data.currentStation.state}} {{data.currentStation.zip}}\n          <br>\n          {{data.currentStation.station_phone}}\n          <br>\n\n        </div>\n        <p>{{data.currentStation.access_days_time}}</p>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <a target=\"_blank\" href='https://www.google.com/maps/place/{{data.currentStation.street_address}}+{{data.currentStation.city}}+{{data.currentStation.state}}' class=\"ui positive right labeled icon button\">Open in Maps!<i class=\"checkmark icon\"></i></a>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [api_gov_1.apiServices])
                ], fuelStations);
                return fuelStations;
            }());
            exports_1("fuelStations", fuelStations);
        }
    }
});
//------------------------------------
//# sourceMappingURL=fuelstations.js.map