System.register(['angular2/core', 'angular2/router', './../routeOne/routeOne', './../routeTwo/routeTwo', './../../directives/highlight/highlight.directive', './../../directives/semantic-ui-accordian/accordian.directive', './../../directives/semantic-ui-checkbox/checkbox.directive', './../../directives/semantic-ui-dimmer/dimmer.directive'], function(exports_1) {
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
    var core_1, router_1, routeOne_1, routeTwo_1, highlight_directive_1, accordian_directive_1, checkbox_directive_1, dimmer_directive_1;
    var appContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routeOne_1_1) {
                routeOne_1 = routeOne_1_1;
            },
            function (routeTwo_1_1) {
                routeTwo_1 = routeTwo_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (accordian_directive_1_1) {
                accordian_directive_1 = accordian_directive_1_1;
            },
            function (checkbox_directive_1_1) {
                checkbox_directive_1 = checkbox_directive_1_1;
            },
            function (dimmer_directive_1_1) {
                dimmer_directive_1 = dimmer_directive_1_1;
            }],
        execute: function() {
            appContainer = (function () {
                function appContainer() {
                }
                appContainer = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES, highlight_directive_1.HighlightDirective, accordian_directive_1.uiSemanticAccordian, checkbox_directive_1.uiSemanticCheckbox, dimmer_directive_1.uiSemanticDimmer],
                        //templateUrl: './views/home/home.html'
                        template: "\n    <h1 class=\"title\">Component Router</h1>\n    <nav>\n      <a [routerLink]=\"['About']\">About</a>\n    </nav>\n    <router-outlet></router-outlet>\n    "
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: routeOne_1.RouteOneComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/about',
                            name: 'About',
                            component: routeTwo_1.RouteTwoComponent,
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