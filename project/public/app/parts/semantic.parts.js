System.register(['angular2/core', './../directives/semantic-ui-accordian/accordian.directive', './../directives/semantic-ui-checkbox/checkbox.directive', './../directives/semantic-ui-dimmer/dimmer.directive', './../directives/semantic-ui-dropdown/dropdown.directive', './../directives/semantic-ui-embed/embed.directive', './../directives/semantic-ui-modal/modal.directive', './../directives/semantic-ui-popup/popup.directive', './../directives/semantic-ui-progress/progress.directive', './../directives/semantic-ui-rating/rating.directive', './../directives/semantic-ui-search/search.directive', './../directives/semantic-ui-shape/shape.directive'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, accordian_directive_1, checkbox_directive_1, dimmer_directive_1, dimmer_directive_2, dropdown_directive_1, embed_directive_1, modal_directive_1, popup_directive_1, progress_directive_1, progress_directive_2, rating_directive_1, search_directive_1, shape_directive_1;
    var partsDropdown, partsAccordian, partsToggle, partsDimmer, partsEmbed, partsModal, partsPopup, partsProgress, partsRating, partsSearch, partsShapes;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (accordian_directive_1_1) {
                accordian_directive_1 = accordian_directive_1_1;
            },
            function (checkbox_directive_1_1) {
                checkbox_directive_1 = checkbox_directive_1_1;
            },
            function (dimmer_directive_1_1) {
                dimmer_directive_1 = dimmer_directive_1_1;
                dimmer_directive_2 = dimmer_directive_1_1;
            },
            function (dropdown_directive_1_1) {
                dropdown_directive_1 = dropdown_directive_1_1;
            },
            function (embed_directive_1_1) {
                embed_directive_1 = embed_directive_1_1;
            },
            function (modal_directive_1_1) {
                modal_directive_1 = modal_directive_1_1;
            },
            function (popup_directive_1_1) {
                popup_directive_1 = popup_directive_1_1;
            },
            function (progress_directive_1_1) {
                progress_directive_1 = progress_directive_1_1;
                progress_directive_2 = progress_directive_1_1;
            },
            function (rating_directive_1_1) {
                rating_directive_1 = rating_directive_1_1;
            },
            function (search_directive_1_1) {
                search_directive_1 = search_directive_1_1;
            },
            function (shape_directive_1_1) {
                shape_directive_1 = shape_directive_1_1;
            }],
        execute: function() {
            //------------------------------------
            partsDropdown = (function () {
                function partsDropdown() {
                }
                partsDropdown = __decorate([
                    core_1.Component({
                        selector: 'parts-dropdown',
                        directives: [dropdown_directive_1.uiSemanticDropdown],
                        template: "\n  <select multiple=\"multiple\" ui-dropdown [options]=\"{maxSelections: 4}\" class=\"ui fluid normal dropdown\">\n      <option value=\"\">Skills</option>\n      <option value=\"angular\">Angular</option>\n      <option value=\"css\">CSS</option>\n      <option value=\"design\">Graphic Design</option>\n      <option value=\"ember\">Ember</option>\n      <option value=\"html\">HTML</option>\n      <option value=\"ia\">Information Architecture</option>\n      <option value=\"javascript\">Javascript</option>\n      <option value=\"mech\">Mechanical Engineering</option>\n      <option value=\"meteor\">Meteor</option>\n      <option value=\"node\">NodeJS</option>\n      <option value=\"plumbing\">Plumbing</option>\n      <option value=\"python\">Python</option>\n      <option value=\"rails\">Rails</option>\n      <option value=\"react\">React</option>\n      <option value=\"repair\">Kitchen Repair</option>\n      <option value=\"ruby\">Ruby</option>\n      <option value=\"ui\">UI Design</option>\n      <option value=\"ux\">User Experience</option>\n  </select>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsDropdown);
                return partsDropdown;
            }());
            exports_1("partsDropdown", partsDropdown);
            //------------------------------------
            //------------------------------------
            partsAccordian = (function () {
                function partsAccordian() {
                }
                partsAccordian = __decorate([
                    core_1.Component({
                        selector: 'parts-accordian',
                        directives: [accordian_directive_1.uiSemanticAccordian],
                        template: "\n\t<div ui-accordian class=\"ui styled fluid accordion\">\n\t\t<div class=\"active title\"><i class=\"dropdown icon\"></i>    What is a dog?</div>\n\t\t<div class=\"active content\">\n\t\t\t<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n\t\t</div>\n\t\t<div class=\"title\"><i class=\"dropdown icon\"></i>    What kinds of dogs are there?</div>\n\t\t<div class=\"content\">\n\t\t\t<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\n\t\t</div>\n\t\t<div class=\"title\"><i class=\"dropdown icon\"></i>    How do you acquire a dog?</div>\n\t\t<div class=\"content\">\n\t\t\t<p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>\n\t\t\t<p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>\n\t\t</div>\n\t</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsAccordian);
                return partsAccordian;
            }());
            exports_1("partsAccordian", partsAccordian);
            //------------------------------------
            //------------------------------------
            partsToggle = (function () {
                function partsToggle() {
                }
                partsToggle = __decorate([
                    core_1.Component({
                        selector: 'parts-toggle',
                        directives: [checkbox_directive_1.uiSemanticCheckbox],
                        template: "\n  <div ui-checkbox [toggle]=\"true\" class=\"ui toggle checkbox\">\n    <input type=\"checkbox\"/>\n    <label>Is Toggled!</label>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsToggle);
                return partsToggle;
            }());
            exports_1("partsToggle", partsToggle);
            //------------------------------------
            //------------------------------------
            partsDimmer = (function () {
                function partsDimmer() {
                }
                partsDimmer = __decorate([
                    core_1.Component({
                        selector: 'parts-dimmer',
                        directives: [dimmer_directive_1.uiSemanticDimmer, dimmer_directive_2.uiSemanticDimmerButton],
                        template: "\n  <div class=\"ui grid\">\n    <div class=\"four wide column\">\n      <div ui-dimmer=\"ui-dimmer\" class=\"ui card blurring\">\n        <div class=\"image\"><img src=\"media/images/rachel.png\"/></div>\n        <div class=\"content\"><a class=\"header\">Click </a>\n          <div class=\"meta\"><span class=\"date\">to blur</span></div>\n        </div>\n        <div class=\"extra content\"><a><i class=\"user icon\"></i>      22 Friends</a></div>\n      </div>\n    </div>\n    <div class=\"four wide column\">\n      <div ui-dimmer=\"ui-dimmer\" [options]=\"{on: 'hover'}\" class=\"ui card blurring\">\n        <div class=\"image\"><img src=\"media/images/rachel.png\"/></div>\n        <div class=\"content\"><a class=\"header\">Hover</a>\n          <div class=\"meta\"><span class=\"date\">to blur</span></div>\n        </div>\n        <div class=\"extra content\"><a><i class=\"user icon\"></i>      22 Friends  </a></div>\n      </div>\n    </div>\n    <div class=\"four wide column\">\n      <div ui-dimmer=\"ui-dimmer\" class=\"ui card blurring\">\n        <div class=\"ui dimmer\">\n          <div class=\"content\">\n            <div class=\"center\">\n              <h2 class=\"ui inverted icon header\"><i class=\"heart icon\"></i>          Dimmed Message!      </h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"image\"><img src=\"media/images/rachel.png\"/></div>\n        <div class=\"content\"><a class=\"header\">With Content</a>\n          <div class=\"meta\"><span class=\"date\">to blur</span></div>\n        </div>\n        <div class=\"extra content\"><a><i class=\"user icon\"></i>      22 Friends     </a></div>\n      </div>\n    </div>\n    <div class=\"four wide column\">\n      <div id=\"dimExample\" class=\"ui card blurring\">\n        <div class=\"image\"><img src=\"media/images/rachel.png\"/></div>\n        <div class=\"content\"><a class=\"header\">Click Button</a>\n          <div class=\"meta\"><span class=\"date\">to blur</span></div>\n        </div>\n        <div class=\"extra content\">\n          <div ui-dimmer-button=\"ui-dimmer-button\" [options]=\"{selector: '#dimExample'}\" class=\"ui button\">Dim Button            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsDimmer);
                return partsDimmer;
            }());
            exports_1("partsDimmer", partsDimmer);
            //------------------------------------
            //------------------------------------
            partsEmbed = (function () {
                function partsEmbed() {
                }
                partsEmbed = __decorate([
                    core_1.Component({
                        selector: 'parts-embed',
                        directives: [embed_directive_1.uiSemanticEmbed],
                        template: "\n    <div ui-embed=\"ui-embed\" [options]=\"{source: 'youtube', id: 'YdbGXHwHAko', placeholder: 'media/images/blackgradientstripes.png'}\" class=\"ui segment ui embed\"></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsEmbed);
                return partsEmbed;
            }());
            exports_1("partsEmbed", partsEmbed);
            //------------------------------------
            //------------------------------------
            partsModal = (function () {
                function partsModal() {
                }
                partsModal = __decorate([
                    core_1.Component({
                        selector: 'parts-modal',
                        directives: [modal_directive_1.uiSemanticModal],
                        template: "\n  <div ui-modal=\"ui-modal\" [options]=\"{selector: '#modal1', blurring: true, transition: 'scale'}\" class=\"ui button\">Open Modal</div>\n  <div id=\"modal1\" class=\"ui modal\"><i class=\"close icon\"></i>\n    <div class=\"header\">Profile Picture</div>\n    <div class=\"image content\">\n      <div class=\"ui medium image\"><img src=\"media/images/rachel.png\"/></div>\n      <div class=\"description\">\n        <div class=\"ui header\">We've auto-chosen a profile image for you.</div>\n        <p>We've grabbed the following image from the <a href=\"https://www.gravatar.com\" target=\"_blank\">gravatar</a> image associated with your registered e-mail address.</p>\n        <p>Is it okay to use this photo?</p>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"ui black deny button\">Nope</div>\n      <div class=\"ui positive right labeled icon button\">Yep, that's me<i class=\"checkmark icon\"></i></div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsModal);
                return partsModal;
            }());
            exports_1("partsModal", partsModal);
            //------------------------------------
            //------------------------------------
            partsPopup = (function () {
                function partsPopup() {
                }
                partsPopup = __decorate([
                    core_1.Component({
                        selector: 'parts-popup',
                        directives: [popup_directive_1.uiSemanticPopup],
                        template: "\n  <div class=\"ui popup bottom left transition hidden\">\n    <div class=\"ui four column relaxed divided grid\">\n      <div class=\"column\">\n        <h4 class=\"ui header\">Fabrics</h4>\n        <div class=\"ui link list\"><a class=\"item\">Cashmere</a><a class=\"item\">Linen</a><a class=\"item\">Cotton</a><a class=\"item\">Viscose</a></div>\n      </div>\n    </div>\n  </div><a ui-popup=\"ui-popup\" [options]=\"{inline: true, hoverable: true, position: 'top left', delay: {show: 100, hide: 800}}\" class=\"browse item\">Browse<i class=\"dropdown icon\"></i></a>\n  <div class=\"ui popup bottom left transition hidden\">\n    <div class=\"ui four column relaxed divided grid\">\n      <div class=\"column\">\n        <h4 class=\"ui header\">Types</h4>\n        <div class=\"ui link list\"><a class=\"item\">Knitwear</a><a class=\"item\">Outerwear</a><a class=\"item\">Pants</a><a class=\"item\">Shoes</a></div>\n      </div>\n    </div>\n  </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsPopup);
                return partsPopup;
            }());
            exports_1("partsPopup", partsPopup);
            //------------------------------------
            //------------------------------------
            partsProgress = (function () {
                function partsProgress() {
                }
                partsProgress = __decorate([
                    core_1.Component({
                        selector: 'parts-progress',
                        directives: [progress_directive_1.uiSemanticProgress, progress_directive_2.uiSemanticProgressButton],
                        template: "\n  <div id=\"progress1\" ui-progress=\"ui-progress\" [options]=\"{percent: 0, total: 4, text: {active: 'Adding {value} of {total} photos | {left} left to go | {percent}%', success: '{total} photos uploaded!'}}\" class=\"ui tiny teal progress\">\n    <div class=\"bar\"></div>\n    <div class=\"label\"></div>\n  </div>\n  <div class=\"ui buttons\">\n    <div ui-progress-button=\"ui-progress-button\" [options]=\"{selector: '#progress1', type: 'decrement'}\" class=\"button ui negative\">-</div>\n    <div class=\"or\"></div>\n    <div ui-progress-button=\"ui-progress-button\" [options]=\"{selector: '#progress1', type: 'increment'}\" class=\"button ui positive\">+</div>\n  </div>\n  <div class=\"ui inverted segment\">\n    <div id=\"progress2\" ui-progress=\"ui-progress\" [options]=\"{percent: 0, total: 10, text: {active: 'Adding {value} of {total} photos | {left} left to go | {percent}%', success: '{total} photos uploaded!'}}\" class=\"inverted ui progress yellow\">\n      <div class=\"bar\"></div>\n      <div class=\"label\"></div>\n    </div>\n    <div class=\"ui buttons\">\n      <div ui-progress-button=\"ui-progress-button\" [options]=\"{selector: '#progress2', type: 'decrement'}\" class=\"button ui negative\">-</div>\n      <div class=\"or\"></div>\n      <div ui-progress-button=\"ui-progress-button\" [options]=\"{selector: '#progress2', type: 'increment'}\" class=\"button ui positive\">+</div>\n    </div>\n  </div>\n  <div class=\"ui segment\">\n    <div class=\"ui card\">\n      <div class=\"image\"><img src=\"media/images/rachel.png\"/></div>\n      <div class=\"content\"><a class=\"header\">Project</a>\n        <div class=\"meta\"><span class=\"date\">Started in 2014</span></div>\n      </div>\n      <div class=\"extra content\"><a><i class=\"user icon\"></i>      22 Friends</a></div>\n      <div id=\"progress3\" ui-progress=\"ui-progress\" [options]=\"{percent: 0, total: 3, text: {active: 'Adding {value} of {total} photos | {left} left to go | {percent}%', success: '{total} photos uploaded!'}}\" class=\"ui top attached progress orange\">\n        <div class=\"bar\"></div>\n        <div class=\"label\"></div>\n      </div>\n      <div class=\"ui buttons\">\n        <div ui-progress-button=\"ui-progress-button\" [options]=\"{selector: '#progress3', type: 'decrement'}\" class=\"button ui negative\">-</div>\n        <div class=\"or\"></div>\n        <div ui-progress-button=\"ui-progress-button\" [options]=\"{selector: '#progress3', type: 'increment'}\" class=\"button ui positive\">+</div>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsProgress);
                return partsProgress;
            }());
            exports_1("partsProgress", partsProgress);
            //------------------------------------
            //------------------------------------
            partsRating = (function () {
                function partsRating() {
                }
                partsRating = __decorate([
                    core_1.Component({
                        selector: 'parts-ratings',
                        directives: [rating_directive_1.uiSemanticRating],
                        template: "\n  <div class=\"ui segment\">\n    <div ui-rating=\"ui-rating\" [options]=\"{initialRating: 3, maxRating: 10}\" class=\"ui star rating\"></div>\n  </div>\n  <div class=\"ui segment\">\n    <div ui-rating=\"ui-rating\" [options]=\"{initialRating: 3, maxRating: 10}\" class=\"ui heart rating\"></div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsRating);
                return partsRating;
            }());
            exports_1("partsRating", partsRating);
            //------------------------------------
            //------------------------------------
            partsSearch = (function () {
                function partsSearch() {
                    this.mockContent = [
                        { title: 'Andorra', id: 0 },
                        { title: 'United Arab Emirates', id: 1 },
                        { title: 'Afghanistan', id: 2 },
                        { title: 'Antigua', id: 3 },
                        { title: 'Anguilla', id: 4 },
                        { title: 'Albania', id: 5 },
                        { title: 'Armenia', id: 6 },
                        { title: 'Netherlands Antilles', id: 7 },
                        { title: 'Angola', id: 8 },
                        { title: 'Argentina', id: 9 },
                        { title: 'American Samoa', id: 10 },
                        { title: 'Austria', id: 11 },
                        { title: 'Australia', id: 12 },
                        { title: 'Aruba', id: 13 },
                        { title: 'Aland Islands', id: 14 },
                        { title: 'Azerbaijan', id: 15 },
                        { title: 'Bosnia', id: 16 },
                        { title: 'Barbados', id: 17 },
                        { title: 'Bangladesh', id: 18 },
                        { title: 'Belgium', id: 19 },
                        { title: 'Burkina Faso', id: 20 },
                        { title: 'Bulgaria', id: 21 },
                        { title: 'Bahrain', id: 22 },
                        { title: 'Burundi', id: 23 }
                    ];
                }
                partsSearch = __decorate([
                    core_1.Component({
                        selector: 'parts-search',
                        directives: [search_directive_1.uiSemanticSearch],
                        template: "\n  <div class=\"ui segment\">\n    <div ui-search=\"ui-search\" [options]=\"{source: mockContent, searchFields: ['title'], minCharacters: 1, transition: 'scale'}\" class=\"ui search\">\n      <div class=\"ui icon input\">\n        <input type=\"text\" placeholder=\"Local Search\" class=\"prompt\"/><i class=\"search icon\"></i>\n      </div>\n      <div class=\"results\"></div>\n    </div>\n  </div>\n  <div class=\"ui segment\">\n    <div ui-search=\"ui-search\" [options]=\"{apiSettings: {url: '//api.github.com/search/repositories?q={query}'},fields: {results: 'items',  title :'name', url: 'html_url'}, minCharacters : 3}\" class=\"ui search\">\n      <div class=\"ui left icon input\">\n        <input ui-search=\"ui-search\" type=\"text\" placeholder=\"Search GitHub\" class=\"prompt\"/><i class=\"github icon\"></i>\n      </div>\n      <div class=\"results\"></div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsSearch);
                return partsSearch;
            }());
            exports_1("partsSearch", partsSearch);
            //------------------------------------
            //------------------------------------
            partsShapes = (function () {
                function partsShapes() {
                }
                partsShapes = __decorate([
                    core_1.Component({
                        selector: 'parts-shapes',
                        directives: [shape_directive_1.uiSemanticShape],
                        template: "\n  <div class=\"ui segment\">\n    <div class=\"ui ignored icon direction buttons\">\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape1', animation: 'flip left'}\" class=\"ui button\"><i class=\"left long arrow icon\"></i></div>\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape1', animation: 'flip up'}\" class=\"ui button\"> <i class=\"up long arrow icon\"></i></div>\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape1', animation: 'flip down'}\" class=\"ui button\"> <i class=\"down long arrow icon\"></i></div>\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape1', animation: 'flip right'}\" class=\"ui button\"> <i class=\"right long arrow icon\"></i></div>\n      <div style=\"margin-left: 20px\" class=\"ui ignored icon direction buttons\">\n        <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape1', animation: 'flip over'}\" class=\"ui button\"> <i class=\"retweet icon\"></i></div>\n        <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape1', animation: 'flip back'}\" class=\"ui button\"> <i class=\"flipped retweet icon\"></i></div>\n      </div>\n    </div>\n  </div>\n  <div style=\"min-height: 250px\" class=\"ui segment\">\n    <div id=\"shape1\" class=\"ui cube shape\">\n      <div class=\"sides\">\n        <div class=\"active side\">\n          <div class=\"content\">\n            <div class=\"center\">1</div>\n          </div>\n        </div>\n        <div class=\"side\">\n          <div class=\"content\">\n            <div class=\"center\">2</div>\n          </div>\n        </div>\n        <div class=\"side\">\n          <div class=\"content\">\n            <div class=\"center\">3</div>\n          </div>\n        </div>\n        <div class=\"side\">\n          <div class=\"content\">\n            <div class=\"center\">4</div>\n          </div>\n        </div>\n        <div class=\"side\">\n          <div class=\"content\">\n            <div class=\"center\">5</div>\n          </div>\n        </div>\n        <div class=\"side\">\n          <div class=\"content\">\n            <div class=\"center\">6</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui segment\">\n    <div class=\"ui ignored icon direction buttons\">\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape2', animation: 'flip left'}\" class=\"ui button\"><i class=\"left long arrow icon\"></i></div>\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape2', animation: 'flip up'}\" class=\"ui button\"> <i class=\"up long arrow icon\"></i></div>\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape2', animation: 'flip down'}\" class=\"ui button\"> <i class=\"down long arrow icon\"></i></div>\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape2', animation: 'flip right'}\" class=\"ui button\"> <i class=\"right long arrow icon\"></i></div>\n      <div style=\"margin-left: 20px\" class=\"ui ignored icon direction buttons\">\n        <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape2', animation: 'flip over'}\" class=\"ui button\"> <i class=\"retweet icon\"></i></div>\n        <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape2', animation: 'flip back'}\" class=\"ui button\"> <i class=\"flipped retweet icon\">   </i></div>\n      </div>\n    </div>\n  </div>\n  <div style=\"min-height: 500px\" class=\"ui segment\">\n    <div id=\"shape2\" class=\"ui people shape\">\n      <div class=\"sides\">\n        <div class=\"side active\">\n          <div class=\"ui card\">\n            <div class=\"image\"><img src=\"media/images/steve.jpg\"/></div>\n            <div class=\"content\">\n              <div class=\"header\">Steve Jobes</div>\n              <div class=\"meta\"><a>Acquaintances</a></div>\n              <div class=\"description\">Steve Jobes is a fictional character designed to resemble someone familiar to readers.</div>\n            </div>\n            <div class=\"extra content\"><span class=\"right floated\">Joined in 2014</span><span><i class=\"user icon\"></i>151 Friends</span></div>\n          </div>\n        </div>\n        <div class=\"side\">\n          <div class=\"ui card\">\n            <div class=\"image\"><img src=\"media/images/rachel.png\"/></div>\n            <div class=\"content\"><a class=\"header\">Stevie Feliciano</a>\n              <div class=\"meta\"><span class=\"date\">Joined in 2014</span></div>\n              <div class=\"description\">Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.</div>\n            </div>\n            <div class=\"extra content\"><a><i class=\"user icon\"></i>22 Friends              </a></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui segment\">\n    <div class=\"ui ignored icon direction buttons\">\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape3', animation: 'flip left'}\" class=\"ui button\"><i class=\"left long arrow icon\"></i></div>\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape3', animation: 'flip up'}\" class=\"ui button\"> <i class=\"up long arrow icon\"></i></div>\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape3', animation: 'flip down'}\" class=\"ui button\"> <i class=\"down long arrow icon\"></i></div>\n      <div ui-shape=\"ui-shape\" [options]=\"{selector: '#shape3', animation: 'flip right'}\" class=\"ui button\"> <i class=\"right long arrow icon\">     </i></div>\n    </div><br/><br/>\n  </div>\n  <div style=\"min-height: 75px\" class=\"ui segment\">\n    <div id=\"shape3\" class=\"ui text shape\">\n      <div class=\"sides\">\n        <div class=\"ui header side\">Did you know? This side starts visible.</div>\n        <div class=\"ui header side\">Help, its another side!</div>\n        <div class=\"ui header side active\">This is the last side</div>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], partsShapes);
                return partsShapes;
            }());
            exports_1("partsShapes", partsShapes);
        }
    }
});
//------------------------------------
//# sourceMappingURL=semantic.parts.js.map