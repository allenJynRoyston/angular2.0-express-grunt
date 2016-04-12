System.register(['angular2/core', 'angular2/common', '../../components/3d/3djs', '../../components/phaser/phaser', '../../directives/semantic-ui-embed/embed.directive', '../../directives/fullscreenBtn/fullscreenBtn'], function(exports_1, context_1) {
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
    var core_1, common_1, _3djs_1, phaser_1, embed_directive_1, fullscreenBtn_1;
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
            },
            function (phaser_1_1) {
                phaser_1 = phaser_1_1;
            },
            function (embed_directive_1_1) {
                embed_directive_1 = embed_directive_1_1;
            },
            function (fullscreenBtn_1_1) {
                fullscreenBtn_1 = fullscreenBtn_1_1;
            }],
        execute: function() {
            gameComponent = (function () {
                function gameComponent() {
                    //--------------
                    this.threeReady = [false, false];
                    this.phaserReady = [false, false];
                    this.isReady = [false, false];
                    this.temp = { phaser: null, three: null };
                    //--------------
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
                        type: null // standard, fullCanvas
                    };
                }
                //--------------
                //--------------
                gameComponent.prototype.checkThreeComplete = function () {
                    var t = this;
                    var count = 0;
                    for (var i = 0; i < this.threeReady.length; ++i) {
                        if (this.threeReady[i]) {
                            count++;
                        }
                    }
                    if (count == this.threeReady.length) {
                        t.isReady[0] = true;
                        t.checkAllReady();
                    }
                };
                //--------------
                //--------------
                gameComponent.prototype.checkPhaserComplete = function () {
                    var t = this;
                    var count = 0;
                    for (var i = 0; i < this.phaserReady.length; ++i) {
                        if (this.phaserReady[i]) {
                            count++;
                        }
                    }
                    if (count == this.phaserReady.length) {
                        t.isReady[1] = true;
                        t.checkAllReady();
                    }
                };
                //--------------
                //--------------
                gameComponent.prototype.checkAllReady = function () {
                    var t = this;
                    var count = 0;
                    for (var i = 0; i < this.isReady.length; ++i) {
                        if (this.isReady[i]) {
                            count++;
                        }
                    }
                    if (count == this.isReady.length) {
                        t.startGame();
                    }
                };
                //--------------
                //---------------
                gameComponent.prototype.ngOnInit = function () {
                    var t = this;
                    // load Threejs
                    var js = document.createElement("script");
                    js.type = "text/javascript";
                    js.src = '/javascripts/objects/threeJS.js';
                    document.body.appendChild(js);
                    js.onload = function () {
                        t.threeReady[0] = true;
                        t.checkThreeComplete();
                    };
                };
                //---------------
                //---------------
                gameComponent.prototype.loadPhaser = function (file) {
                    var t = this;
                    var js = document.createElement("script");
                    js.type = "text/javascript";
                    js.src = file;
                    document.body.appendChild(js);
                    js.onload = function () {
                        t.phaserReady[0] = true;
                        t.checkPhaserComplete();
                    };
                };
                //---------------
                //---------------
                gameComponent.prototype.destroyPhaser = function () {
                    __phaser.canvas.destroy();
                };
                //---------------
                //---------------
                gameComponent.prototype.threeData1 = function (three) {
                    this.temp.three = three;
                    this.threeReady[1] = true;
                    this.checkThreeComplete();
                };
                //---------------
                //---------------
                gameComponent.prototype.phaserData1 = function (phaser) {
                    this.temp.phaser = phaser;
                    this.phaserReady[1] = true;
                    this.checkPhaserComplete();
                };
                //---------------
                //---------------
                gameComponent.prototype.startGame = function () {
                    var t = this;
                    __phaser.assets.canvas = this.temp.phaser.container;
                    __phaser.assets.root = this;
                    __phaser.canvas.init();
                    __threeJS.assets.canvas = this.temp.three.container[0];
                    __threeJS.assets.root = this;
                    __threeJS.canvas.init();
                    setTimeout(function () {
                        t.changeLayout("Split");
                    }, 100);
                };
                //---------------
                //--------------
                gameComponent.prototype.changeLayout = function (type) {
                    var t = this;
                    this.layout.type = type;
                    setTimeout(function () {
                        if (type == 'FullThreeJS') {
                            __threeJS.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center'
                            });
                        }
                        if (type == 'FullPhaser') {
                            __phaser.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center',
                                type: 'full'
                            });
                        }
                        if (type == 'Split') {
                            __threeJS.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center'
                            });
                            __phaser.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center',
                                type: 'full'
                            });
                        }
                        if (type == 'ThreeFit') {
                            __threeJS.canvas.resizeCanvas({
                                heightRatio: .50,
                                align: 'center'
                            });
                            __phaser.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center',
                                type: 'full'
                            });
                        }
                        if (type == 'PhaserFit') {
                            __threeJS.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center'
                            });
                            __phaser.canvas.resizeCanvas({
                                heightRatio: .50,
                                align: 'center',
                                type: 'fit'
                            });
                        }
                    });
                };
                gameComponent = __decorate([
                    core_1.Component({
                        selector: 'game-component',
                        directives: [
                            common_1.CORE_DIRECTIVES,
                            _3djs_1.ThreeComponent,
                            phaser_1.PhaserComponent,
                            embed_directive_1.uiSemanticEmbed,
                            fullscreenBtn_1.fullscreenBtn
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