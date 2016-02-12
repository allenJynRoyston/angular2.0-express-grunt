import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
  template:  `
    <h2>Route Two Works!</h2>
  `,
  directives: [RouterOutlet]
})
export class RouteTwoComponent { }
