// components
import {appContainer} from './components/container/app.container'
//import {simpleComponent} from './components/simple/simple'

// modules
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';


// bootstrap app
setTimeout(function(){
  bootstrap(appContainer, [ROUTER_PROVIDERS]);
}, 500)
