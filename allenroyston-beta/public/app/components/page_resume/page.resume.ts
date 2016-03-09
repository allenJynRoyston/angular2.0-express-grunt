// core
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

// Directives
import {uiSemanticDropdown} from '../../directives/semantic-ui-dropdown/dropdown.directive';
import {uiSemanticVisibility} from '../../directives/semantic-ui-visibility/visibility.directive';
import {uiSemanticSidebar} from '../../directives/semantic-ui-sidebar/sidebar.directive';
import {uiSemanticDimmer} from '../../directives/semantic-ui-dimmer/dimmer.directive';
import {uiSemanticShape} from '../../directives/semantic-ui-shape/shape.directive';
import {uiSemanticModal} from '../../directives/semantic-ui-modal/modal.directive';
import {uiSemanticTransitionOnload} from '../../directives/semantic-ui-transition/transition.directive';
import {uiSemanticTransitionButton} from '../../directives/semantic-ui-transition/transition.directive';
import {uiSemanticTransitionHover} from '../../directives/semantic-ui-transition/transition.directive';

@Component({
	directives: [
		CORE_DIRECTIVES,

		uiSemanticDropdown,
		uiSemanticVisibility,
		uiSemanticSidebar,
    uiSemanticDimmer,
		uiSemanticShape,
    uiSemanticModal,

		uiSemanticTransitionOnload,
		uiSemanticTransitionButton,
		uiSemanticTransitionHover
	],
  templateUrl: './app/components/page_resume/resume.html'
})
export class pageResume {

	constructor(){

  }

	public skills = [
		 {src: "media/logos/html_logo.png", title: "HTML5"},
		 {src: "media/logos/js_logo.png", title: "Javascript"},
		 {src: "media/logos/css_logo.png", title: "CSS 3"},
		 //----------------------
		 {src: "media/logos/angular_logo.png", title: "AngularJS", link: ""},
		 {src: "media/logos/angular2_logo.png", title: "AngularJS 2.0 Beta", link: ""},
		 {src: "media/logos/bootstrap_logo.jpg", title: "Bootstrap 2,3", link: ""},
		 {src: "media/logos/foundation_logo.png", title: "Foundation 5,6", link: ""},
		 {src: "media/logos/ionic_logo.png", title: "Ionic", link: ""},
		 {src: "media/logos/jquery_logo.jpg", title: "jQuery", link: ""},
		 {src: "media/logos/semantic_logo.png", title: "Semantic UI", link: ""},
		 {src: "media/logos/nod_logo.png", title: "NodeJS", link: ""},
		 {src: "media/logos/git_logo.png", title: "GIT", link: ""},
		 {src: "media/logos/phaser_logo.png", title: "Phaser", link: ""},
		 {src: "media/logos/lumx_logo.jpg", title: "LumX", link: ""},
		 {src: "media/logos/heroku_logo.jpg", title: "Heroku", link: ""},
		 {src: "media/logos/firebase_logo.png", title: "Firebase", link: ""},
		 {src: "media/logos/mysql_logo.jpg", title: "MySQL", link: ""},
		 {src: "media/logos/express_logo.png", title: "ExpressJS", link: ""},
		 {src: "media/logos/bower_logo.png", title: "Bower", link: ""},
		 {src: "media/logos/npm_logo.png", title: "Node Package Manager", link: ""},
		 {src: "media/logos/grunt_logo.png", title: "Grunt", link: ""},
		 {src: "media/logos/gulp_logo.png", title: "Gulp", link: ""},
		 {src: "media/logos/php_logo.png", title: "PHP", link: ""},
		 {src: "media/logos/mongo_logo.jpg", title: "MongoDB", link: ""},
		 {src: "media/logos/sass_logo.png", title: "SASS", link: ""},
		 {src: "media/logos/less_logo.png", title: "Less", link: ""},
		 {src: "media/logos/jade_logo.jpeg", title: "Jade", link: ""},
		 {src: "media/logos/mean_logo.png", title: "MEAN", link: ""},
		 {src: "media/logos/typescript_logo.png", title: "TypeScript", link: ""},
	 ]

}
