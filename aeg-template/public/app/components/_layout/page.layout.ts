// core
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, AsyncRoute} from 'angular2/router';

// page containers
import {homePage} from '../../components/home/page.home';
import {aboutPage} from '../../components/about/page.about';
import {contactPage} from '../../components/contact/page.contact';

// directives
import {uiSemanticDropdown} from '../../directives/semantic-ui-dropdown/dropdown.directive';
import {uiSemanticVisibility} from '../../directives/semantic-ui-visibility/visibility.directive';
import {uiSemanticSidebar} from '../../directives/semantic-ui-sidebar/sidebar.directive';

// parts
import {partsFiller, partsFooter} from '../../components/parts/boilerplate.parts';

// declare
declare var $;


@Component({
	selector: 'my-app',
	directives: [
		// core
		ROUTER_DIRECTIVES,

    //Directives
    uiSemanticDropdown,
    uiSemanticVisibility,
    uiSemanticSidebar,

		// boilerplate
		partsFiller,
		partsFooter

	],
	templateUrl: './app/components/_layout/layout.html'
})
@RouteConfig([

	{
    path:'/',
    name: 'Home',
    component: homePage,
		useAsDefault: true
  },

	{
    path:'/home',
    name: 'Home',
    component: homePage,
  },

	{
    path:'/contact',
    name: 'Contact',
    component: contactPage,
  },

	{
    path:'/about',
    name: 'About',
    component: aboutPage,
  },


])
export class templateHomepage {

  public routes = [
    {name: "Home", path: ["Home"], icon: 'fa fa-home'},
    {name: "Contact", path: ["Contact"], icon: 'fa fa-file-code-o'},
    {name: "About", path: ["About"], icon: 'fa fa-university'}
  ]

  constructor(private _router: Router){

  }

  linkTo(link:any, autoclose:Boolean){
		 $(window).scrollTop(0)
     this._router.navigate(link);
  }


}
