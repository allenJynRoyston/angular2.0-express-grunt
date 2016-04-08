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
                    //---------------
                    //--------------
                    this.phaser = {
                        //------------------- declare assets
                        assets: {
                            canvas: null,
                            gameObj: null,
                            camera: null,
                            renderer: null,
                            planes: []
                        },
                        //-------------------
                        //-------------------
                        canvas: {
                            parent: this,
                            //-------------------
                            init: function (d) {
                                var t = this, root = this.parent, self = this.parent.phaser, assets = this.parent.phaser.assets;
                                assets.canvas = d.container;
                                assets.gameObj = new Phaser.Game(1080, 800, Phaser.WEBGL, d.container, { preload: preload, create: create, update: update });
                                var stars;
                                var waveformX;
                                var waveformY;
                                var xl;
                                var yl;
                                var cx = 0;
                                var cy = 0;
                                function preload() {
                                    assets.gameObj.load.image('pic', 'media/images/mobilefirst.png');
                                }
                                function create() {
                                    assets.gameObj.stage.backgroundColor = '#0055ff';
                                    var pic = assets.gameObj.add.sprite(assets.gameObj.world.centerX, assets.gameObj.world.centerY, 'pic');
                                    pic.anchor.setTo(0.5, 0.5);
                                }
                                function update() {
                                }
                            },
                            resizeCanvas: function (options) {
                                var assets = this.parent.phaser.assets;
                                var assets = this.parent.phaser.assets;
                                var settings = options || {
                                    heightRatio: 1,
                                    widthRatio: 1,
                                    align: 'center',
                                    type: 'full'
                                };
                                // set resolution of canvas
                                var aspectX = $($(assets.canvas).parent()[0]).width(), //* (settings.widthRatio),
                                aspectY = $($(assets.canvas).parent()[0]).height() * (settings.heightRatio);
                                // resolution
                                if (settings.type == "fit") {
                                    $(assets.canvas).find('canvas').css('width', aspectX);
                                    $(assets.canvas).find('canvas').css('height', aspectY);
                                    assets.gameObj.width = aspectX;
                                    assets.gameObj.height = aspectY;
                                }
                                if (settings.type == "full") {
                                    $(assets.canvas).find('canvas').css('width', $($(assets.canvas).parent().parent()[0]).width());
                                    $(assets.canvas).find('canvas').css('height', $($(assets.canvas).parent().parent()[0]).height());
                                    assets.gameObj.width = $($(assets.canvas).parent().parent()[0]).width();
                                    assets.gameObj.height = $($(assets.canvas).parent().parent()[0]).height();
                                }
                                // alignment
                                if (settings.align == 'center') {
                                    var m = Math.abs((aspectY - parseInt($(assets.canvas).parent().parent().height())) / 2) + "px";
                                    $(assets.canvas).parent().css('margin-top', m);
                                    $(assets.canvas).parent().css('border', '2px solid green');
                                }
                                if (settings.align == 'top') {
                                    $(assets.canvas).parent().css('margin-top', '0px');
                                }
                                if (settings.align == 'bottom') {
                                    var m = Math.abs((parseInt($(assets.canvas).parent().parent().height()))) - parseInt($(assets.canvas).height()) + "px";
                                    $(assets.canvas).parent().css('margin-top', m);
                                }
                            }
                        }
                    };
                    //--------------
                    //--------------
                    this.threeJS = {
                        //------------------- declare assets
                        assets: {
                            scene: null,
                            camera: null,
                            canvas: null,
                            renderer: null,
                            planes: []
                        },
                        //-------------------
                        //------------------- canvas functions
                        canvas: {
                            parent: this,
                            //-------------------
                            init: function (d) {
                                var t = this, root = this.parent, self = this.parent.threeJS, assets = this.parent.threeJS.assets;
                                // INITIALIZE SCENE
                                assets.scene = new THREE.Scene();
                                assets.canvas = d.container[0];
                                assets.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);
                                assets.renderer = new THREE.WebGLRenderer({ canvas: assets.canvas });
                                // WATCH FOR RESIZING
                                $(window).bind('resize', function (e) {
                                    // do something on resize
                                });
                                // INITIALIZE THREEJS LAYOUT
                                this.changeResolution(1);
                                //root.changeLayout('standard')
                                // BEGIN RENDER LOOP
                                this.renderLoop();
                            },
                            //-------------------
                            //-------------------
                            resizeCanvas: function (options) {
                                var root = this.parent;
                                var self = this.parent.threeJS;
                                var assets = this.parent.threeJS.assets;
                                var settings = options || {
                                    heightRatio: 1,
                                    widthRatio: 1,
                                    align: 'center'
                                };
                                // set resolution of canvas
                                var aspectX = $($(assets.canvas).parent().parent()[0]).width(), //* (settings.widthRatio),
                                aspectY = $($(assets.canvas).parent().parent()[0]).height() * (settings.heightRatio);
                                if (self.assets.camera != null) {
                                    self.assets.camera.aspect = aspectX / aspectY;
                                    self.assets.camera.updateProjectionMatrix();
                                    self.assets.renderer.setSize(aspectX, aspectY);
                                    if (settings.align == 'center') {
                                        var m = Math.abs((aspectY - parseInt($(assets.canvas).parent().parent().height())) / 2) + "px";
                                        $(assets.canvas).css('margin-top', m);
                                    }
                                    if (settings.align == 'top') {
                                        $(assets.canvas).css('margin-top', '0px');
                                    }
                                    if (settings.align == 'bottom') {
                                        var m = Math.abs((parseInt($(assets.canvas).parent().parent().height()))) - parseInt($(assets.canvas).height()) + "px";
                                        $(assets.canvas).css('margin-top', m);
                                    }
                                }
                            },
                            //-------------------
                            //-------------------
                            changeResolution: function (factorOf) {
                                var root = this.parent;
                                var self = this.parent.threeJS;
                                self.assets.renderer.setPixelRatio(factorOf);
                            },
                            //-------------------
                            //-------------------
                            renderLoop: function () {
                                var root = this.parent, self = this.parent.threeJS, assets = this.parent.threeJS.assets;
                                var texture = THREE.ImageUtils.loadTexture("/media/images/10.gif");
                                var material = new THREE.MeshLambertMaterial({ map: texture, side: THREE.DoubleSide });
                                var geometry = new THREE.PlaneGeometry(800, 800);
                                //var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
                                var plane = new THREE.Mesh(geometry, material);
                                assets.scene.add(plane);
                                var light = new THREE.PointLight(0xffffff, 2, 100);
                                light.position.set(50, 50, 50);
                                assets.scene.add(light);
                                var light = new THREE.AmbientLight(0xffffff); // soft white light
                                assets.scene.add(light);
                                assets.camera.position.x = 0;
                                assets.camera.position.y = 0;
                                assets.camera.position.z = 1000;
                                var render = function () {
                                    requestAnimationFrame(render);
                                    plane.rotation.x += 0.005;
                                    plane.rotation.y += 0.005;
                                    assets.renderer.render(assets.scene, assets.camera);
                                };
                                render();
                            },
                            //-------------------
                            //-------------------
                            build: function () {
                            }
                        },
                        //-------------------
                        //------------------- input/output functions
                        io: {
                            //-------------------
                            camera: function () {
                            }
                        }
                    };
                }
                //--------------
                //---------------
                gameComponent.prototype.ngOnInit = function () {
                    // load Threejs
                    var js = document.createElement("script");
                    js.type = "text/javascript";
                    js.src = '/javascripts/objects/threeJS.js';
                    document.body.appendChild(js);
                    js.onload = function () {
                        console.log(__threeJS);
                    };
                };
                //---------------
                //--------------
                gameComponent.prototype.changeLayout = function (type) {
                    var t = this;
                    this.layout.type = type;
                    setTimeout(function () {
                        if (type == 'FullThreeJS') {
                            t.threeJS.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center'
                            });
                        }
                        if (type == 'FullPhaser') {
                            t.phaser.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center',
                                type: 'full'
                            });
                        }
                        if (type == 'Split') {
                            t.threeJS.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center'
                            });
                            t.phaser.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center',
                                type: 'full'
                            });
                        }
                        if (type == 'ThreeFit') {
                            t.threeJS.canvas.resizeCanvas({
                                heightRatio: .50,
                                align: 'center'
                            });
                            t.phaser.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center',
                                type: 'full'
                            });
                        }
                        if (type == 'PhaserFit') {
                            t.threeJS.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center'
                            });
                            t.phaser.canvas.resizeCanvas({
                                heightRatio: .50,
                                align: 'center',
                                type: 'fit'
                            });
                        }
                    });
                };
                //--------------
                //---------------
                gameComponent.prototype.threeData1 = function (three) {
                    this.threeJS.canvas.init(three);
                    this.changeLayout("Split");
                };
                //---------------
                //---------------
                gameComponent.prototype.phaserData1 = function (phaser) {
                    this.phaser.canvas.init(phaser);
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