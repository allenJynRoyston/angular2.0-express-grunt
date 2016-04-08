//--------------
__threeJS = {

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

        console.log("INIT!")

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
