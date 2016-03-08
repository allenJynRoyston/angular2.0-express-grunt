System.register(['angular2/core', '../directives/semantic-ui-visibility/visibility.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, visibility_directive_1;
    var partsFiller, partsFooter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (visibility_directive_1_1) {
                visibility_directive_1 = visibility_directive_1_1;
            }],
        execute: function() {
            //------------------------------------
            partsFiller = (function () {
                function partsFiller() {
                }
                partsFiller = __decorate([
                    core_1.Component({
                        selector: 'parts-filler',
                        directives: [visibility_directive_1.uiSemanticVisibility],
                        template: "\n\t<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n\t<img data-src=\"media/images/steve.jpg\" ui-visibility=\"ui-visibility\" [options]=\"{type: 'image', transition: 'vertical flip in', duration: 1500}\" class=\"ui medium left floated image\"/>\n\t<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n\t<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.\n\t<img data-src=\"media/images/rachel.png\" ui-visibility=\"ui-visibility\" [options]=\"{type: 'image',transition: 'vertical flip in',duration: 1500}\" class=\"ui medium right floated image\"/>    Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n\t<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsFiller);
                return partsFiller;
            }());
            exports_1("partsFiller", partsFiller);
            //------------------------------------
            //------------------------------------
            partsFooter = (function () {
                function partsFooter() {
                }
                partsFooter = __decorate([
                    core_1.Component({
                        selector: 'parts-footer',
                        directives: [visibility_directive_1.uiSemanticVisibility],
                        template: "\n\t<div class=\"ui inverted vertical footer segment\">\n\t  <div class=\"ui center aligned container\">\n\t\t\t<img src=\"media/images/logo.png\" ui-visibility=\"ui-visibility\" [options]=\"{type: 'image',transition: 'vertical flip in',duration: 500}\" class=\"ui centered small image\"/>\n\t\t\t<div class=\"ui horizontal inverted small divided link list\">\n\t\t\t\t<a href=\"#\" class=\"item\">Allen Royston | \u00A9 2014-2016</a>\n\t\t\t</div>\n\t  </div>\n\t</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsFooter);
                return partsFooter;
            }());
            exports_1("partsFooter", partsFooter);
        }
    }
});
//------------------------------------
//# sourceMappingURL=boilerplate.parts.js.map