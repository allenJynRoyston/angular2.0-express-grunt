System.register(['angular2/platform/browser', './components/container/app.container', './components/simple/simple'], function(exports_1) {
    "use strict";
    var browser_1, app_container_1, simple_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_container_1_1) {
                app_container_1 = app_container_1_1;
            },
            function (simple_1_1) {
                simple_1 = simple_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_container_1.appContainer);
            browser_1.bootstrap(simple_1.simpleComponent);
        }
    }
});
//# sourceMappingURL=main.js.map