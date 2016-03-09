declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-popup]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseclick)': 'onMouseLeave()',
    '(click)':      'onClick()'
  }
})
export class uiSemanticPopup {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var i = this;
    setTimeout(function(){
      if(i.options == undefined){
        i.options = {}
      }
      $(el.nativeElement).popup(i.options)
    }, 0)
  }

  onMouseEnter(){

  }

  onMouseLeave(){

  }

  onClick(){

  }

}
