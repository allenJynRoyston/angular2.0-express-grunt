declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-progress]',
  host: {

  }
})
export class uiSemanticProgress {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var i = this;
    setTimeout(function(){
      if(i.options == undefined){
        i.options = {}
      }
      $(el.nativeElement).progress(i.options)
    })
  }
}


@Directive({
  selector: '[ui-progress-button]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticProgressButton {
  @Input('options') options:any

  constructor(private el: ElementRef){

  }

  onClick(){
    var i = this;
    if(i.options == undefined){
      i.options = {selector: '.progress', type: 'increment'}
    }
    $(i.options.selector).progress(i.options.type)
  }
}
