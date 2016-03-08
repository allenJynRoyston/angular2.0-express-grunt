declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-dimmer]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseclick)': 'onMouseLeave()',
    '(click)':      'onClick()'
  }
})
export class uiSemanticDimmer {
	@Input('options') options:any

  constructor(private el: ElementRef) {
		var i = this;

    setTimeout(function(){
      if(i.options == undefined){
        i.options = {}
      }

      $(el.nativeElement).dimmer(i.options)
    })
  }

  onMouseEnter(){

  }

  onMouseLeave(){

  }

  onClick(){
    $(this.el.nativeElement).dimmer('toggle');
  }
}


@Directive({
  selector: '[ui-dimmer-button]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticDimmerButton {
	@Input('options') options:any

  onClick(){
      var i = this;
      if(i.options != undefined){
        if(i.options.selector != undefined){
          $(i.options.selector).dimmer('toggle')
        }
      }
  }
}
