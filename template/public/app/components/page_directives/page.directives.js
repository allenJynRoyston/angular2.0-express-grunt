System.register(['angular2/core', '../../parts/boilerplate.parts', '../../parts/semantic.parts'], function(exports_1) {
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
    var core_1, boilerplate_parts_1, semantic_parts_1;
    var pageDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (boilerplate_parts_1_1) {
                boilerplate_parts_1 = boilerplate_parts_1_1;
            },
            function (semantic_parts_1_1) {
                semantic_parts_1 = semantic_parts_1_1;
            }],
        execute: function() {
            pageDirectives = (function () {
                function pageDirectives() {
                }
                pageDirectives = __decorate([
                    core_1.Component({
                        directives: [
                            // boilerplate
                            boilerplate_parts_1.partsHeader,
                            boilerplate_parts_1.partsSidebar,
                            boilerplate_parts_1.partsFiller,
                            boilerplate_parts_1.partsFooter,
                            // ui-semantic
                            semantic_parts_1.partsDropdown,
                            semantic_parts_1.partsAccordian,
                            semantic_parts_1.partsToggle,
                            semantic_parts_1.partsDimmer,
                            semantic_parts_1.partsEmbed,
                            semantic_parts_1.partsModal,
                            semantic_parts_1.partsPopup,
                            semantic_parts_1.partsProgress,
                            semantic_parts_1.partsRating,
                            semantic_parts_1.partsSearch,
                            semantic_parts_1.partsShapes,
                        ],
                        templateUrl: './views/directives/directives.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], pageDirectives);
                return pageDirectives;
            }());
            exports_1("pageDirectives", pageDirectives);
        }
    }
});
//# sourceMappingURL=page.directives.js.map