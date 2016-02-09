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
    var uiSemanticCheckbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            uiSemanticCheckbox = (function () {
                function uiSemanticCheckbox(el) {
                    this.el = el;
                    var i = this;
                    setTimeout(function () {
                        if (i.toggle) {
                            $('.ui.checkbox').checkbox('toggle');
                        }
                    }, 0);
                }
                uiSemanticCheckbox.prototype.onClick = function () {
                };
                uiSemanticCheckbox.prototype.onMouseEnter = function () {
                };
                uiSemanticCheckbox.prototype.onMouseLeave = function () {
                };
                __decorate([
                    core_1.Input('toggle'), 
                    __metadata('design:type', Boolean)
                ], uiSemanticCheckbox.prototype, "toggle", void 0);
                uiSemanticCheckbox = __decorate([
                    core_1.Directive({
                        selector: '[checkbox]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseclick)': 'onMouseLeave()',
                            '(click)': 'onClick()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], uiSemanticCheckbox);
                return uiSemanticCheckbox;
            }());
            exports_1("uiSemanticCheckbox", uiSemanticCheckbox);
        }
    }
});
//# sourceMappingURL=checkbox.directive.js.map