//--------------
__phaser = {

    //------------------- declare assets
    assets: {
      root: null,
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
      init(){

            var t = this
                assets = __phaser.assets;


            var game = new Phaser.Game(1080, 800, Phaser.WEBGL, assets.canvas, { preload: preload, create: create, update: update });
            assets.gameObj = game;

            var filter;
            var sprite;

            function preload() {

                game.load.image('texture', 'media/game/starfield.png');

            }



            function create() {


            }

            function update() {



            }

      },

      resizeCanvas(options){
        var t = this
            assets = __phaser.assets;

        var settings = options || {
          heightRatio: 1,
          widthRatio: 1,
          align: 'center',
          type: 'full'
        }

        // set resolution of canvas
        var	aspectX = $( $(assets.canvas).parent()[0] ).width(),   //* (settings.widthRatio),
            aspectY = $( $(assets.canvas).parent()[0] ).height() * (settings.heightRatio);

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

        // alignment
        if(settings.align == 'center'){
            var m = Math.abs((aspectY - parseInt($(assets.canvas).parent().parent().height()))/2)+ "px";
            $(assets.canvas).parent().css('margin-top', m  )
        }

        if(settings.align == 'top'){
              $(assets.canvas).parent().css('margin-top', '0px' )
        }

        if(settings.align == 'bottom'){
            var m = Math.abs((parseInt($(assets.canvas).parent().parent().height()))) - parseInt($(assets.canvas).height())+ "px";
              $(assets.canvas).parent().css('margin-top', m )
        }


      },

      destroy(){
          var t = this
              assets = __phaser.assets;

        assets.gameObj.destroy();
      }

    }
    //-------------------


}
//--------------
