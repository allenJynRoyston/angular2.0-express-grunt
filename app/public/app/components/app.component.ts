import {Component} from 'angular2/core';
import {HighlightDirective} from './../directives/highlight/highlight.directive';
import {uiSemanticAccordian} from './../directives/semantic-ui-accordian/accordian.directive';
import {uiSemanticCheckbox} from './../directives/semantic-ui-checkbox/checkbox.directive';
import {uiSemanticDimmer} from './../directives/semantic-ui-dimmer/dimmer.directive';


@Component({
    selector: 'my-app',
    directives: [HighlightDirective, uiSemanticAccordian, uiSemanticCheckbox, uiSemanticDimmer],
    templateUrl: '../appViews/home.html'
})
export class AppComponent { }
