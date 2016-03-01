System.register(['angular2/core', 'angular2/router', '../components/page_home/page.home', '../components/page_about/page.about', '../components/page_directives/page.directives', '../directives/semantic-ui-dropdown/dropdown.directive', '../directives/semantic-ui-visibility/visibility.directive', '../directives/semantic-ui-sidebar/sidebar.directive', '../parts/boilerplate.parts'], function(exports_1, context_1) {
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
    var core_1, router_1, page_home_1, page_about_1, page_directives_1, dropdown_directive_1, visibility_directive_1, sidebar_directive_1, boilerplate_parts_1;
    var templateHomepage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (page_home_1_1) {
                page_home_1 = page_home_1_1;
            },
            function (page_about_1_1) {
                page_about_1 = page_about_1_1;
            },
            function (page_directives_1_1) {
                page_directives_1 = page_directives_1_1;
            },
            function (dropdown_directive_1_1) {
                dropdown_directive_1 = dropdown_directive_1_1;
            },
            function (visibility_directive_1_1) {
                visibility_directive_1 = visibility_directive_1_1;
            },
            function (sidebar_directive_1_1) {
                sidebar_directive_1 = sidebar_directive_1_1;
            },
            function (boilerplate_parts_1_1) {
                boilerplate_parts_1 = boilerplate_parts_1_1;
            }],
        execute: function() {
            templateHomepage = (function () {
                function templateHomepage() {
                    this.onPassed = {
                        40: function () {
                            console.log("passed 40");
                        },
                        80: function () {
                            console.log("passed 80");
                        }
                    };
                }
                templateHomepage = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [
                            // core
                            router_1.ROUTER_DIRECTIVES,
                            //Directives
                            dropdown_directive_1.uiSemanticDropdown,
                            visibility_directive_1.uiSemanticVisibility,
                            sidebar_directive_1.uiSemanticSidebar,
                            // boilerplate
                            boilerplate_parts_1.partsHeader,
                            boilerplate_parts_1.partsFooter,
                        ],
                        templateUrl: './views/templates/homepage.html'
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: page_directives_1.pageDirectives,
                        },
                        {
                            path: '/home',
                            name: 'Home',
                            component: page_home_1.pageHome,
                        },
                        {
                            path: '/directives',
                            name: 'Directives',
                            component: page_directives_1.pageDirectives,
                        },
                        {
                            path: '/about',
                            name: 'About',
                            component: page_about_1.pageAbout,
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], templateHomepage);
                return templateHomepage;
            }());
            exports_1("templateHomepage", templateHomepage);
        }
    }
});
//# sourceMappingURL=template.homepage.js.map