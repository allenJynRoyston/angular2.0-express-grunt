declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[dimmer]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseclick)': 'onMouseLeave()',
    '(click)':      'onClick()'
  }
})
export class uiSemanticDimmer {

  constructor(private el: ElementRef) {

  }

  onMouseEnter(){

  }

  onMouseLeave(){

  }

  onClick(){
    $(this.el.nativeElement).dimmer('show');
  }
}
