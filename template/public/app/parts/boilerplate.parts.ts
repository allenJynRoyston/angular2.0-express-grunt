// core
import {Component} from 'angular2/core';

// directives
import {uiSemanticDropdown} from '../directives/semantic-ui-dropdown/dropdown.directive';
import {uiSemanticVisibility} from '../directives/semantic-ui-visibility/visibility.directive';


//------------------------------------
@Component({
  selector: 'parts-header',
  directives: [uiSemanticDropdown, uiSemanticVisibility],
  template: `
	<div class="ui main text container">
	  <div class="ui header">Tutorial</div>
	  <p>How to combine the best of both worlds!</p>
	</div>
	<div ui-visibility="ui-visibility" [options]="{type: 'fixed'}" class="ui borderless main menu">
	  <div class="ui text container">
	    <div href="#" class="header item">
				<img src="media/images/logo.png" class="logo"/> Ui-Semantic + Angular 2
			</div>
			<a href="#" class="item"> Directives</a>
			<a href="#" class="item">Articles</a>

			<a ui-dropdown="ui-dropdown" [options]="{on: 'hover'}" class="ui right floated dropdown item">Dropdown <i class="dropdown icon"></i>
	      <div class="menu">
	        <div class="item">Link Item</div>
	        <div class="item">Link Item</div>
	        <div class="divider"></div>
	        <div class="header">Header Item</div>
	        <div class="item"><i class="dropdown icon"></i>            Sub Menu
	          <div class="menu">
	            <div class="item">Link Item</div>
	            <div class="item">Link Item</div>
	          </div>
	        </div>
	        <div class="item">Link Item</div>
	      </div>
			</a>
	  </div>
	</div>
	`
})
export class partsHeader {}
//------------------------------------


//------------------------------------
@Component({
  selector: 'parts-sidebar',
  directives: [uiSemanticDropdown, uiSemanticVisibility],
  template: `
	<div ui-visibility="ui-visibility" [options]="{type: 'fixed',offset: 180}" class="overlay">
    <div class="ui labeled icon vertical menu"><a class="item"><i class="twitter icon"></i> Tweet</a><a class="item"><i class="facebook icon"></i> Share</a><a class="item"><i class="mail icon"></i> E-mail</a></div>
  </div>
  <p>123 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
	`
})
export class partsSidebar {}
//------------------------------------



//------------------------------------
@Component({
  selector: 'parts-filler',
  directives: [uiSemanticVisibility],
  template: `
	<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
	<img data-src="media/images/steve.jpg" ui-visibility="ui-visibility" [options]="{type: 'image', transition: 'vertical flip in', duration: 1500}" class="ui medium left floated image"/>
	<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
	<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
	<img data-src="media/images/rachel.png" ui-visibility="ui-visibility" [options]="{type: 'image',transition: 'vertical flip in',duration: 1500}" class="ui medium right floated image"/>    Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
	<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
  `
})
export class partsFiller {}
//------------------------------------

//------------------------------------
@Component({
  selector: 'parts-footer',
  directives: [uiSemanticVisibility],
  template: `
	<div class="ui inverted vertical footer segment">
	  <div class="ui center aligned container">
	    <div class="ui stackable inverted divided grid">

	    </div>
	    <div class="ui inverted section divider"></div><img src="media/images/logo.png" ui-visibility="ui-visibility" [options]="{type: 'image',transition: 'vertical flip in',duration: 500}" class="ui centered mini image"/>
	    <div class="ui horizontal inverted small divided link list"><a href="#" class="item">Site Map</a><a href="#" class="item">Contact Us</a><a href="#" class="item">Terms and Conditions</a><a href="#" class="item">Privacy Policy</a></div>
	  </div>
	</div>
  `
})
export class partsFooter {}
//------------------------------------
