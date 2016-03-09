declare var $:any;

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[ui-transition-onload]',
  host: {

  }
})
export class uiSemanticTransitionOnload {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var i = this;
    setTimeout(function(){
      if(i.options == undefined){
        i.options = {animation : 'fade'}
      }
      if(i.options.loop){
        $(el.nativeElement)
        .transition('set looping')
      }
      $(el.nativeElement).transition(i.options)
    })
  }

}

@Directive({
  selector: '[ui-transition-button]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticTransitionButton {
  @Input('options') options:any

  onClick(){
    var i = this;
    if(i.options == undefined){
      i.options = {}
    }
    $(i.options.selector)
    .transition(i.options)
    if(i.options.loop){
      $(i.options.selector)
      .transition('set looping')
    }
    else{
      $(i.options.selector)
      .transition('remove looping')
    }
  }

}


@Directive({
  selector: '[ui-transition-hover]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
  }
})
export class uiSemanticTransitionHover {
  @Input('options') options:any
  self:any;

  constructor(private el: ElementRef){
    this.self = el.nativeElement;
  }

  onMouseEnter(){
    var i = this;
    if(i.options == undefined){
      i.options = {}
    }
    $(i.self)
    .transition(i.options)
    if(i.options.loop){
      $(i.self)
      .transition('set looping')
    }
    else{
      $(i.self)
      .transition('remove looping')
    }
  }

}
