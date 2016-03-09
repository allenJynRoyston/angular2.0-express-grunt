declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-dropdown]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseclick)': 'onMouseLeave()',
    '(click)':      'onClick()'
  }
})
export class uiSemanticDropdown {
  @Input('options') options:any;

  constructor(private el: ElementRef) {
    var i = this;
    setTimeout(function(){
      if(i.options == undefined){
        i.options = {}
      }
      $(el.nativeElement).dropdown(i.options)
    }, 0)
  }

  onMouseEnter(){

  }

  onMouseLeave(){

  }

  onClick(){

  }
}
