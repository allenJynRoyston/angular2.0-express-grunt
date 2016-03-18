System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var googleMaps;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            //------------------------------------
            googleMaps = (function () {
                function googleMaps() {
                }
                googleMaps.prototype.ngOnInit = function () {
                    var options = {};
                    options = this.options;
                    // add script to body
                    var js = document.createElement("script");
                    js.type = "text/javascript";
                    js.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAO2sYcau79tW0H3jG3z_qmb94SE8XNSKs";
                    document.body.appendChild(js);
                    js.onload = function () {
                        if (options == undefined) {
                            // default shows entire map
                            options = { center: { lat: 0, lng: 0 }, zoom: 2 };
                        }
                        var map = new google.maps.Map(document.getElementById('_map_canvas'), options);
                    };
                };
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], googleMaps.prototype, "options", void 0);
                googleMaps = __decorate([
                    core_1.Component({
                        selector: 'google-maps',
                        directives: [common_1.CORE_DIRECTIVES],
                        styles: ["\n    #_map_canvas  {\n        width: 100%;\n        height: 100%;\n    }\n  "],
                        template: "\n    <div id=\"_map_canvas\"></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], googleMaps);
                return googleMaps;
            }());
            exports_1("googleMaps", googleMaps);
        }
    }
});
//------------------------------------
//# sourceMappingURL=googleMap.js.map