System.register(['angular2/core', 'angular2/common', '../../services/api.gov'], function(exports_1, context_1) {
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
    var core_1, common_1, api_gov_1;
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
            }],
        execute: function() {
            //------------------------------------
            fuelStations = (function () {
                function fuelStations(_apiService) {
                    this._apiService = _apiService;
                    this.data = {
                        fuelstations: [],
                    };
                }
                fuelStations.prototype.ngOnInit = function () {
                    this.getFuelStations();
                };
                fuelStations.prototype.getFuelStations = function () {
                    var d = this.data;
                    this._apiService.getFuelStations(function (res) {
                        d.fuelstations = JSON.parse(res.data.body);
                    });
                    this._apiService.getGoogleMaps(function (res) {
                        //console.log(res.data.body)
                    });
                    /*
                    var map;
                    function initMap() {
                      map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: -34.397, lng: 150.644},
                        zoom: 8
                      });
                    }
                    */
                };
                fuelStations = __decorate([
                    core_1.Component({
                        selector: 'fuel-stations',
                        directives: [common_1.CORE_DIRECTIVES],
                        providers: [api_gov_1.apiServices],
                        styles: ["\n    #map {\n        height: 500px;\n    }\n  "],
                        template: "\n  <h1>Fuel Stations</h1>\n  <li *ngFor=\"#station of data.fuelstations.fuel_stations; #index = index\">\n    {{index}}: {{station.city}}\n  </li>\n  <div id=\"map\"></div>\n  "
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