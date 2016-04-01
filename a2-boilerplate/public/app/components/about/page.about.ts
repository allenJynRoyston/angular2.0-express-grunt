// core
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

// components
import {gameComponent}  from '../../components/game/page.game';

// directives

// parts

// declare
@Component({
	directives: [
		CORE_DIRECTIVES,
		gameComponent
	],
  templateUrl: './app/components/about/about.html'
})
export class aboutPage {


}
