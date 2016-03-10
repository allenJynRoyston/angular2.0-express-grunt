System.register(['angular2/core'], function(exports_1) {
    "use strict";
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
                // Uses http.get() to load a single JSON file
                apiServices.prototype.getFuelStations = function (callback) {
                    var url = 'https://api.data.gov/nrel/alt-fuel-stations/v1/nearest.json?api_key=rVKRnhx5JbJCyqmZxeE65Sfvwrn3eREiCmdZwMjH&location=Seattle+WA&offset=20';
                    $.ajax({
                        url: url,
                        success: function (res) {
                            callback(res);
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