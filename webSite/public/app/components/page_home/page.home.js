System.register(['angular2/core', 'angular2/router', 'angular2/common', '../../directives/semantic-ui-dropdown/dropdown.directive', '../../directives/semantic-ui-visibility/visibility.directive', '../../directives/semantic-ui-sidebar/sidebar.directive', '../../directives/semantic-ui-dimmer/dimmer.directive', '../../directives/semantic-ui-shape/shape.directive', '../../directives/semantic-ui-modal/modal.directive'], function(exports_1) {
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
    var core_1, router_1, common_1, dropdown_directive_1, visibility_directive_1, sidebar_directive_1, dimmer_directive_1, shape_directive_1, modal_directive_1;
    var pageHome;
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
            }],
        execute: function() {
            pageHome = (function () {
                function pageHome(_router) {
                    this._router = _router;
                    this.commentsAboutMe = [
                        { quote: '... who?', from: 'Tim Cook', company: 'Apple', image: 'media/images/steve.jpg' },
                        { quote: 'Never heard of him.', from: 'Bill Gates', company: 'Microsoft', image: 'media/images/billGates.jpg' },
                        { quote: 'Yeah, no idea who that is.', from: 'Sundar Pichai', company: 'Google', image: 'media/images/google.png' },
                        { quote: 'Who is that?', from: 'Susan Wojcicki', company: "YouTube", image: 'media/images/youtube.png' },
                        { quote: 'You\'re growing into a real big thorn straight up into my ass.', from: 'Rick', company: "Science!", image: 'media/images/rick.jpg' }
                    ];
                    this.page = {
                        imageModal: {
                            image: 'media/images/self.jpg',
                            description: "True story: I didn't actually say that."
                        }
                    };
                    this.content = [
                        { title: "Responsive Design", image: "media/images/responsive.png", text: "Smart, responsive designs." },
                        { title: "Webapp Specialist", image: "media/images/webapp.png", text: "The future of web development." },
                        { title: "Mobile First", image: "media/images/mobilefirst.png", text: "Because we live in a mobile world." },
                        { title: "Fullstack Developer", image: "media/images/fullstack.png", text: "I can do it all." }
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
                pageHome.prototype.linkTo = function (link) {
                    $(window).scrollTop(0);
                    this._router.navigate(link);
                };
                pageHome = __decorate([
                    core_1.Component({
                        directives: [
                            common_1.CORE_DIRECTIVES,
                            dropdown_directive_1.uiSemanticDropdown,
                            visibility_directive_1.uiSemanticVisibility,
                            sidebar_directive_1.uiSemanticSidebar,
                            dimmer_directive_1.uiSemanticDimmer,
                            shape_directive_1.uiSemanticShape,
                            modal_directive_1.uiSemanticModal
                        ],
                        styles: ["\n    .joke-container{\n      width: 700px;\n      height: 450px;\n    }\n  "],
                        templateUrl: './views/home/home.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], pageHome);
                return pageHome;
            }());
            exports_1("pageHome", pageHome);
        }
    }
});
//# sourceMappingURL=page.home.js.map