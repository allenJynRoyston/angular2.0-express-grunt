// core
import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';

// page containers

// directives
import {uiSemanticDropdown} from '../../directives/semantic-ui-dropdown/dropdown.directive';
import {uiSemanticVisibility} from '../../directives/semantic-ui-visibility/visibility.directive';
import {uiSemanticSidebar} from '../../directives/semantic-ui-sidebar/sidebar.directive';
import {uiSemanticDimmer} from '../../directives/semantic-ui-dimmer/dimmer.directive';
import {uiSemanticShape} from '../../directives/semantic-ui-shape/shape.directive';
import {uiSemanticModal} from '../../directives/semantic-ui-modal/modal.directive';

// parts
import {partsFiller, loremIpsum, partsFooter} from '../../components/parts/boilerplate.parts';


declare var $;

@Component({
	directives: [
    CORE_DIRECTIVES,

		uiSemanticDropdown,
		uiSemanticVisibility,
		uiSemanticSidebar,
    uiSemanticDimmer,
		uiSemanticShape,
    uiSemanticModal,

    partsFiller,
    loremIpsum
	],
  styles: [`
    .shape-container{
      width: 700px;
      height: 350px;
    }
  `],
  templateUrl: './app/components/home/home.html'
})
export class homePage {


  constructor(private _router: Router){

  }

  linkTo(link:any){
     $(window).scrollTop(0)
     this._router.navigate(link);
  }


	public commentsAboutMe = [
		{quote: 'I am a quote.', from: 'Person A', company: 'Company A', image: 'media/images/rachel.png'},
    {quote: 'I am a quote.', from: 'Person B', company: "Company B", image: 'media/images/rachel.png'},
    {quote: 'I am a quote.', from: 'Person C', company: "Company B", image: 'media/images/rachel.png'}
	]

  public page = {
    imageModal: {
      image: 'media/images/ray.png',
      description: "True story: I didn't actually say that."
    }
  }


	public content = [
    {title: "Image 1",    image: "media/images/responsive.png",   text: "Content 1"},
    {title: "Image 2",    image: "media/images/webapp.png",       text: "Content 2"},
    {title: "Image 3",    image: "media/images/mobilefirst.png",  text: "Content 3"},
    {title: "Image 4",    image: "media/images/fullstack.png",    text: "Content 4"}
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
