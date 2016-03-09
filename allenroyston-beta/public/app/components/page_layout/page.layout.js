System.register(['angular2/core', 'angular2/router', '../../components/page_home/page.home', '../../components/page_resume/page.resume', '../../components/page_portfolio/page.portfolio', '../../directives/semantic-ui-dropdown/dropdown.directive', '../../directives/semantic-ui-visibility/visibility.directive', '../../directives/semantic-ui-sidebar/sidebar.directive', '../../components/parts/boilerplate.parts'], function(exports_1) {
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
    var core_1, router_1, page_home_1, page_resume_1, page_portfolio_1, dropdown_directive_1, visibility_directive_1, sidebar_directive_1, boilerplate_parts_1;
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
            function (page_resume_1_1) {
                page_resume_1 = page_resume_1_1;
            },
            function (page_portfolio_1_1) {
                page_portfolio_1 = page_portfolio_1_1;
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
                function templateHomepage(_router) {
                    this._router = _router;
                    this.routes = [
                        { name: "Home", path: ["Home"], icon: 'fa fa-home' },
                        { name: "Resume", path: ["Resume"], icon: 'fa fa-file-code-o' },
                        { name: "Portfolio", path: ["Portfolio"], icon: 'fa fa-university' }
                    ];
                }
                templateHomepage.prototype.linkTo = function (link, autoclose) {
                    $(window).scrollTop(0);
                    this._router.navigate(link);
                };
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
                            boilerplate_parts_1.partsFiller,
                            boilerplate_parts_1.partsFooter
                        ],
                        templateUrl: './app/components/page_layout/layout.html'
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: page_home_1.pageHome,
                            useAsDefault: true
                        },
                        {
                            path: '/home',
                            name: 'Home',
                            component: page_home_1.pageHome,
                        },
                        {
                            path: '/portfolio',
                            name: 'Portfolio',
                            component: page_portfolio_1.pagePortfolio,
                        },
                        {
                            path: '/resume',
                            name: 'Resume',
                            component: page_resume_1.pageResume,
                        },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], templateHomepage);
                return templateHomepage;
            }());
            exports_1("templateHomepage", templateHomepage);
        }
    }
});
//# sourceMappingURL=page.layout.js.map