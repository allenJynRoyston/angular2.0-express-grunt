import {Component} from 'angular2/core';

@Component({
  selector: 'test-component',
  template: `
  <br><br>
    <div>Hello my name is {{name}}.
    <button (click)="sayMyName()">Say my name</button></div>
  <br><br>
  `
})
export class testComponent {
  name:string;

  constructor() {
    this.name = 'Max'
  }
  sayMyName() {
    console.log('My name is', this.name)
  }
}
