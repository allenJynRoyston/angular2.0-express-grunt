import {Component}     from 'angular2/core';

// directives
import {HighlightDirective} from './../../directives/highlight/highlight.directive';
import {uiSemanticAccordian} from './../../directives/semantic-ui-accordian/accordian.directive';
import {uiSemanticCheckbox} from './../../directives/semantic-ui-checkbox/checkbox.directive';
import {uiSemanticDimmer} from './../../directives/semantic-ui-dimmer/dimmer.directive';
import {uiSemanticDropdown} from './../../directives/semantic-ui-dropdown/dropdown.directive';
import {uiSemanticEmbed} from './../../directives/semantic-ui-embed/embed.directive';
import {uiSemanticModal} from './../../directives/semantic-ui-modal/modal.directive';
import {uiSemanticPopup} from './../../directives/semantic-ui-popup/popup.directive';
import {uiSemanticProgress} from './../../directives/semantic-ui-progress/progress.directive';
import {uiSemanticProgressButton} from './../../directives/semantic-ui-progress/progress.directive';
import {uiSemanticRating} from './../../directives/semantic-ui-rating/rating.directive';
import {uiSemanticSearch} from './../../directives/semantic-ui-search/search.directive';
import {uiSemanticShape} from './../../directives/semantic-ui-shape/shape.directive';
import {uiSemanticSidebar} from './../../directives/semantic-ui-sidebar/sidebar.directive';

@Component({
	directives: [
		HighlightDirective,
		uiSemanticAccordian,
		uiSemanticCheckbox,
		uiSemanticDimmer,
		uiSemanticDropdown,
		uiSemanticEmbed,
		uiSemanticModal,
		uiSemanticPopup,
		uiSemanticProgress,
		uiSemanticProgressButton,
		uiSemanticRating,
		uiSemanticSearch,
		uiSemanticShape,
		uiSemanticSidebar
	],
	templateUrl: './views/home/home.html'
})


export class homeComponent {

	mockContent = new Array;

	constructor(){

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
		  { title: 'Aland Islands' , id: 14},
		  { title: 'Azerbaijan', id: 15 },
		  { title: 'Bosnia' , id: 16},
		  { title: 'Barbados' , id: 17},
		  { title: 'Bangladesh', id: 18 },
		  { title: 'Belgium' , id: 19},
		  { title: 'Burkina Faso', id: 20 },
		  { title: 'Bulgaria', id: 21 },
		  { title: 'Bahrain', id: 22 },
		  { title: 'Burundi', id: 23 }
		];


  }

}
