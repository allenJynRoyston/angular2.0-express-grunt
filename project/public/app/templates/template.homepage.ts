// core
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// page containers
import {pageHome} from '../components/page_home/page.home';
import {pageAbout} from '../components/page_about/page.about';
import {pageDirectives} from '../components/page_directives/page.directives';

// Directives
import {uiSemanticDropdown} from '../directives/semantic-ui-dropdown/dropdown.directive';
import {uiSemanticVisibility} from '../directives/semantic-ui-visibility/visibility.directive';

// parts
import {partsHeader, partsFooter} from '../parts/boilerplate.parts';


@Component({
	selector: 'my-app',
	directives: [
		// core
		ROUTER_DIRECTIVES,

    //Directives
    uiSemanticDropdown,
    uiSemanticVisibility,

		// boilerplate
		partsHeader,
    partsFooter,

	],
	templateUrl: './views/templates/homepage.html'
})
@RouteConfig([

	{
    path:'/',
    name: 'Home',
    component: pageDirectives,
  },

	{
    path:'/home',
    name: 'Home',
    component: pageHome,
  },

	{
    path:'/directives',
    name: 'Directives',
    component: pageDirectives,
  },

	{
    path:'/about',
    name: 'About',
    component: pageAbout,
  },




])
export class templateHomepage {

	constructor(){

  }

}
