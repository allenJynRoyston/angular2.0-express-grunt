declare var $;

// core
import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';

// Directives
import {uiSemanticDropdown} from '../../directives/semantic-ui-dropdown/dropdown.directive';
import {uiSemanticVisibility} from '../../directives/semantic-ui-visibility/visibility.directive';
import {uiSemanticSidebar} from '../../directives/semantic-ui-sidebar/sidebar.directive';
import {uiSemanticDimmer} from '../../directives/semantic-ui-dimmer/dimmer.directive';
import {uiSemanticShape} from '../../directives/semantic-ui-shape/shape.directive';
import {uiSemanticModal} from '../../directives/semantic-ui-modal/modal.directive';

@Component({
	directives: [
    CORE_DIRECTIVES,

		uiSemanticDropdown,
		uiSemanticVisibility,
		uiSemanticSidebar,
    uiSemanticDimmer,
		uiSemanticShape,
    uiSemanticModal
	],
  styles: [`
    .joke-container{
      width: 700px;
      height: 450px;
    }
  `],
  templateUrl: './views/home/home.html'
})
export class pageHome {


  constructor(private _router: Router){

  }

  linkTo(link:any){
     $(window).scrollTop(0)
     this._router.navigate(link);
  }


	public commentsAboutMe = [
		{quote: '... who?', from: 'Tim Cook', company: 'Apple', image: 'media/images/steve.jpg'},
		{quote: 'Never heard of him.', from: 'Bill Gates', company: 'Microsoft', image: 'media/images/billGates.jpg'},
		{quote: 'Yeah, no idea who that is.', from: 'Sundar Pichai', company: 'Google', image: 'media/images/google.png'},
    {quote: 'Who is that?', from: 'Susan Wojcicki', company: "YouTube", image: 'media/images/youtube.png'},
    {quote: 'You\'re growing into a real big thorn straight up into my ass.', from: 'Rick', company: "Science!", image: 'media/images/rick.jpg'}
	]

  public page = {
    imageModal: {
      image: 'media/images/self.jpg',
      description: "True story: I didn't actually say that."
    }
  }


	public content = [
    {title: "Responsive Design", image: "media/images/responsive.png", text: "Smart, responsive designs."},
    {title: "Webapp Specialist", image: "media/images/webapp.png", text: "The future of web development."},
    {title: "Mobile First", image: "media/images/mobilefirst.png", text: "Because we live in a mobile world."},
    {title: "Fullstack Developer", image: "media/images/fullstack.png", text: "I can do it all."}
  ]

  public jokes = [
    {image: "media/images/proself.png", setup: "Why did the web developer leave the restaurant?", punchline: "Because of the table layout."},
    {image: "media/images/proself.png", setup: "Why did the programmer quit his job?", punchline: "Because he didn't get arrays."},
    {image: "media/images/proself.png", setup: "How do you comfort a Javascript bug?", punchline: "You console it."},
    {image: "media/images/proself.png", setup: "You want to hear a Javascript joke?", punchline: "I'll callback later."},
    {image: "media/images/proself.png", setup: "Why was the JavaScript developer sad?", punchline: "Because he didn't Node how to Express himself."},
    {image: "media/images/proself.png", setup: "Why did the developer go broke?", punchline: "Because he used up all his cache."},
    {image: "media/images/proself.png", setup: "Why did the jQuery developer never have financial problems?", punchline: "Because he was in $.noConflict() mode."},
    {image: "media/images/proself.png", setup: "Why do Javascript programmers have to wear glasses?", punchline: "Because they don't C#."},
    {image: "media/images/proself.png", setup: "What's the object-orientated way to become wealthy?", punchline: "Inheritance."},
    {image: "media/images/proself.png", setup: "What do you call a programmer from Finland?", punchline: "Nerdic."},
    {image: "media/images/proself.png", setup: "What's a programmer's favorite hangout place?", punchline: "Foo Bar."},
  ]

}
