System.register(['angular2/core', 'angular2/router', 'angular2/common', '../../directives/semantic-ui-dropdown/dropdown.directive', '../../directives/semantic-ui-visibility/visibility.directive', '../../directives/semantic-ui-sidebar/sidebar.directive', '../../directives/semantic-ui-dimmer/dimmer.directive', '../../directives/semantic-ui-shape/shape.directive', '../../directives/semantic-ui-modal/modal.directive', '../../components/parts/boilerplate.parts'], function(exports_1) {
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
    var core_1, router_1, common_1, dropdown_directive_1, visibility_directive_1, sidebar_directive_1, dimmer_directive_1, shape_directive_1, modal_directive_1, boilerplate_parts_1;
    var homePage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (boilerplate_parts_1_1) {
                boilerplate_parts_1 = boilerplate_parts_1_1;
            }],
        execute: function() {
            homePage = (function () {
                function homePage(_router) {
                    this._router = _router;
                    this.commentsAboutMe = [
                        { quote: 'I am a quote.', from: 'Person A', company: 'Company A', image: 'media/images/rachel.png' },
                        { quote: 'I am a quote.', from: 'Person B', company: "Company B", image: 'media/images/rachel.png' },
                        { quote: 'I am a quote.', from: 'Person C', company: "Company B", image: 'media/images/rachel.png' }
                    ];
                    this.page = {
                        imageModal: {
                            image: 'media/images/ray.png',
                            description: "True story: I didn't actually say that."
                        }
                    };
                    this.content = [
                        { title: "Image 1", image: "media/images/responsive.png", text: "Content 1" },
                        { title: "Image 2", image: "media/images/webapp.png", text: "Content 2" },
                        { title: "Image 3", image: "media/images/mobilefirst.png", text: "Content 3" },
                        { title: "Image 4", image: "media/images/fullstack.png", text: "Content 4" }
                    ];
                    this.jokes = [
                        { image: "media/images/proself.png", setup: "Why did the web developer leave the restaurant?", punchline: "Because of the table layout." },
                        { image: "media/images/proself.png", setup: "Why did the programmer quit his job?", punchline: "Because he didn't get arrays." },
                        { image: "media/images/proself.png", setup: "How do you comfort a Javascript bug?", punchline: "You console it." },
                        { image: "media/images/proself.png", setup: "You want to hear a Javascript joke?", punchline: "I'll callback later." },
                        { image: "media/images/proself.png", setup: "Why was the JavaScript developer sad?", punchline: "Because he didn't Node how to Express himself." },
                        { image: "media/images/proself.png", setup: "Why did the developer go broke?", punchline: "Because he used up all his cache." },
                        { image: "media/images/proself.png", setup: "Why did the jQuery developer never have financial problems?", punchline: "Because he was in $.noConflict() mode." },
                        { image: "media/images/proself.png", setup: "Why do Javascript programmers have to wear glasses?", punchline: "Because they don't C#." },
                        { image: "media/images/proself.png", setup: "What's the object-orientated way to become wealthy?", punchline: "Inheritance." },
                        { image: "media/images/proself.png", setup: "What do you call a programmer from Finland?", punchline: "Nerdic." },
                        { image: "media/images/proself.png", setup: "What's a programmer's favorite hangout place?", punchline: "Foo Bar." },
                    ];
                }
                homePage.prototype.linkTo = function (link) {
                    $(window).scrollTop(0);
                    this._router.navigate(link);
                };
                homePage = __decorate([
                    core_1.Component({
                        directives: [
                            common_1.CORE_DIRECTIVES,
                            dropdown_directive_1.uiSemanticDropdown,
                            visibility_directive_1.uiSemanticVisibility,
                            sidebar_directive_1.uiSemanticSidebar,
                            dimmer_directive_1.uiSemanticDimmer,
                            shape_directive_1.uiSemanticShape,
                            modal_directive_1.uiSemanticModal,
                            boilerplate_parts_1.partsFiller,
                            boilerplate_parts_1.loremIpsum
                        ],
                        styles: ["\n    .shape-container{\n      width: 700px;\n      height: 350px;\n    }\n  "],
                        templateUrl: './app/components/home/home.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], homePage);
                return homePage;
            }());
            exports_1("homePage", homePage);
        }
    }
});
//# sourceMappingURL=page.home.js.map