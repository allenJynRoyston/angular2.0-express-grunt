import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';


@Component({
  selector: 'toggle-button',
  template: `
     <button  class="ui button"
              [ngClass]="{true: 'red', false: 'green basic'}[isOn]"
              (click)="toggle(!isOn)"> {{isOn}}
     </button>`,
  directives: [CORE_DIRECTIVES]
})

export class ToggleButton {
  public isOn = false;
  toggle() {
    this.isOn = !this.isOn
  }
}
