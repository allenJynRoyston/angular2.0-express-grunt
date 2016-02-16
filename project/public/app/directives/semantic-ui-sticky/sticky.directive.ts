declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-sticky]',
  host: {

  }
})
export class uiSemanticSticky {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var i = this;
    setTimeout(function(){
      if(i.options == undefined){
        i.options = {}
      }
      console.log(i)
      $(el.nativeElement).sticky(i.options)
    },100)
  }

}
