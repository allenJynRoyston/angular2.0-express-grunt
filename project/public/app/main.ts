import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

import {appContainer} from './components/container/app.container'
//import {simpleComponent} from './components/simple/simple'

bootstrap(appContainer, [ROUTER_PROVIDERS]);
//bootstrap(simpleComponent)
