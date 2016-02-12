// system
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// routes
import {RouteOneComponent} from './../routeOne/routeOne';
import {RouteTwoComponent} from './../routeTwo/routeTwo';

// directives
import {HighlightDirective} from './../../directives/highlight/highlight.directive';
import {uiSemanticAccordian} from './../../directives/semantic-ui-accordian/accordian.directive';
import {uiSemanticCheckbox} from './../../directives/semantic-ui-checkbox/checkbox.directive';
import {uiSemanticDimmer} from './../../directives/semantic-ui-dimmer/dimmer.directive';


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, HighlightDirective, uiSemanticAccordian, uiSemanticCheckbox, uiSemanticDimmer],
    //templateUrl: './views/home/home.html'
    template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['About']">About</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
  {
    path:'/',
    name: 'Home',
    component: RouteOneComponent,
    useAsDefault: true
  },

  {
    path:'/about',
    name: 'About',
    component: RouteTwoComponent,
  },
])
export class appContainer { }
