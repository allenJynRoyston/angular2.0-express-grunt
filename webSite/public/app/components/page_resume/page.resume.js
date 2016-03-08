System.register(['angular2/core', 'angular2/common', '../../directives/semantic-ui-dropdown/dropdown.directive', '../../directives/semantic-ui-visibility/visibility.directive', '../../directives/semantic-ui-sidebar/sidebar.directive', '../../directives/semantic-ui-dimmer/dimmer.directive', '../../directives/semantic-ui-shape/shape.directive', '../../directives/semantic-ui-modal/modal.directive', '../../directives/semantic-ui-transition/transition.directive'], function(exports_1) {
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
    var core_1, common_1, dropdown_directive_1, visibility_directive_1, sidebar_directive_1, dimmer_directive_1, shape_directive_1, modal_directive_1, transition_directive_1, transition_directive_2, transition_directive_3;
    var pageResume;
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
            }],
        execute: function() {
            pageResume = (function () {
                function pageResume() {
                    this.skills = [
                        { src: "media/logos/html_logo.png", title: "HTML5" },
                        { src: "media/logos/js_logo.png", title: "Javascript" },
                        { src: "media/logos/css_logo.png", title: "CSS 3" },
                        //----------------------
                        { src: "media/logos/angular_logo.png", title: "AngularJS", link: "" },
                        { src: "media/logos/angular2_logo.png", title: "AngularJS 2.0 Beta", link: "" },
                        { src: "media/logos/bootstrap_logo.jpg", title: "Bootstrap 2,3", link: "" },
                        { src: "media/logos/foundation_logo.png", title: "Foundation 5,6", link: "" },
                        { src: "media/logos/ionic_logo.png", title: "Ionic", link: "" },
                        { src: "media/logos/jquery_logo.jpg", title: "jQuery", link: "" },
                        { src: "media/logos/semantic_logo.png", title: "Semantic UI", link: "" },
                        { src: "media/logos/nod_logo.png", title: "NodeJS", link: "" },
                        { src: "media/logos/git_logo.png", title: "GIT", link: "" },
                        { src: "media/logos/phaser_logo.png", title: "Phaser", link: "" },
                        { src: "media/logos/lumx_logo.jpg", title: "LumX", link: "" },
                        { src: "media/logos/heroku_logo.jpg", title: "Heroku", link: "" },
                        { src: "media/logos/firebase_logo.png", title: "Firebase", link: "" },
                        { src: "media/logos/mysql_logo.jpg", title: "MySQL", link: "" },
                        { src: "media/logos/express_logo.png", title: "ExpressJS", link: "" },
                        { src: "media/logos/bower_logo.png", title: "Bower", link: "" },
                        { src: "media/logos/npm_logo.png", title: "Node Package Manager", link: "" },
                        { src: "media/logos/grunt_logo.png", title: "Grunt", link: "" },
                        { src: "media/logos/gulp_logo.png", title: "Gulp", link: "" },
                        { src: "media/logos/php_logo.png", title: "PHP", link: "" },
                        { src: "media/logos/mongo_logo.jpg", title: "MongoDB", link: "" },
                        { src: "media/logos/sass_logo.png", title: "SASS", link: "" },
                        { src: "media/logos/less_logo.png", title: "Less", link: "" },
                        { src: "media/logos/jade_logo.jpeg", title: "Jade", link: "" },
                        { src: "media/logos/mean_logo.png", title: "MEAN", link: "" },
                        { src: "media/logos/typescript_logo.png", title: "TypeScript", link: "" },
                    ];
                }
                pageResume = __decorate([
                    core_1.Component({
                        directives: [
                            common_1.CORE_DIRECTIVES,
                            dropdown_directive_1.uiSemanticDropdown,
                            visibility_directive_1.uiSemanticVisibility,
                            sidebar_directive_1.uiSemanticSidebar,
                            dimmer_directive_1.uiSemanticDimmer,
                            shape_directive_1.uiSemanticShape,
                            modal_directive_1.uiSemanticModal,
                            transition_directive_1.uiSemanticTransitionOnload,
                            transition_directive_2.uiSemanticTransitionButton,
                            transition_directive_3.uiSemanticTransitionHover
                        ],
                        templateUrl: './views/resume/resume.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], pageResume);
                return pageResume;
            }());
            exports_1("pageResume", pageResume);
        }
    }
});
//# sourceMappingURL=page.resume.js.map