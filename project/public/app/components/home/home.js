System.register(['angular2/core', './../../directives/highlight/highlight.directive', './../../directives/semantic-ui-accordian/accordian.directive', './../../directives/semantic-ui-checkbox/checkbox.directive', './../../directives/semantic-ui-dimmer/dimmer.directive', './../../directives/semantic-ui-dropdown/dropdown.directive', './../../directives/semantic-ui-embed/embed.directive', './../../directives/semantic-ui-modal/modal.directive', './../../directives/semantic-ui-popup/popup.directive', './../../directives/semantic-ui-progress/progress.directive', './../../directives/semantic-ui-rating/rating.directive', './../../directives/semantic-ui-search/search.directive', './../../directives/semantic-ui-shape/shape.directive', './../../directives/semantic-ui-sidebar/sidebar.directive'], function(exports_1) {
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
    var core_1, highlight_directive_1, accordian_directive_1, checkbox_directive_1, dimmer_directive_1, dimmer_directive_2, dropdown_directive_1, embed_directive_1, modal_directive_1, popup_directive_1, progress_directive_1, progress_directive_2, rating_directive_1, search_directive_1, shape_directive_1, sidebar_directive_1;
    var homeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                dimmer_directive_2 = dimmer_directive_1_1;
            },
            function (dropdown_directive_1_1) {
                dropdown_directive_1 = dropdown_directive_1_1;
            },
            function (embed_directive_1_1) {
                embed_directive_1 = embed_directive_1_1;
            },
            function (modal_directive_1_1) {
                modal_directive_1 = modal_directive_1_1;
            },
            function (popup_directive_1_1) {
                popup_directive_1 = popup_directive_1_1;
            },
            function (progress_directive_1_1) {
                progress_directive_1 = progress_directive_1_1;
                progress_directive_2 = progress_directive_1_1;
            },
            function (rating_directive_1_1) {
                rating_directive_1 = rating_directive_1_1;
            },
            function (search_directive_1_1) {
                search_directive_1 = search_directive_1_1;
            },
            function (shape_directive_1_1) {
                shape_directive_1 = shape_directive_1_1;
            },
            function (sidebar_directive_1_1) {
                sidebar_directive_1 = sidebar_directive_1_1;
            }],
        execute: function() {
            homeComponent = (function () {
                function homeComponent() {
                    this.mockContent = new Array;
                    this.mockContent = [
                        { title: 'Andorra', id: 0 },
                        { title: 'United Arab Emirates', id: 1 },
                        { title: 'Afghanistan', id: 2 },
                        { title: 'Antigua', id: 3 },
                        { title: 'Anguilla', id: 4 },
                        { title: 'Albania', id: 5 },
                        { title: 'Armenia', id: 6 },
                        { title: 'Netherlands Antilles', id: 7 },
                        { title: 'Angola', id: 8 },
                        { title: 'Argentina', id: 9 },
                        { title: 'American Samoa', id: 10 },
                        { title: 'Austria', id: 11 },
                        { title: 'Australia', id: 12 },
                        { title: 'Aruba', id: 13 },
                        { title: 'Aland Islands', id: 14 },
                        { title: 'Azerbaijan', id: 15 },
                        { title: 'Bosnia', id: 16 },
                        { title: 'Barbados', id: 17 },
                        { title: 'Bangladesh', id: 18 },
                        { title: 'Belgium', id: 19 },
                        { title: 'Burkina Faso', id: 20 },
                        { title: 'Bulgaria', id: 21 },
                        { title: 'Bahrain', id: 22 },
                        { title: 'Burundi', id: 23 }
                    ];
                }
                homeComponent = __decorate([
                    core_1.Component({
                        directives: [
                            highlight_directive_1.HighlightDirective,
                            accordian_directive_1.uiSemanticAccordian,
                            checkbox_directive_1.uiSemanticCheckbox,
                            dimmer_directive_1.uiSemanticDimmer,
                            dimmer_directive_2.uiSemanticDimmerButton,
                            dropdown_directive_1.uiSemanticDropdown,
                            embed_directive_1.uiSemanticEmbed,
                            modal_directive_1.uiSemanticModal,
                            popup_directive_1.uiSemanticPopup,
                            progress_directive_1.uiSemanticProgress,
                            progress_directive_2.uiSemanticProgressButton,
                            rating_directive_1.uiSemanticRating,
                            search_directive_1.uiSemanticSearch,
                            shape_directive_1.uiSemanticShape,
                            sidebar_directive_1.uiSemanticSidebar
                        ],
                        templateUrl: './views/home/home.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], homeComponent);
                return homeComponent;
            }());
            exports_1("homeComponent", homeComponent);
        }
    }
});
//# sourceMappingURL=home.js.map