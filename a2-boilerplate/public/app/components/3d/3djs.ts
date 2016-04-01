// core
import {Component, Input, Output, EventEmitter, ElementRef}    from 'angular2/core';
import {CORE_DIRECTIVES}     from 'angular2/common';


// components
import {ToggleButton} from '../../components/ngClassExample/ngClassExample';
import {gameComponent}  from '../../components/game/page.game';

// directives

// parts

// declare

declare var $;
declare var Object;
declare var _root;
declare var THREE;
//------------------------------------
@Component({
  selector: 'three-js',
  inputs: ['toChild'],
  directives: [CORE_DIRECTIVES, ToggleButton],
  template: `
    <canvas id="myCanvas"></canvas>

  `
  //templateUrl: './app/components/3d/template.html',

})
export class ThreeApp {

  //--------------
  public globals = _root.globals;

  @Output() toParent = new EventEmitter();
      // send data to a listener
      //this.toParent.emit({message: "Sent from child!"})
  @Input() toChild:any;
   public _toChild = {old: null, new: null, execute: function(data){}}

  //--------------
  ngOnInit(){


    var t = this;

    // load Threejs
    var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = "node_modules/three/three.min.js";
        document.body.appendChild(js);
        js.onload = function(){
            t.threeJS.canvas.init()
        }


    // create observable - watches for change
    t._toChild.execute = function(d){
      this.new = JSON.stringify(d);
      if(this.old !== this.new){
        t.executeInstructions(d);
        this.old = this.new;
      }
    }
    setInterval(function(){
      t._toChild.execute(t.toChild);
    }, 100); t._toChild.execute(t.toChild);



  }
  //--------------


  //--------------
  executeInstructions(data){
    console.log(data)
    this.changeLayout(data.type)
  }
  //--------------

  //--------------
  changeLayout(type) {

    if(type == 'standard'){
      this.threeJS.canvas.resizeCanvas({
        heightRatio: .25,
        centerVert: true
      });
    }

    if(type == 'standardFull'){
      this.threeJS.canvas.resizeCanvas({
        heightRatio: 1,
        centerVert: true
      });
    }

    if(type == 'fullCanvas'){
      this.threeJS.canvas.resizeCanvas({
        heightRatio: 1,
        centerVert: true
      });
    }


  }
  //--------------







  //--------------
  threeJS = {

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
    canvas:{
        parent: this,

        //-------------------
        init(){
          var t = this,
              root = this.parent,
              self = this.parent.threeJS,
              assets = this.parent.threeJS.assets;

              // INITIALIZE SCENE
              assets.scene = new THREE.Scene();
              assets.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 20000 );
              assets.canvas = $("#myCanvas")[0];
              assets.renderer = new THREE.WebGLRenderer({ canvas:assets.canvas});

              // WATCH FOR RESIZING
              $(window).bind('resize', function(e){
                // do something on resize
              });

              $('.fullscreen-btn').bind('click', function(){
                var el = $('#game-container')[0],
                    rfs = el.requestFullScreen ||
                          el.webkitRequestFullScreen ||
                          el.mozRequestFullScreen;
                ;
                rfs.call(el);
              })


              this.changeResolution(1)
              root.changeLayout('standard')


              // BEGIN RENDER LOOP
              this.renderLoop();
        },
        //-------------------

        //-------------------
        resizeCanvas(options){
          var root = this.parent;
          var self = this.parent.threeJS;

          // DESKTOP RATIO
          var scaleRatio = 1

          // MOBILE RATIO
          //if(root.globals.isMobile == "true"){
            //scaleRatio = 1.5
          //}


          var settings = options || {
            heightRatio: 1,
            centerVert: true
          }

          setTimeout(function(){

            // resize containers
            $('#canvas-container').height( $('#game-container').height() )
            $('#myCanvas').width(   $('#game-layout').width()   );
            $('#myCanvas').height(  $('#game-layout').height()  );

            // set resolution of canvas
            var	aspectX = $('#game-layout').width(),
                aspectY = $('#game-container').height() * (settings.heightRatio);

            if(self.assets.camera != null){
              self.assets.camera.aspect = aspectX / aspectY;
              self.assets.camera.updateProjectionMatrix();
              self.assets.renderer.setSize( aspectX, aspectY );

              if(settings.centerVert){
                  var centerTop = Math.abs((aspectY - parseInt($('#game-container').height()))/2)+ "px";
                  $('#myCanvas').css('margin-top', centerTop )
              }
            }

          })

        },
        //-------------------


        //-------------------
        changeResolution(factorOf){
          var root = this.parent;
          var self = this.parent.threeJS;
              self.assets.renderer.setPixelRatio(factorOf);
        },
        //-------------------

        //-------------------
        renderLoop(){
          var root = this.parent,
              self = this.parent.threeJS,
              assets = this.parent.threeJS.assets;

          /* temporary add objects here */
          var texture = THREE.ImageUtils.loadTexture( "/media/images/10.gif" );


          var material = new THREE.MeshLambertMaterial({ map : texture, side: THREE.DoubleSide });
          var geometry = new THREE.PlaneGeometry( 800, 800 );
          //var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
          var plane = new THREE.Mesh( geometry, material );
              assets.scene.add( plane );

          var light = new THREE.PointLight( 0xffffff, 2, 100 );
              light.position.set( 50, 50, 50 );
              assets.scene.add( light );
          var light = new THREE.AmbientLight( 0xffffff ); // soft white light
              assets.scene.add( light );

              assets.camera.position.x = 0
              assets.camera.position.y = 0
              assets.camera.position.z = 1000;

          var render = function () {
            requestAnimationFrame( render );
            //plane.rotation.x += 0.005;
            plane.rotation.y += 0.002;
            assets.renderer.render(assets.scene, assets.camera);
          };

          render();
        },
        //-------------------


        //-------------------
        build(){

        }
        //-------------------

    },
    //-------------------

    //------------------- input/output functions
    io:{
        //-------------------
        camera(){

        }
        //-------------------
    }
    //-------------------

  }
  //--------------


}
//------------------------------------
