declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-embed]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseclick)': 'onMouseLeave()',
    '(click)':      'onClick()'
  }
})
export class uiSemanticEmbed {
  @Input('options') options:any;

  constructor(private el: ElementRef) {
    var i = this;
    setTimeout(function(){
      if(i.options == undefined){
        i.options = {}
      }
      console.log(i.options)
      $(el.nativeElement).embed(i.options)
    }, 0)
  }

  onMouseEnter(){

  }

  onMouseLeave(){

  }

  onClick(){

  }
}
