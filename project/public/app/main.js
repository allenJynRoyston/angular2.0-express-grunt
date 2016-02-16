System.register(['./components/container/app.container', 'angular2/platform/browser', 'angular2/router'], function(exports_1) {
    "use strict";
    var app_container_1, browser_1, router_1;
    return {
        setters:[
            function (app_container_1_1) {
                app_container_1 = app_container_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // bootstrap app
            setTimeout(function () {
                browser_1.bootstrap(app_container_1.appContainer, [router_1.ROUTER_PROVIDERS]);
            }, 0);
        }
    }
});
//# sourceMappingURL=main.js.map