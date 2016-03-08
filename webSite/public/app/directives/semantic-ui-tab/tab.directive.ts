declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-tab]',
  host: {

  }
})
export class uiSemanticTab {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var i = this;
    setTimeout(function(){
      if(i.options == undefined){
        i.options = {}
      }
      $(el.nativeElement).find('.menu .item').tab(i.options)
    })
  }

}
