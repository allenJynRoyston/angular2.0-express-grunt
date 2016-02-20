import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// routes
// import {homeComponent} from './../home/home';

// directives
import {uiSemanticSticky} from './../../directives/semantic-ui-sticky/sticky.directive';


@Component({
  selector: 'app-header',
  directives: [ROUTER_DIRECTIVES, uiSemanticSticky],
  templateUrl: './views/header/header.html'
})
export class appHeader {


}
