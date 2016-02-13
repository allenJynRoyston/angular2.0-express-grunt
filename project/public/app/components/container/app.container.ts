// system
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// routes
import {homeComponent} from './../home/home';
import {aboutComponent} from './../about/about';
import {contactComponent} from './../contact/contact'

// directives
import {HighlightDirective} from './../../directives/highlight/highlight.directive';



@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, HighlightDirective],
    templateUrl: './views/index/index.html'
})
@RouteConfig([


  {
    path:'/home',
    name: 'Home',
    component: homeComponent,
  },

  {
    path:'/about',
    name: 'About',
    component: aboutComponent,
  },

  {
    path:'/contact',
    name: 'Contact',
    component: contactComponent,
  },

])
export class appContainer { }
