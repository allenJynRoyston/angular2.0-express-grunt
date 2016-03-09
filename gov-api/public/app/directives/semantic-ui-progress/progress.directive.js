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
    var uiSemanticProgress, uiSemanticProgressButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            uiSemanticProgress = (function () {
                function uiSemanticProgress(el) {
                    this.el = el;
                    var i = this;
                    setTimeout(function () {
                        if (i.options == undefined) {
                            i.options = {};
                        }
                        $(el.nativeElement).progress(i.options);
                    });
                }
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], uiSemanticProgress.prototype, "options", void 0);
                uiSemanticProgress = __decorate([
                    core_1.Directive({
                        selector: '[ui-progress]',
                        host: {}
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], uiSemanticProgress);
                return uiSemanticProgress;
            }());
            exports_1("uiSemanticProgress", uiSemanticProgress);
            uiSemanticProgressButton = (function () {
                function uiSemanticProgressButton(el) {
                    this.el = el;
                }
                uiSemanticProgressButton.prototype.onClick = function () {
                    var i = this;
                    if (i.options == undefined) {
                        i.options = { selector: '.progress', type: 'increment' };
                    }
                    $(i.options.selector).progress(i.options.type);
                };
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], uiSemanticProgressButton.prototype, "options", void 0);
                uiSemanticProgressButton = __decorate([
                    core_1.Directive({
                        selector: '[ui-progress-button]',
                        host: {
                            '(click)': 'onClick()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], uiSemanticProgressButton);
                return uiSemanticProgressButton;
            }());
            exports_1("uiSemanticProgressButton", uiSemanticProgressButton);
        }
    }
});
//# sourceMappingURL=progress.directive.js.map