System.register(['angular2/core', 'angular2/common', '../../components/3d/3djs', '../../components/phaser/phaser', '../../directives/fullscreenBtn/fullscreenBtn'], function(exports_1, context_1) {
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
    var core_1, common_1, _3djs_1, phaser_1, fullscreenBtn_1;
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
                        type: "Split" // standard, fullCanvas
                    };
                    //---------------
                    //--------------
                    this.phaser = {
                        canvas: {
                            resizeCanvas: function (options) {
                                var root = this.parent;
                                var self = this.parent.threeJS;
                                /*
                                var settings = options || {
                                  heightRatio: 1,
                                  widthRatio: 1,
                                  align: 'center'
                                }
                      
                                // set resolution of canvas
                                var	aspectX = $( $(assets.canvas).parent().parent()[0] ).width(),   //* (settings.widthRatio),
                                    aspectY = $( $(assets.canvas).parent().parent()[0] ).height()  * (settings.heightRatio);
                      
                                if(self.assets.camera != null){
                                  self.assets.camera.aspect = aspectX / aspectY;
                                  self.assets.camera.updateProjectionMatrix();
                                  self.assets.renderer.setSize( aspectX, aspectY );
                      
                                  if(settings.align == 'center'){
                                      var m = Math.abs((aspectY - parseInt($(assets.canvas).parent().parent().height()))/2)+ "px";
                                      $(assets.canvas).css('margin-top', m )
                                  }
                      
                                  if(settings.align == 'top'){
                                      $(assets.canvas).css('margin-top', '0px' )
                                  }
                      
                                  if(settings.align == 'bottom'){
                                      var m = Math.abs((parseInt($(assets.canvas).parent().parent().height()))) - parseInt($(assets.canvas).height())+ "px";
                                      $(assets.canvas).css('margin-top', m )
                                  }
                                  */
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
                            t.threeJS.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center'
                            });
                        }
                        if (type == 'Split') {
                            t.threeJS.canvas.resizeCanvas({
                                heightRatio: 1,
                                align: 'center'
                            });
                        }
                    });
                };
                //--------------
                //---------------
                gameComponent.prototype.threeData1 = function (three) {
                    this.threeJS.canvas.init(three);
                    this.changeLayout("FullPhaser");
                };
                //---------------
                //---------------
                gameComponent.prototype.phaserData1 = function (phaser) {
                    var game = new Phaser.Game(1080, 800, Phaser.AUTO, phaser.container, { preload: preload, create: create, update: update });
                    var stars;
                    var waveformX;
                    var waveformY;
                    var xl;
                    var yl;
                    var cx = 0;
                    var cy = 0;
                    function preload() {
                        game.load.image('pic', 'media/images/10.gif');
                    }
                    function create() {
                        game.stage.backgroundColor = '#0055ff';
                        //  Generate our motion data
                        var sprite = { x: 256, y: 0 };
                        var tween = game.add.tween(sprite).to({ x: 0 }, 3000, "Cubic.easeInOut", true, 0, -1, true);
                        var tween2 = game.add.tween(sprite).to({ y: 200 }, 2000, "Bounce.easeInOut", true, 0, -1, true);
                        waveformX = tween.generateData(60);
                        waveformY = tween2.generateData(60);
                        xl = waveformX.length - 1;
                        yl = waveformY.length - 1;
                        var sprites = game.add.spriteBatch();
                        stars = [];
                        var picWidth = game.cache.getImage('pic').width;
                        var picHeight = game.cache.getImage('pic').height;
                        //  Divide it into 16x10 chunks
                        var xs = 32;
                        var ys = 16;
                        for (var y = 0; y < Math.floor(picHeight / ys); y++) {
                            for (var x = 0; x < Math.floor(picWidth / xs); x++) {
                                var star = game.make.sprite(150 + (x * xs), 50 + (y * ys), 'pic');
                                star.crop(new Phaser.Rectangle(x * xs, y * ys, xs * 1.5, ys * 1.6));
                                star.ox = star.x;
                                star.oy = star.y;
                                star.cx = x;
                                star.cy = y;
                                star.anchor.set(0.5);
                                sprites.addChild(star);
                                stars.push(star);
                            }
                        }
                    }
                    function update() {
                        for (var i = 0, len = stars.length; i < len; i++) {
                            stars[i].x = stars[i].ox + waveformX[stars[i].cx].x;
                            stars[i].y = stars[i].oy + waveformY[stars[i].cy].y;
                            stars[i].cx++;
                            if (stars[i].cx > xl) {
                                stars[i].cx = 0;
                            }
                            stars[i].cy++;
                            if (stars[i].cy > yl) {
                                stars[i].cy = 0;
                            }
                        }
                    }
                };
                gameComponent = __decorate([
                    core_1.Component({
                        selector: 'game-component',
                        directives: [
                            common_1.CORE_DIRECTIVES,
                            _3djs_1.ThreeComponent,
                            phaser_1.PhaserComponent,
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