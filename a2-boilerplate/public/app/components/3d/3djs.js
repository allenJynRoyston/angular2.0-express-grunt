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
    var ThreeApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            //------------------------------------
            ThreeApp = (function () {
                //--------------
                function ThreeApp(el) {
                    this.el = el;
                    //--------------
                    this.globals = _root.globals;
                    // send data to a listener
                    //this.toParent.emit({message: "Sent from child!"})
                    this.toParent = new core_1.EventEmitter();
                    this._fromParent = { old: null, new: null, execute: null };
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
                            init: function () {
                                var t = this, root = this.parent, self = this.parent.threeJS, assets = this.parent.threeJS.assets;
                                // INITIALIZE SCENE
                                assets.scene = new THREE.Scene();
                                assets.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);
                                assets.canvas = $(root.selfRef).find('canvas')[0];
                                assets.renderer = new THREE.WebGLRenderer({ canvas: assets.canvas });
                                // WATCH FOR RESIZING
                                $(window).bind('resize', function (e) {
                                    // do something on resize
                                });
                                // SETUP FULLSCREEN BUTTON
                                $('.fullscreen-btn').bind('click', function () {
                                    var el = $('#game-container')[0], rfs = el.requestFullScreen ||
                                        el.webkitRequestFullScreen ||
                                        el.mozRequestFullScreen;
                                    ;
                                    rfs.call(el);
                                });
                                // INITIALIZE THREEJS LAYOUT
                                this.changeResolution(1);
                                root.changeLayout('standard');
                                // BEGIN RENDER LOOP
                                this.renderLoop();
                            },
                            //-------------------
                            //-------------------
                            resizeCanvas: function (options) {
                                var root = this.parent;
                                var self = this.parent.threeJS;
                                // DESKTOP RATIO
                                var scaleRatio = 1;
                                // MOBILE RATIO
                                //if(root.globals.isMobile == "true"){
                                //scaleRatio = 1.5
                                //}
                                var settings = options || {
                                    heightRatio: 1,
                                    widthRatio: 1,
                                    align: 'center'
                                };
                                // set resolution of canvas
                                var aspectX = $($(root.selfRef).parent()[0]).width(), //* (settings.widthRatio),
                                aspectY = $($(root.selfRef).parent()[0]).height() * (settings.heightRatio);
                                if (self.assets.camera != null) {
                                    self.assets.camera.aspect = aspectX / aspectY;
                                    self.assets.camera.updateProjectionMatrix();
                                    self.assets.renderer.setSize(aspectX, aspectY);
                                    if (settings.align == 'center') {
                                        var centerTop = Math.abs((aspectY - parseInt($(root.selfRef).parent().height())) / 2) + "px";
                                        $(root.selfRef).find('canvas').css('margin-top', centerTop);
                                    }
                                    if (settings.align == 'top') {
                                        $(root.selfRef).find('canvas').css('top', '0px');
                                    }
                                    if (settings.align == 'bottom') {
                                        $(root.selfRef).find('canvas').css('bottom', '0px');
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
                                /* temporary add objects here */
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
                                    //plane.rotation.x += 0.005;
                                    plane.rotation.y += 0.002;
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
                    this.selfRef = el.nativeElement;
                }
                //--------------
                //--------------
                ThreeApp.prototype.ngOnInit = function () {
                    var t = this;
                    // load Threejs
                    if ($('[src="node_modules/three/three.min.js"]').length == 0) {
                        var js = document.createElement("script");
                        js.type = "text/javascript";
                        js.src = "node_modules/three/three.min.js";
                        document.body.appendChild(js);
                        js.onload = function () {
                            t.threeJS.canvas.init();
                        };
                    }
                    else {
                        setTimeout(function () {
                            t.threeJS.canvas.init();
                        }, 100);
                    }
                    // create observable - watches for change
                    t._fromParent.execute = function (d) {
                        this.new = JSON.stringify(d);
                        if (this.old !== this.new) {
                            t.executeInstructions(d);
                            this.old = this.new;
                        }
                    };
                    // set timeout and run to initalize
                    setInterval(function () {
                        t._fromParent.execute(t.fromParent);
                    }, 100);
                    t._fromParent.execute(t.fromParent);
                };
                //--------------
                //--------------
                ThreeApp.prototype.executeInstructions = function (data) {
                    this.changeLayout(data.type);
                };
                //--------------
                //--------------
                ThreeApp.prototype.changeLayout = function (type) {
                    if (type == 'standard') {
                        this.threeJS.canvas.resizeCanvas({
                            heightRatio: .25,
                            align: 'center'
                        });
                    }
                    if (type == 'standardFull') {
                        this.threeJS.canvas.resizeCanvas({
                            heightRatio: 1,
                            align: 'center'
                        });
                    }
                    if (type == 'fullCanvas') {
                        this.threeJS.canvas.resizeCanvas({
                            heightRatio: 1,
                            align: 'center'
                        });
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ThreeApp.prototype, "toParent", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ThreeApp.prototype, "fromParent", void 0);
                ThreeApp = __decorate([
                    core_1.Component({
                        selector: 'three-js',
                        inputs: ['toChild'],
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "\n    <canvas></canvas>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ThreeApp);
                return ThreeApp;
            }());
            exports_1("ThreeApp", ThreeApp);
        }
    }
});
//------------------------------------
//# sourceMappingURL=3djs.js.map