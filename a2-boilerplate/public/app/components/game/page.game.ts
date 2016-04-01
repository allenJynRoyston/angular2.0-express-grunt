// core
import {Component, Input, Output, EventEmitter, AfterViewInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

// components
import {ThreeApp}  from '../../components/3d/3djs';

// directives

// parts

// declare
declare var $;
declare var _root;


@Component({
	selector: 'game-component',
	directives: [
		CORE_DIRECTIVES,
		ThreeApp,
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
    type: "standard"   // standard, fullCanvas
  }
  //--------------



  //--------------
  changeLayout(type) {

    this.layout.type = type

  }
  //--------------



}
