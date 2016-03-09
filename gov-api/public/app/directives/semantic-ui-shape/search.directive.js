System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var uiSemanticSearch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            uiSemanticSearch = (function () {
                function uiSemanticSearch(el) {
                    this.el = el;
                    var i = this;
                    console.log(i);
                    setTimeout(function () {
                        console.log(i);
                        if (i.options == undefined) {
                            i.options = {};
                        }
                        $(el.nativeElement).search(i.options);
                    });
                }
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], uiSemanticSearch.prototype, "options", void 0);
                uiSemanticSearch = __decorate([
                    core_1.Directive({
                        selector: '[ui-search]',
                        host: {}
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], uiSemanticSearch);
                return uiSemanticSearch;
            }());
            exports_1("uiSemanticSearch", uiSemanticSearch);
        }
    }
});
//# sourceMappingURL=search.directive.js.map