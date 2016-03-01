System.register(['angular2/core', 'angular2/router'], function(exports_1) {
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
    var core_1, router_1;
    var appSidebar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            appSidebar = (function () {
                function appSidebar() {
                }
                appSidebar = __decorate([
                    core_1.Component({
                        selector: 'app-sidebar',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: './views/sidebar/sidebar.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], appSidebar);
                return appSidebar;
            }());
            exports_1("appSidebar", appSidebar);
        }
    }
});
//# sourceMappingURL=sidebar.js.map