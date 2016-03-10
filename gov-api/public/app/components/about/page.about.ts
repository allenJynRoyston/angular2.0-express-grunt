// core
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

// page containers

// directives

// parts
import {fuelStations} from '../../apiComponents/fuelstations/fuelstations'

// declare

@Component({
	directives: [
		fuelStations,

		CORE_DIRECTIVES,
	],
  templateUrl: './app/components/about/about.html'
})
export class aboutPage {


}
