declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-accordian]',
})
export class uiSemanticAccordian {
  constructor(el: ElementRef) {
     $(el.nativeElement).accordion()
  }
}
