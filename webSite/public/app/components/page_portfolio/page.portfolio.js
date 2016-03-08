System.register(['angular2/core', 'angular2/common', '../../directives/semantic-ui-dropdown/dropdown.directive', '../../directives/semantic-ui-visibility/visibility.directive', '../../directives/semantic-ui-sidebar/sidebar.directive', '../../directives/semantic-ui-dimmer/dimmer.directive', '../../directives/semantic-ui-shape/shape.directive', '../../directives/semantic-ui-modal/modal.directive', '../../directives/semantic-ui-transition/transition.directive', '../../directives/semantic-ui-tab/tab.directive'], function(exports_1) {
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
    var core_1, common_1, dropdown_directive_1, visibility_directive_1, sidebar_directive_1, dimmer_directive_1, shape_directive_1, modal_directive_1, transition_directive_1, transition_directive_2, transition_directive_3, tab_directive_1;
    var pagePortfolio;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            function (dimmer_directive_1_1) {
                dimmer_directive_1 = dimmer_directive_1_1;
            },
            function (shape_directive_1_1) {
                shape_directive_1 = shape_directive_1_1;
            },
            function (modal_directive_1_1) {
                modal_directive_1 = modal_directive_1_1;
            },
            function (transition_directive_1_1) {
                transition_directive_1 = transition_directive_1_1;
                transition_directive_2 = transition_directive_1_1;
                transition_directive_3 = transition_directive_1_1;
            },
            function (tab_directive_1_1) {
                tab_directive_1 = tab_directive_1_1;
            }],
        execute: function() {
            pagePortfolio = (function () {
                function pagePortfolio() {
                    //------------------------------------
                    // declare variables
                    this.liveSites = [
                        { src: "media/sites/website.png", title: "Social Rugrats", url: "http://socialrugrats.com/", description: "Built with Angular, Bootstrap, Python, & PostgreSQL" },
                        { src: "media/sites/website.png", title: "Fun Labs (backend for Social Rugrats)", url: "http://funlabs.socialrugrats.com/", description: "Built with Angular, Bootstrap, Python, MongoDB, & PostgreSQL" },
                        { src: "media/sites/website.png", title: "Good Done Great (various projects)", url: "http://gooddonegreat.com/", description: "Built with Angular, Bootstrap, & Rollbase" },
                        { src: "media/sites/original.png", title: "CodeAndLogic", url: "http://codeandlogic.com/#/home", description: "Built with AngularJS, NodeJS, MongoDB & Foundation 5." },
                        { src: "media/sites/crashcode.png", title: "Angular Tutorial", url: "http://crashcode.ninja/angularJS/#/home", description: "Built with AngularJS, NodeJS & Bootstrap 3" },
                        { src: "media/sites/firstrites.png", title: "First Rites", url: "http://www.codeandlogic.com/sites/firstRites/", description: "Built with Custom Framework and PHP" },
                        { src: "media/sites/arclyte.png", title: "Arclyte Imagery", url: "http://www.codeandlogic.com/sites/arclyte2/", description: "Built with Custom Framework and PHP" },
                        { src: "media/sites/theclubl.png", title: "The Club L", url: "http://theclubl.com/#/home", description: "Built with AngularJS, PHP, MYSQL, and Foundation 5" },
                    ];
                    this.siteMockups = [
                        { src: "media/sites/simple.png", title: "Corporate Demo", url: "http://www.codeandlogic.com/sites/mock2/#/home", description: "Built with AngularJS, NodeJS, and Foundation 5" },
                        { src: "media/sites/personal.png", title: "Personal Demo", url: "http://www.codeandlogic.com/sites/mock1/#/home", description: "Built with AngularJS, NodeJS, and Foundation 5" },
                        { src: "media/sites/mobile.png", title: "Mobile Demo", url: "http://www.codeandlogic.com/sites/mock4/#/home", description: "Built with AngularJS, NodeJS, and Foundation 5" },
                        { src: "media/sites/parallax.png", title: "Awesome Parallax", url: "http://www.codeandlogic.com/sites/mock5/#/home", description: "Built with AngularJS & Foundation 5" },
                        { src: "media/sites/fallingup.png", title: "Advanced Parallax", url: "http://www.codeandlogic.com/sites/fallingUp/", description: "Built with Custom Framework" },
                        { src: "media/sites/fancy.png", title: "Alternate Demo", url: "http://www.codeandlogic.com/sites/mock3/", description: "Built with AngularJS, PHP, and Foundation 5" },
                        { src: "media/sites/foundation.png", title: "Foundation Demo", url: "http://www.codeandlogic.com/sites/foundation5Kit/#home", description: "Built with AngularJS, PHP, and Foundation 5" },
                        { src: "media/sites/thellum.png", title: "Store Demo", url: "http://codeandlogic.com/sites/theLuum/", description: "Built with jQuery and Custom Framework." },
                        { src: "media/sites/bootstrap.png", title: "Bootstrap Demo", url: "http://www.codeandlogic.com/sites/bootstrapKit/#home", description: "Built with AngularJS, PHP, and Bootstrap 3" },
                        { src: "media/sites/skeleton.png", title: "Skeleton Demo", url: "http://www.codeandlogic.com/sites/firebaseCMS/", description: "Built with AngularJS, Firebase, and Foundation 5" }
                    ];
                    this.myProjects = [
                        { src: "media/sites/3d.png", title: "Advanced WebGL", url: "http://www.codeandlogic.com/sites/techDemo3/#/game", description: "Built with AngularJS, WebGL, and Foundation 5" },
                        { src: "media/sites/mmxc0.png", title: "Megaman RPG: Chapter 0", url: "http://www.newgrounds.com/portal/view/491405", description: "Built with Flash" },
                        { src: "media/sites/mmxc1.png", title: "Megaman RPG: Chapter 1", url: "http://www.newgrounds.com/portal/view/500298", description: "Built with Flash" },
                        { src: "media/sites/mmba.jpg", title: "Megaman RPG: Battle Arena", url: "http://www.newgrounds.com/portal/view/554991", description: "Built with Flash" },
                        { src: "media/sites/mkit.png", title: "Sliders", url: "http://codeandlogic.com/sites/mKit/", description: "Built with Custom Framework" },
                        { src: "media/sites/minapsys.png", title: "Minapsys", url: "http://www.codeandlogic.com/sites/minapsys/", description: "Built with Custom Framework" },
                    ];
                    this.companymedia = [
                        { src: "media/companyLogos/barrick_logo.png", title: "Barrick Gold", url: "" },
                        { src: "media/companyLogos/staples_logo.png", title: "Staples", url: "https://www.gdg.do/prod1/portal/portal.jsp?c=9616156&p=15403331&g=15403335" },
                        { src: "media/companyLogos/monsanto_logo.png", title: "Monsanto", url: "" },
                        { src: "media/companyLogos/timken_logo.png", title: "Timken", url: "" },
                        { src: "media/companyLogos/ecolab_logo.png", title: "Ecolab", url: "" },
                    ];
                    this.myRepos = [
                        { src: "http://lorempixel.com/400/200/technics/4?a", title: "ng-choppie", url: "https://github.com/allenRoyston/ngCroppie", description: "An Angular module for the awesome Choppie.js." },
                        { src: "http://lorempixel.com/400/200/technics/4?a", title: "ng-img-force", url: "https://github.com/allenRoyston/ngImgForce", description: "Force an image into the dimensions you want." },
                        { src: "http://lorempixel.com/400/200/technics/4?a", title: "ng-parallax", url: "https://github.com/allenRoyston/ng-parallax", description: "Parallax Scrolling module for AngularJS." },
                        { src: "http://lorempixel.com/400/200/technics/4?b", title: "acr-backstretch", url: "https://github.com/allenRoyston/acr-backstretch", description: "Angular directive for Scott Robbinson's Backstretch." },
                        { src: "http://lorempixel.com/400/200/technics/4?c", title: "Angular Crash Course", url: "https://github.com/allenRoyston/angularCrashCourse", description: "Learn the fundamentals of AngualrJS with this easy tutorial." }
                    ];
                }
                pagePortfolio = __decorate([
                    core_1.Component({
                        directives: [
                            common_1.CORE_DIRECTIVES,
                            dropdown_directive_1.uiSemanticDropdown,
                            visibility_directive_1.uiSemanticVisibility,
                            sidebar_directive_1.uiSemanticSidebar,
                            dimmer_directive_1.uiSemanticDimmer,
                            shape_directive_1.uiSemanticShape,
                            modal_directive_1.uiSemanticModal,
                            tab_directive_1.uiSemanticTab,
                            transition_directive_1.uiSemanticTransitionOnload,
                            transition_directive_2.uiSemanticTransitionButton,
                            transition_directive_3.uiSemanticTransitionHover
                        ],
                        templateUrl: './views/portfolio/portfolio.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], pagePortfolio);
                return pagePortfolio;
            }());
            exports_1("pagePortfolio", pagePortfolio);
        }
    }
});
//# sourceMappingURL=page.portfolio.js.map