System.register(['angular2/core', 'angular2/router', './../home/home', './../about/about', './../contact/contact', './../../directives/semantic-ui-sticky/sticky.directive'], function(exports_1) {
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
    var core_1, router_1, home_1, about_1, contact_1, sticky_directive_1;
    var appContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            },
            function (sticky_directive_1_1) {
                sticky_directive_1 = sticky_directive_1_1;
            }],
        execute: function() {
            appContainer = (function () {
                function appContainer() {
                }
                appContainer = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES, sticky_directive_1.uiSemanticSticky],
                        templateUrl: './views/index/index.html'
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_1.homeComponent,
                        },
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_1.homeComponent,
                        },
                        {
                            path: '/about',
                            name: 'About',
                            component: about_1.aboutComponent,
                        },
                        {
                            path: '/contact',
                            name: 'Contact',
                            component: contact_1.contactComponent,
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], appContainer);
                return appContainer;
            }());
            exports_1("appContainer", appContainer);
        }
    }
});
//# sourceMappingURL=app.container.js.map