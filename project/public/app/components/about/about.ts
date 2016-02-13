import {Component}     from 'angular2/core';
// directives
import {HighlightDirective} from './../../directives/highlight/highlight.directive';
import {uiSemanticAccordian} from './../../directives/semantic-ui-accordian/accordian.directive';
import {uiSemanticCheckbox} from './../../directives/semantic-ui-checkbox/checkbox.directive';
import {uiSemanticDimmer} from './../../directives/semantic-ui-dimmer/dimmer.directive';

@Component({
	directives: [HighlightDirective, uiSemanticAccordian, uiSemanticCheckbox, uiSemanticDimmer],
	templateUrl: './views/about/about.html'
})

export class aboutComponent { }
