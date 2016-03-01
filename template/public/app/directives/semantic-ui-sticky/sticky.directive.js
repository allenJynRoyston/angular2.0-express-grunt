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
    var uiSemanticSticky;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            uiSemanticSticky = (function () {
                function uiSemanticSticky(el) {
                    this.el = el;
                    var i = this;
                    setTimeout(function () {
                        if (i.options == undefined) {
                            i.options = {};
                        }
                        $(el.nativeElement).sticky(i.options);
                    }, 500);
                }
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], uiSemanticSticky.prototype, "options", void 0);
                uiSemanticSticky = __decorate([
                    core_1.Directive({
                        selector: '[ui-sticky]',
                        host: {}
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], uiSemanticSticky);
                return uiSemanticSticky;
            }());
            exports_1("uiSemanticSticky", uiSemanticSticky);
        }
    }
});
//# sourceMappingURL=sticky.directive.js.map