// production/dev mode
//import {enableProdMode} from 'angular2/core';
System.register(['./templates/template.sticky', 'angular2/platform/browser', 'angular2/router'], function(exports_1) {
    "use strict";
    var template_sticky_1, browser_1, router_1;
    return {
        setters:[
            function (template_sticky_1_1) {
                template_sticky_1 = template_sticky_1_1;
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
                browser_1.bootstrap(template_sticky_1.templateSticky, [router_1.ROUTER_PROVIDERS]);
                //bootstrap(testComponent, [ROUTER_PROVIDERS])
                //bootstrap(appHeader, [ROUTER_PROVIDERS]);
                //bootstrap(appContainer, [ROUTER_PROVIDERS]);
                //bootstrap(appSidebar, [ROUTER_PROVIDERS]);
            }, 0);
        }
    }
});
//# sourceMappingURL=main.js.map