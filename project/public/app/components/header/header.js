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
    var appHeader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            appHeader = (function () {
                function appHeader() {
                }
                appHeader = __decorate([
                    core_1.Component({
                        selector: 'app-header',
                        template: "\n  <div class=\"ui attached stackable menu\">\n    <div class=\"ui container\">\n      <a class=\"item\">\n        <i class=\"home icon\"></i> Home\n      </a>\n      <a class=\"item\">\n        <i class=\"grid layout icon\"></i> Browse\n      </a>\n      <a class=\"item\">\n        <i class=\"mail icon\"></i> Messages\n      </a>\n      <div class=\"ui simple dropdown item\">\n        More\n        <i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n          <a class=\"item\"><i class=\"edit icon\"></i> Edit Profile</a>\n          <a class=\"item\"><i class=\"globe icon\"></i> Choose Language</a>\n          <a class=\"item\"><i class=\"settings icon\"></i> Account Settings</a>\n        </div>\n      </div>\n      <div class=\"right item\">\n        <div class=\"ui input\"><input type=\"text\" placeholder=\"Search...\"></div>\n      </div>\n    </div>\n  </div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], appHeader);
                return appHeader;
            }());
            exports_1("appHeader", appHeader);
        }
    }
});
//# sourceMappingURL=header.js.map