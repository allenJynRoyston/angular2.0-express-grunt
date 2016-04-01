declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-checkbox]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseclick)': 'onMouseLeave()',
    '(click)':      'onClick()'
  }
})
export class uiSemanticCheckbox {
  @Input('toggle') toggle:Boolean;

  onClick(){

  }
  onMouseEnter() {

  }
  onMouseLeave() {

  }

  constructor(private el: ElementRef) {
    var i = this;
    setTimeout(function(){
      if(i.toggle){
        $(el.nativeElement).checkbox('toggle')
      }
    }, 0)

  }

}
