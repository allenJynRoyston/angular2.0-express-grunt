
import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HighlightDirective {
  @Input('myHighlight') highlightColor: string;
  private defaultColor = 'yellow';
  constructor(private el: ElementRef) {

  }
  onMouseEnter() {
    this._highlight(this.highlightColor || this.defaultColor);
  }
  onMouseLeave() {
    this._highlight(null);
  }
  private _highlight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
