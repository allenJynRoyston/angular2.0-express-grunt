// production/dev mode
//import {enableProdMode} from 'angular2/core';

// components
import {appContainer} from './components/container/app.container'
import {appHeader}    from './components/header/header'

// modules
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

//enableProdMode();

// bootstrap app
setTimeout(function(){
  bootstrap(appHeader, [ROUTER_PROVIDERS]);
  bootstrap(appContainer, [ROUTER_PROVIDERS]);
}, 0)
