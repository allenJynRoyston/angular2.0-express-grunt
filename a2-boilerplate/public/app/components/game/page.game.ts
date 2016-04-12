// core
import {Component, Input, Output, EventEmitter, AfterViewInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

// components
import {ThreeComponent}  from '../../components/3d/3djs';
import {PhaserComponent}  from '../../components/phaser/phaser'
import {uiSemanticEmbed} from '../../directives/semantic-ui-embed/embed.directive';

// directives
import {fullscreenBtn}  from '../../directives/fullscreenBtn/fullscreenBtn';

// parts

// declare
declare var $;
declare var _root;
declare var THREE;
declare var Phaser;
declare var __threeJS;
declare var __phaser;

@Component({
	selector: 'game-component',
	directives: [
		CORE_DIRECTIVES,
		ThreeComponent,
    PhaserComponent,
    uiSemanticEmbed,
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
  public threeReady = [false, false];
  public phaserReady = [false, false];
  public isReady = [false, false];
  public temp = {phaser: null, three: null};
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

  //--------------
  checkThreeComplete(){
    var t = this;
    var count = 0;
    for(var i = 0; i < this.threeReady.length; ++i){
        if(this.threeReady[i]){
          count++;
        }
    }
    if(count == this.threeReady.length){
        t.isReady[0] = true;
        t.checkAllReady()
    }
  }
  //--------------


  //--------------
  checkPhaserComplete(){
    var t = this;
    var count = 0;
    for(var i = 0; i < this.phaserReady.length; ++i){
        if(this.phaserReady[i]){
          count++;
        }
    }
    if(count == this.phaserReady.length){
        t.isReady[1] = true;
        t.checkAllReady()
    }
  }
  //--------------

  //--------------
  checkAllReady(){
    var t = this;
    var count = 0;
    for(var i = 0; i < this.isReady.length; ++i){
        if(this.isReady[i]){
          count++;
        }
    }
    if(count == this.isReady.length){
        t.startGame()
    }
  }
  //--------------


  //---------------
	ngOnInit(){
    var t = this;

    // load Threejs
    var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = '/javascripts/objects/threeJS.js';
        document.body.appendChild(js);
        js.onload = function(){
            t.threeReady[0] = true;
            t.checkThreeComplete();
        }


	}
  //---------------

  //---------------
  loadPhaser(file){
    var t = this;
    var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = file;
        document.body.appendChild(js);
        js.onload = function(){
            t.phaserReady[0] = true;
            t.checkPhaserComplete();
        }
  }
  //---------------

  //---------------
  destroyPhaser(){
    __phaser.canvas.destroy()
  }
  //---------------

  //---------------
  threeData1(three){
      this.temp.three = three;
      this.threeReady[1] = true;
      this.checkThreeComplete();
  }
  //---------------

  //---------------
  phaserData1(phaser){
    this.temp.phaser = phaser;
    this.phaserReady[1] = true;
    this.checkPhaserComplete();
  }
  //---------------

  //---------------
  startGame(){
    var t = this;

    __phaser.assets.canvas = this.temp.phaser.container;
    __phaser.assets.root = this;
    __phaser.canvas.init();



    __threeJS.assets.canvas = this.temp.three.container[0];
    __threeJS.assets.root = this;
    __threeJS.canvas.init();



    setTimeout(function(){
      t.changeLayout("Split");
    }, 100)

  }
  //---------------

  //--------------
  changeLayout(type) {
    var t = this;
    this.layout.type = type;

    setTimeout(function(){

      if(type == 'FullThreeJS'){
        __threeJS.canvas.resizeCanvas({
          heightRatio: 1,
          align: 'center'
        });
      }

      if(type == 'FullPhaser'){
        __phaser.canvas.resizeCanvas({
          heightRatio: 1,
          align: 'center',
          type: 'full'
        });
      }

      if(type == 'Split'){

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

      if(type == 'ThreeFit'){
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

      if(type == 'PhaserFit'){
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

    })

  }
  //--------------


}
