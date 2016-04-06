// core
import {Component, Input, Output, EventEmitter, AfterViewInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

// components
import {ThreeComponent}  from '../../components/3d/3djs';
import {PhaserComponent}  from '../../components/phaser/phaser'

// directives
import {fullscreenBtn}  from '../../directives/fullscreenBtn/fullscreenBtn';

// parts

// declare
declare var $;
declare var _root;
declare var THREE;
declare var Phaser;

@Component({
	selector: 'game-component',
	directives: [
		CORE_DIRECTIVES,
		ThreeComponent,
    PhaserComponent,
    fullscreenBtn
	],
	styles: [`
    #game-container{
      margin-left: auto;
      margin-right: auto;
      width: 1080px;
      height: 800px;
      background-color: gray;
      overflow: hidden;
    }

    #canvas-container{
        background-color: black;
    }

    #myCanvas{
      padding-left: 0;
      padding-right: 0;
      margin-left: auto;
      margin-right: auto;
      vertical-align:center;
      display: block;
    }
  `],
  templateUrl: './app/components/game/template.html'
})
export class gameComponent {

  //--------------

  //--------------

  //--------------
  public layout = {
    isFullscreen: function(){
      if( (screen.availHeight || screen.height-30) <= window.innerHeight) {
        return true;
      }
      else{
        return false
      }
    },
    meetsDesktopRequirement: function(){
      var _results = {offerFS: true, screenSizeGood: false, windowSizeGood: false }
      var avail = {width: false, height: false}
      if(screen.availWidth - parseInt($('#game-container').width()) > 0){
        avail.width = true;
      }
      if(screen.availHeight - parseInt($('#game-container').height()) > 0){
        avail.height = true;
      }
      if (avail.width && avail.height){
        _results.screenSizeGood = true;
      }

      var win = {width: false, height: false}
      if((window.innerWidth || document.body.clientWidth) - parseInt($('#game-container').width()) > 0){
        win.width = true;
      }
      if((window.innerHeight || document.body.clientHeight) - parseInt($('#game-container').height()) > 0){
        win.height = true;
      }
      if (win.width && win.height){
        _results.windowSizeGood = true;
      }

      if(_results.screenSizeGood && _results.windowSizeGood){
        _results.offerFS = false;
      }

      return _results;
    },
    meetsWindowRequirement: function(){

    },
    type: null   // standard, fullCanvas
  }
  //--------------


  //---------------
	ngOnInit(){

	}
  //---------------


  //--------------
  changeLayout(type) {
    var t = this;
    this.layout.type = type;

    setTimeout(function(){
      if(type == 'FullThreeJS'){
        t.threeJS.canvas.resizeCanvas({
          heightRatio: 1,
          align: 'center'
        });
      }

      if(type == 'FullPhaser'){
        t.phaser.canvas.resizeCanvas({
          heightRatio: 1,
          align: 'center',
          type: 'full'
        });
      }

      if(type == 'Split'){
        t.threeJS.canvas.resizeCanvas({
          heightRatio: 1,
          align: 'center'
        });

        t.phaser.canvas.resizeCanvas({
          heightRatio: 1,
          align: 'center',
          type: 'fit'
        });
      }

      if(type == 'ThreeFit'){
        t.threeJS.canvas.resizeCanvas({
          heightRatio: .50,
          align: 'center'
        });

        t.phaser.canvas.resizeCanvas({
          heightRatio: 1,
          align: 'center'
        });
      }

      if(type == 'PhaserFit'){
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

    })

  }
  //--------------


  //---------------
  threeData1(three){
    this.threeJS.canvas.init(three)
    this.changeLayout("Split")
  }
  //---------------

  //---------------
  phaserData1(phaser){
    this.phaser.canvas.init(phaser)
  }
  //---------------


  //--------------
  phaser = {

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
      canvas:{
        parent: this,

        //-------------------
        init(d){
          var t = this,
              root = this.parent,
              self = this.parent.phaser,
              assets = this.parent.phaser.assets;

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

        resizeCanvas(options){

          var assets = this.parent.phaser.assets;


          var assets = this.parent.phaser.assets;

          var settings = options || {
            heightRatio: 1,
            widthRatio: 1,
            align: 'center',
            type: 'full'
          }

          // set resolution of canvas
          var	aspectX = $( $(assets.canvas).parent()[0] ).width(),   //* (settings.widthRatio),
              aspectY = $( $(assets.canvas).parent()[0] ).height() * (settings.heightRatio);


          // alignment
          if(settings.align == 'center'){
              var m = Math.abs((aspectY - parseInt($(assets.canvas).parent().parent().height()))/2)+ "px";
              $(assets.canvas).parent().css('margin-top', m )
          }

          if(settings.align == 'top'){
                $(assets.canvas).parent().css('margin-top', '0px' )
          }

          if(settings.align == 'bottom'){
              var m = Math.abs((parseInt($(assets.canvas).parent().parent().height()))) - parseInt($(assets.canvas).height())+ "px";
                $(assets.canvas).parent().css('margin-top', m )
          }


          // resolution
          if(settings.type == "fit"){
            $(assets.canvas).find('canvas').css('width', aspectX)
            $(assets.canvas).find('canvas').css('height', aspectY)
            assets.gameObj.width = aspectX;
            assets.gameObj.height = aspectY;
          }

          if(settings.type == "full"){
            $(assets.canvas).find('canvas').css('width', $( $(assets.canvas).parent().parent()[0] ).width() )
            $(assets.canvas).find('canvas').css('height', $( $(assets.canvas).parent().parent()[0] ).height())
            assets.gameObj.width = $( $(assets.canvas).parent().parent()[0] ).width();
            assets.gameObj.height = $( $(assets.canvas).parent().parent()[0] ).height();
          }

        }

      }
      //-------------------


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
        init(d){
          var t = this,
              root = this.parent,
              self = this.parent.threeJS,
              assets = this.parent.threeJS.assets;

              // INITIALIZE SCENE
              assets.scene = new THREE.Scene();
              assets.canvas = d.container[0];
              assets.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 20000 );
              assets.renderer = new THREE.WebGLRenderer({ canvas:assets.canvas});

              // WATCH FOR RESIZING
              $(window).bind('resize', function(e){
                // do something on resize
              });

              // INITIALIZE THREEJS LAYOUT
              this.changeResolution(1)
              //root.changeLayout('standard')

              // BEGIN RENDER LOOP
              this.renderLoop();

        },
        //-------------------

        //-------------------
        resizeCanvas(options){

          var root = this.parent;
          var self = this.parent.threeJS;
          var assets = this.parent.threeJS.assets;

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
              plane.rotation.x += 0.005;
              plane.rotation.y += 0.005;
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
