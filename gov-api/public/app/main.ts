// production/dev mode
//import {enableProdMode} from 'angular2/core';

// components
import {templateHomepage}    from './components/_layout/page.layout';

// modules
import {bootstrap}        from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

// production/devMode
//enableProdMode();

// bootstrap app
setTimeout(function(){
  //bootstrap(templateSticky, 		[ROUTER_PROVIDERS])
	bootstrap(templateHomepage, 	[ROUTER_PROVIDERS])
}, 0)
