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
    var testComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            testComponent = (function () {
                function testComponent() {
                    this.name = 'Max';
                }
                testComponent.prototype.sayMyName = function () {
                    console.log('My name is', this.name);
                };
                testComponent = __decorate([
                    core_1.Component({
                        selector: 'test-component',
                        template: "\n  <br><br>\n    <div>Hello my name is {{name}}. \n    <button (click)=\"sayMyName()\">Say my name</button></div>\n  <br><br>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], testComponent);
                return testComponent;
            }());
            exports_1("testComponent", testComponent);
        }
    }
});
//# sourceMappingURL=test.js.map