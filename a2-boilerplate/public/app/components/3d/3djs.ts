// core
import {Component, Input, Output, EventEmitter, ElementRef}    from 'angular2/core';
import {CORE_DIRECTIVES}     from 'angular2/common';


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
  directives: [CORE_DIRECTIVES],
  template: `
    <canvas></canvas>
  `
  //templateUrl: './app/components/3d/template.html',

})
export class ThreeApp {

  //--------------
  public globals = _root.globals;
  public selfRef:any;

  // send data to a listener
  //this.toParent.emit({message: "Sent from child!"})
  @Output() toParent = new EventEmitter();

  // recieve information from parent
  /*
    // create observable - watches for change
    t._fromParent.execute = function(d){
      this.new = JSON.stringify(d);
      if(this.old !== this.new){
          // do something
          this.old = this.new;
      }
    }
    // set timeout and run to initalize
    setInterval(function(){
      t._fromParent.execute(t.fromParent);
    }, 100);
    t._fromParent.execute(t.fromParent);

  */
  @Input() fromParent:any;
   public _fromParent = {old: null, new: null, execute: null}

   //--------------
   constructor(private el: ElementRef) {
      this.selfRef = el.nativeElement;
   }
   //--------------

  //--------------
  ngOnInit(){
    var t = this;

    // load Threejs
    if($('[src="node_modules/three/three.min.js"]').length == 0){
      var js = document.createElement("script");
          js.type = "text/javascript";
          js.src = "node_modules/three/three.min.js";
          document.body.appendChild(js);
          js.onload = function(){
              t.threeJS.canvas.init()
          }
    }
    else{
      setTimeout(function(){
        t.threeJS.canvas.init()
      }, 100)
    }


    // create observable - watches for change
    t._fromParent.execute = function(d){
      this.new = JSON.stringify(d);
      if(this.old !== this.new){
          t.executeInstructions(d);
          this.old = this.new;
      }
    }
    // set timeout and run to initalize
    setInterval(function(){
      t._fromParent.execute(t.fromParent);
    }, 100);
    t._fromParent.execute(t.fromParent);


  }
  //--------------


  //--------------
  executeInstructions(data){
    this.changeLayout(data.type)
  }
  //--------------

  //--------------
  changeLayout(type) {

    if(type == 'standard'){
      this.threeJS.canvas.resizeCanvas({
        heightRatio: .25,
        align: 'center'
      });
    }

    if(type == 'standardFull'){
      this.threeJS.canvas.resizeCanvas({
        heightRatio: 1,
        align: 'center'
      });
    }

    if(type == 'fullCanvas'){
      this.threeJS.canvas.resizeCanvas({
        heightRatio: 1,
        align: 'center'
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
              assets.canvas = $(root.selfRef).find('canvas')[0];
              assets.renderer = new THREE.WebGLRenderer({ canvas:assets.canvas});

              // WATCH FOR RESIZING
              $(window).bind('resize', function(e){
                // do something on resize
              });


              // SETUP FULLSCREEN BUTTON
              $('.fullscreen-btn').bind('click', function(){
                var el = $('#game-container')[0],
                    rfs = el.requestFullScreen ||
                          el.webkitRequestFullScreen ||
                          el.mozRequestFullScreen;
                ;
                rfs.call(el);
              })

              // INITIALIZE THREEJS LAYOUT
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
            widthRatio: 1,
            align: 'center'
          }


            // set resolution of canvas
            var	aspectX = $( $(root.selfRef).parent()[0] ).width(),   //* (settings.widthRatio),
                aspectY = $( $(root.selfRef).parent()[0] ).height()  * (settings.heightRatio);



            if(self.assets.camera != null){
              self.assets.camera.aspect = aspectX / aspectY;
              self.assets.camera.updateProjectionMatrix();
              self.assets.renderer.setSize( aspectX, aspectY );

              if(settings.align == 'center'){
                  var centerTop = Math.abs((aspectY - parseInt($(root.selfRef).parent().height()))/2)+ "px";
                  $(root.selfRef).find('canvas').css('margin-top', centerTop )
              }

              if(settings.align == 'top'){
                  $(root.selfRef).find('canvas').css('top', '0px' )
              }

              if(settings.align == 'bottom'){
                  $(root.selfRef).find('canvas').css('bottom', '0px' )
              }

            }




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
