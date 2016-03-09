// core
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, AsyncRoute} from 'angular2/router';

// page containers
import {pageHome} from '../../components/page_home/page.home';
import {pageResume} from '../../components/page_resume/page.resume';
import {pagePortfolio} from '../../components/page_portfolio/page.portfolio';

// Directives
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
	templateUrl: './app/components/page_layout/layout.html'
})
@RouteConfig([

	{
    path:'/',
    name: 'Home',
    component: pageHome,
		useAsDefault: true
  },

	{
    path:'/home',
    name: 'Home',
    component: pageHome,
  },

	{
    path:'/portfolio',
    name: 'Portfolio',
    component: pagePortfolio,
  },

	{
    path:'/resume',
    name: 'Resume',
    component: pageResume,
  },


])
export class templateHomepage {

  public routes = [
    {name: "Home", path: ["Home"], icon: 'fa fa-home'},
    {name: "Resume", path: ["Resume"], icon: 'fa fa-file-code-o'},
    {name: "Portfolio", path: ["Portfolio"], icon: 'fa fa-university'}
  ]

  constructor(private _router: Router){

  }

  linkTo(link:any, autoclose:Boolean){
		 $(window).scrollTop(0)
     this._router.navigate(link);
  }


}
