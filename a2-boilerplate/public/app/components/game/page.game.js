System.register(['angular2/core', 'angular2/common', '../../components/3d/3djs'], function(exports_1, context_1) {
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
    var core_1, common_1, _3djs_1;
    var gameComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_3djs_1_1) {
                _3djs_1 = _3djs_1_1;
            }],
        execute: function() {
            gameComponent = (function () {
                function gameComponent() {
                    //--------------
                    this.layout = {
                        isFullscreen: function () {
                            if ((screen.availHeight || screen.height - 30) <= window.innerHeight) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        },
                        meetsDesktopRequirement: function () {
                            var _results = { offerFS: true, screenSizeGood: false, windowSizeGood: false };
                            var avail = { width: false, height: false };
                            if (screen.availWidth - parseInt($('#game-container').width()) > 0) {
                                avail.width = true;
                            }
                            if (screen.availHeight - parseInt($('#game-container').height()) > 0) {
                                avail.height = true;
                            }
                            if (avail.width && avail.height) {
                                _results.screenSizeGood = true;
                            }
                            var win = { width: false, height: false };
                            if ((window.innerWidth || document.body.clientWidth) - parseInt($('#game-container').width()) > 0) {
                                win.width = true;
                            }
                            if ((window.innerHeight || document.body.clientHeight) - parseInt($('#game-container').height()) > 0) {
                                win.height = true;
                            }
                            if (win.width && win.height) {
                                _results.windowSizeGood = true;
                            }
                            if (_results.screenSizeGood && _results.windowSizeGood) {
                                _results.offerFS = false;
                            }
                            return _results;
                        },
                        meetsWindowRequirement: function () {
                        },
                        type: "standard" // standard, fullCanvas
                    };
                }
                //--------------
                //--------------
                gameComponent.prototype.changeLayout = function (type) {
                    this.layout.type = type;
                };
                gameComponent = __decorate([
                    core_1.Component({
                        selector: 'game-component',
                        directives: [
                            common_1.CORE_DIRECTIVES,
                            _3djs_1.ThreeApp,
                        ],
                        styles: ["\n    #game-container{\n      margin-left: auto;\n      margin-right: auto;\n      width: 1080px;\n      height: 800px;\n      background-color: gray;\n      overflow: hidden;\n    }\n\n    #canvas-container{\n        background-color: black;\n    }\n\n    #myCanvas{\n      padding-left: 0;\n      padding-right: 0;\n      margin-left: auto;\n      margin-right: auto;\n      vertical-align:center;\n      display: block;\n    }\n  "],
                        templateUrl: './app/components/game/template.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], gameComponent);
                return gameComponent;
            }());
            exports_1("gameComponent", gameComponent);
        }
    }
});
//# sourceMappingURL=page.game.js.map