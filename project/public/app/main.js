System.register(['angular2/platform/browser', 'angular2/router', './components/container/app.container'], function(exports_1) {
    "use strict";
    var browser_1, router_1, app_container_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_container_1_1) {
                app_container_1 = app_container_1_1;
            }],
        execute: function() {
            //import {simpleComponent} from './components/simple/simple'
            browser_1.bootstrap(app_container_1.appContainer, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//bootstrap(simpleComponent)
//# sourceMappingURL=main.js.map