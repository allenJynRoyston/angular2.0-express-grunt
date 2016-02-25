declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-visibility]',
  host: {

  }
})
export class uiSemanticVisibility {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var i = this;
    setTimeout(function(){
      if(i.options == undefined){
        i.options = {}
      }
      $(el.nativeElement).visibility(i.options)
    })
  }

}
