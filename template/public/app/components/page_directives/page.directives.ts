import {Component}     from 'angular2/core';

// parts
import {
	partsHeader, partsSidebar, partsFooter, partsFiller
} from '../../parts/boilerplate.parts';

import {
	partsDropdown, partsAccordian, partsToggle,
	partsDimmer, partsEmbed, partsModal, partsPopup,
	partsProgress, partsRating, partsSearch, partsShapes
} from '../../parts/semantic.parts';

@Component({
	directives: [

		// boilerplate
		partsHeader,
		partsSidebar,
		partsFiller,
		partsFooter,

		// ui-semantic
		partsDropdown,
		partsAccordian,
		partsToggle,
		partsDimmer,
		partsEmbed,
		partsModal,
		partsPopup,
		partsProgress,
		partsRating,
		partsSearch,
		partsShapes,
	],
	templateUrl: './views/directives/directives.html'
})
export class pageDirectives {

	constructor(){

  }

}
