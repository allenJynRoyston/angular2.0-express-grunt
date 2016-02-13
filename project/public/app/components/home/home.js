System.register(['angular2/core', './../../directives/highlight/highlight.directive', './../../directives/semantic-ui-accordian/accordian.directive', './../../directives/semantic-ui-checkbox/checkbox.directive', './../../directives/semantic-ui-dimmer/dimmer.directive'], function(exports_1) {
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
    var core_1, highlight_directive_1, accordian_directive_1, checkbox_directive_1, dimmer_directive_1;
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
            }],
        execute: function() {
            homeComponent = (function () {
                function homeComponent() {
                }
                homeComponent = __decorate([
                    core_1.Component({
                        directives: [highlight_directive_1.HighlightDirective, accordian_directive_1.uiSemanticAccordian, checkbox_directive_1.uiSemanticCheckbox, dimmer_directive_1.uiSemanticDimmer],
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