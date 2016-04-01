System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var ToggleButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ToggleButton = (function () {
                function ToggleButton() {
                    this.isOn = false;
                }
                ToggleButton.prototype.toggle = function () {
                    this.isOn = !this.isOn;
                };
                ToggleButton = __decorate([
                    core_1.Component({
                        selector: 'toggle-button',
                        template: "\n     <button  class=\"ui button\"\n              [ngClass]=\"{true: 'red', false: 'green basic'}[isOn]\"\n              (click)=\"toggle(!isOn)\"> {{isOn}}\n     </button>",
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ToggleButton);
                return ToggleButton;
            }());
            exports_1("ToggleButton", ToggleButton);
        }
    }
});
//# sourceMappingURL=ngClassExample.js.map