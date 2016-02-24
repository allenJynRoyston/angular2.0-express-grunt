// components
import {Component}     from 'angular2/core';
import {testComponent} from '../test/test';


// directives
@Component({
	directives: [testComponent],
	templateUrl: './views/about/about.html'
})

export class aboutComponent { }
