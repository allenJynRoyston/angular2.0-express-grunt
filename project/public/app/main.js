// production/dev mode
//import {enableProdMode} from 'angular2/core';
System.register(['./components/container/app.container', './components/header/header', 'angular2/platform/browser', 'angular2/router'], function(exports_1) {
    "use strict";
    var app_container_1, header_1, browser_1, router_1;
    return {
        setters:[
            function (app_container_1_1) {
                app_container_1 = app_container_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            //enableProdMode();
            // bootstrap app
            setTimeout(function () {
                browser_1.bootstrap(header_1.appHeader, [router_1.ROUTER_PROVIDERS]);
                browser_1.bootstrap(app_container_1.appContainer, [router_1.ROUTER_PROVIDERS]);
            }, 0);
        }
    }
});
//# sourceMappingURL=main.js.map