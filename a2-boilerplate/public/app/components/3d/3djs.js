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
    var ThreeComponent;
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
            ThreeComponent = (function () {
                //--------------
                function ThreeComponent(el) {
                    this.el = el;
                    //--------------
                    this.globals = _root.globals;
                    // send data to a listener
                    //this.threeObj.emit({message: "Sent from child!"})
                    this.three = new core_1.EventEmitter();
                    this._layout = { old: null, new: null, execute: null };
                    this.selfRef = el.nativeElement;
                    var t = this;
                }
                //--------------
                //--------------
                ThreeComponent.prototype.ngOnInit = function () {
                    var t = this;
                    // load Threejs
                    if ($('[src="' + t.settings.file + '"]').length == 0) {
                        var js = document.createElement("script");
                        js.type = "text/javascript";
                        js.src = t.settings.file;
                        document.body.appendChild(js);
                        js.onload = function () {
                            t.initThreejs();
                        };
                    }
                    else {
                        function scriptLoadedTest() {
                            setTimeout(function () {
                                try {
                                    var test = new THREE.Scene();
                                    clearInterval(this);
                                }
                                catch (err) { }
                                finally {
                                    if (test != undefined) {
                                        t.initThreejs();
                                    }
                                    else {
                                        scriptLoadedTest();
                                    }
                                }
                            }, 1);
                        }
                        var intv = scriptLoadedTest();
                    }
                    /*
                    // create observable - watches for change
                    t._layout.execute = function(d){
                      this.new = JSON.stringify(d);
                      if(this.old !== this.new){
                          t.executeInstructions(d);
                          this.old = this.new;
                      }
                    }
                    // set timeout and run to initalize
                    setInterval(function(){
                      t._layout.execute(t.layout);
                    }, 100);
                    t._layout.execute(t.layout);
                    */
                };
                //--------------
                //--------------
                ThreeComponent.prototype.initThreejs = function () {
                    this.three.emit({ container: this.selfRef.getElementsByTagName('canvas') });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ThreeComponent.prototype, "three", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ThreeComponent.prototype, "settings", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ThreeComponent.prototype, "layout", void 0);
                ThreeComponent = __decorate([
                    core_1.Component({
                        selector: 'three-js',
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "\n    <canvas></canvas>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ThreeComponent);
                return ThreeComponent;
            }());
            exports_1("ThreeComponent", ThreeComponent);
        }
    }
});
//------------------------------------
//# sourceMappingURL=3djs.js.map