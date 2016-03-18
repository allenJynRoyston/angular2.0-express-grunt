System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var apiServices;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            apiServices = (function () {
                function apiServices() {
                }
                apiServices.prototype.getUsersCoords = function (callback) {
                    var t = this;
                    if ("geolocation" in navigator) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            var userLat = position.coords.latitude, userLong = position.coords.longitude;
                            t.getUserCityState({ lat: userLat, long: userLong }, function (res) {
                                callback({ lat: userLat, long: userLong, address: t.parseAddressParts(res.results[0].formatted_address) });
                            });
                        });
                    }
                    else {
                        alert("Browser is unable to fetch users coordinates.");
                        var userLat = 0, userLong = 0;
                        callback({ lat: userLat, long: userLong });
                    }
                };
                ;
                //---------------------------------
                // breaks apart a googleMap string
                //
                apiServices.prototype.parseAddressParts = function (address) {
                    var n = (address.match(/,/g) || []).length;
                    var _return = { status: true, data: null };
                    if (n == 2) {
                        try {
                            var p = address.split(","), d = {
                                address: null,
                                city: p[0].replace(/\s+/g, ''),
                                state: p[1].split(" ")[1].replace(/\s+/g, ''),
                                zip: null,
                                country: p[2].replace(/\s+/g, '')
                            };
                            _return.data = d;
                        }
                        catch (err) {
                            _return.status = false;
                        }
                    }
                    if (n == 3) {
                        try {
                            var p = address.split(","), d = {
                                address: p[0],
                                city: p[1].replace(/\s+/g, ''),
                                state: p[2].split(" ")[1].replace(/\s+/g, ''),
                                zip: p[2].split(" ")[2].replace(/\s+/g, ''),
                                country: p[3].replace(/\s+/g, '')
                            };
                            _return.data = d;
                        }
                        catch (err) {
                            _return.status = false;
                        }
                    }
                    if (n == 4) {
                        try {
                            var p = address.split(","), d = {
                                address: p[0] + p[1],
                                city: p[2].replace(/\s+/g, ''),
                                state: p[3].split(" ")[1].replace(/\s+/g, ''),
                                zip: p[3].split(" ")[2].replace(/\s+/g, ''),
                                country: p[4].replace(/\s+/g, '')
                            };
                            _return.data = d;
                        }
                        catch (err) {
                            _return.status = false;
                        }
                    }
                    return _return;
                };
                //
                //---------------------------------
                //---------------------------------
                apiServices.prototype.getFuelStations = function (parameters, callback) {
                    var url = window.location.origin + '/api/v1/gov/GET/fuel?q1=' + parameters.city + "&q2=" + parameters.state + "&q3=" + parameters.offset;
                    $.ajax({
                        url: url,
                        success: function (res) {
                            var data = JSON.parse(res.data.body);
                            callback(data);
                        },
                    });
                };
                //---------------------------------
                //---------------------------------
                apiServices.prototype.getUserCityState = function (params, callback) {
                    var url = window.location.origin + '/api/v1/google/GET/geocode?q1=' + params.lat + "&q2=" + params.long;
                    $.ajax({
                        url: url,
                        success: function (res) {
                            var data = JSON.parse(res.data.body);
                            callback(data);
                        },
                    });
                };
                //---------------------------------
                //---------------------------------
                apiServices.prototype.getCityByZip = function (params, callback) {
                    var t = this;
                    var url = window.location.origin + '/api/v1/google/GET/zip?q1=' + params.zip;
                    $.ajax({
                        url: url,
                        success: function (res) {
                            var data = JSON.parse(res.data.body);
                            callback({ address: t.parseAddressParts(data.results[0].formatted_address), coords: { lat: data.results[0].geometry.location.lat, long: data.results[0].geometry.location.lng } });
                        },
                    });
                };
                apiServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], apiServices);
                return apiServices;
            }());
            exports_1("apiServices", apiServices);
        }
    }
});
//# sourceMappingURL=api.gov.js.map