// production/dev mode
//import {enableProdMode} from 'angular2/core';
System.register(['./templates/template.homepage', 'angular2/platform/browser', 'angular2/router'], function(exports_1) {
    "use strict";
    var template_homepage_1, browser_1, router_1;
    return {
        setters:[
            function (template_homepage_1_1) {
                template_homepage_1 = template_homepage_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // production/devMode
            //enableProdMode();
            // bootstrap app
            setTimeout(function () {
                //bootstrap(templateSticky, 		[ROUTER_PROVIDERS])
                browser_1.bootstrap(template_homepage_1.templateHomepage, [router_1.ROUTER_PROVIDERS]);
            }, 0);
        }
    }
});
//# sourceMappingURL=main.js.map