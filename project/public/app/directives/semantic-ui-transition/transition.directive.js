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
    var uiSemanticTransitionOnload, uiSemanticTransitionButton, uiSemanticTransitionHover;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            uiSemanticTransitionOnload = (function () {
                function uiSemanticTransitionOnload(el) {
                    this.el = el;
                    var i = this;
                    setTimeout(function () {
                        if (i.options == undefined) {
                            i.options = { animation: 'fade' };
                        }
                        if (i.options.loop) {
                            $(el.nativeElement)
                                .transition('set looping');
                        }
                        $(el.nativeElement).transition(i.options);
                    });
                }
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], uiSemanticTransitionOnload.prototype, "options", void 0);
                uiSemanticTransitionOnload = __decorate([
                    core_1.Directive({
                        selector: '[ui-transition-onload]',
                        host: {}
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], uiSemanticTransitionOnload);
                return uiSemanticTransitionOnload;
            }());
            exports_1("uiSemanticTransitionOnload", uiSemanticTransitionOnload);
            uiSemanticTransitionButton = (function () {
                function uiSemanticTransitionButton() {
                }
                uiSemanticTransitionButton.prototype.onClick = function () {
                    var i = this;
                    if (i.options == undefined) {
                        i.options = {};
                    }
                    $(i.options.selector)
                        .transition(i.options);
                    if (i.options.loop) {
                        $(i.options.selector)
                            .transition('set looping');
                    }
                    else {
                        $(i.options.selector)
                            .transition('remove looping');
                    }
                };
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], uiSemanticTransitionButton.prototype, "options", void 0);
                uiSemanticTransitionButton = __decorate([
                    core_1.Directive({
                        selector: '[ui-transition-button]',
                        host: {
                            '(click)': 'onClick()'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], uiSemanticTransitionButton);
                return uiSemanticTransitionButton;
            }());
            exports_1("uiSemanticTransitionButton", uiSemanticTransitionButton);
            uiSemanticTransitionHover = (function () {
                function uiSemanticTransitionHover(el) {
                    this.el = el;
                    this.self = el.nativeElement;
                }
                uiSemanticTransitionHover.prototype.onMouseEnter = function () {
                    var i = this;
                    if (i.options == undefined) {
                        i.options = {};
                    }
                    $(i.self)
                        .transition(i.options);
                    if (i.options.loop) {
                        $(i.self)
                            .transition('set looping');
                    }
                    else {
                        $(i.self)
                            .transition('remove looping');
                    }
                };
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], uiSemanticTransitionHover.prototype, "options", void 0);
                uiSemanticTransitionHover = __decorate([
                    core_1.Directive({
                        selector: '[ui-transition-hover]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], uiSemanticTransitionHover);
                return uiSemanticTransitionHover;
            }());
            exports_1("uiSemanticTransitionHover", uiSemanticTransitionHover);
        }
    }
});
//# sourceMappingURL=transition.directive.js.map