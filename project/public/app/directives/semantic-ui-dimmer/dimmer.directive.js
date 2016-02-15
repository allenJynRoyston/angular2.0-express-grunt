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
    var uiSemanticDimmer, uiSemanticDimmerButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            uiSemanticDimmer = (function () {
                function uiSemanticDimmer(el) {
                    this.el = el;
                    var i = this;
                    setTimeout(function () {
                        if (i.options == undefined) {
                            i.options = {};
                        }
                        $(el.nativeElement).dimmer(i.options);
                    });
                }
                uiSemanticDimmer.prototype.onMouseEnter = function () {
                };
                uiSemanticDimmer.prototype.onMouseLeave = function () {
                };
                uiSemanticDimmer.prototype.onClick = function () {
                    $(this.el.nativeElement).dimmer('toggle');
                };
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], uiSemanticDimmer.prototype, "options", void 0);
                uiSemanticDimmer = __decorate([
                    core_1.Directive({
                        selector: '[ui-dimmer]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseclick)': 'onMouseLeave()',
                            '(click)': 'onClick()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], uiSemanticDimmer);
                return uiSemanticDimmer;
            }());
            exports_1("uiSemanticDimmer", uiSemanticDimmer);
            uiSemanticDimmerButton = (function () {
                function uiSemanticDimmerButton() {
                }
                uiSemanticDimmerButton.prototype.onClick = function () {
                    var i = this;
                    if (i.options != undefined) {
                        if (i.options.selector != undefined) {
                            $(i.options.selector).dimmer('toggle');
                        }
                    }
                };
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], uiSemanticDimmerButton.prototype, "options", void 0);
                uiSemanticDimmerButton = __decorate([
                    core_1.Directive({
                        selector: '[ui-dimmer-button]',
                        host: {
                            '(click)': 'onClick()'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], uiSemanticDimmerButton);
                return uiSemanticDimmerButton;
            }());
            exports_1("uiSemanticDimmerButton", uiSemanticDimmerButton);
        }
    }
});
//# sourceMappingURL=dimmer.directive.js.map