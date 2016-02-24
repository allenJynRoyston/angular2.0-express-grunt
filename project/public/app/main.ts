// production/dev mode
//import {enableProdMode} from 'angular2/core';

// components
//import {appContainer}     from './components/container/app.container'
//import {appHeader}        from './components/header/header'
//import {appSidebar}       from './components/sidebar/sidebar'
//import {testComponent}    from './components/test/test';
import {templateSticky}    from './templates/template.sticky';

// modules
import {bootstrap}        from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

//enableProdMode();

// bootstrap app
setTimeout(function(){
  bootstrap(templateSticky, [ROUTER_PROVIDERS])
  //bootstrap(testComponent, [ROUTER_PROVIDERS])
  //bootstrap(appHeader, [ROUTER_PROVIDERS]);
  //bootstrap(appContainer, [ROUTER_PROVIDERS]);
  //bootstrap(appSidebar, [ROUTER_PROVIDERS]);
}, 0)
