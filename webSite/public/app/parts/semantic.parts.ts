import {Component} from 'angular2/core';

// directives
import {HighlightDirective} from './../directives/highlight/highlight.directive';
import {uiSemanticAccordian} from './../directives/semantic-ui-accordian/accordian.directive';
import {uiSemanticCheckbox} from './../directives/semantic-ui-checkbox/checkbox.directive';
import {uiSemanticDimmer} from './../directives/semantic-ui-dimmer/dimmer.directive';
import {uiSemanticDimmerButton} from './../directives/semantic-ui-dimmer/dimmer.directive';
import {uiSemanticDropdown} from './../directives/semantic-ui-dropdown/dropdown.directive';
import {uiSemanticEmbed} from './../directives/semantic-ui-embed/embed.directive';
import {uiSemanticModal} from './../directives/semantic-ui-modal/modal.directive';
import {uiSemanticPopup} from './../directives/semantic-ui-popup/popup.directive';
import {uiSemanticProgress} from './../directives/semantic-ui-progress/progress.directive';
import {uiSemanticProgressButton} from './../directives/semantic-ui-progress/progress.directive';
import {uiSemanticRating} from './../directives/semantic-ui-rating/rating.directive';
import {uiSemanticSearch} from './../directives/semantic-ui-search/search.directive';
import {uiSemanticShape} from './../directives/semantic-ui-shape/shape.directive';
import {uiSemanticSidebar} from './../directives/semantic-ui-sidebar/sidebar.directive';
import {uiSemanticTab} from './../directives/semantic-ui-tab/tab.directive';
import {uiSemanticTransitionOnload} from './../directives/semantic-ui-transition/transition.directive';
import {uiSemanticTransitionButton} from './../directives/semantic-ui-transition/transition.directive';
import {uiSemanticTransitionHover} from './../directives/semantic-ui-transition/transition.directive';


//------------------------------------
@Component({
  selector: 'parts-dropdown',
  directives: [uiSemanticDropdown],
  template: `
  <select multiple="multiple" ui-dropdown [options]="{maxSelections: 4}" class="ui fluid normal dropdown">
      <option value="">Skills</option>
      <option value="angular">Angular</option>
      <option value="css">CSS</option>
      <option value="design">Graphic Design</option>
      <option value="ember">Ember</option>
      <option value="html">HTML</option>
      <option value="ia">Information Architecture</option>
      <option value="javascript">Javascript</option>
      <option value="mech">Mechanical Engineering</option>
      <option value="meteor">Meteor</option>
      <option value="node">NodeJS</option>
      <option value="plumbing">Plumbing</option>
      <option value="python">Python</option>
      <option value="rails">Rails</option>
      <option value="react">React</option>
      <option value="repair">Kitchen Repair</option>
      <option value="ruby">Ruby</option>
      <option value="ui">UI Design</option>
      <option value="ux">User Experience</option>
  </select>
  `
})
export class partsDropdown {}
//------------------------------------

//------------------------------------
@Component({
  selector: 'parts-accordian',
  directives: [uiSemanticAccordian],
  template: `
	<div ui-accordian class="ui styled fluid accordion">
		<div class="active title"><i class="dropdown icon"></i>    What is a dog?</div>
		<div class="active content">
			<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
		</div>
		<div class="title"><i class="dropdown icon"></i>    What kinds of dogs are there?</div>
		<div class="content">
			<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
		</div>
		<div class="title"><i class="dropdown icon"></i>    How do you acquire a dog?</div>
		<div class="content">
			<p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
			<p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
		</div>
	</div>
  `
})
export class partsAccordian {}
//------------------------------------


//------------------------------------
@Component({
  selector: 'parts-toggle',
  directives: [uiSemanticCheckbox],
  template: `
  <div ui-checkbox [toggle]="true" class="ui toggle checkbox">
    <input type="checkbox"/>
    <label>Is Toggled!</label>
  </div>
  `
})
export class partsToggle {}
//------------------------------------


//------------------------------------
@Component({
  selector: 'parts-dimmer',
  directives: [uiSemanticDimmer, uiSemanticDimmerButton],
  template: `
  <div class="ui grid">
    <div class="four wide column">
      <div ui-dimmer="ui-dimmer" class="ui card blurring">
        <div class="image"><img src="media/images/rachel.png"/></div>
        <div class="content"><a class="header">Click </a>
          <div class="meta"><span class="date">to blur</span></div>
        </div>
        <div class="extra content"><a><i class="user icon"></i>      22 Friends</a></div>
      </div>
    </div>
    <div class="four wide column">
      <div ui-dimmer="ui-dimmer" [options]="{on: 'hover'}" class="ui card blurring">
        <div class="image"><img src="media/images/rachel.png"/></div>
        <div class="content"><a class="header">Hover</a>
          <div class="meta"><span class="date">to blur</span></div>
        </div>
        <div class="extra content"><a><i class="user icon"></i>      22 Friends  </a></div>
      </div>
    </div>
    <div class="four wide column">
      <div ui-dimmer="ui-dimmer" class="ui card blurring">
        <div class="ui dimmer">
          <div class="content">
            <div class="center">
              <h2 class="ui inverted icon header"><i class="heart icon"></i>          Dimmed Message!      </h2>
            </div>
          </div>
        </div>
        <div class="image"><img src="media/images/rachel.png"/></div>
        <div class="content"><a class="header">With Content</a>
          <div class="meta"><span class="date">to blur</span></div>
        </div>
        <div class="extra content"><a><i class="user icon"></i>      22 Friends     </a></div>
      </div>
    </div>
    <div class="four wide column">
      <div id="dimExample" class="ui card blurring">
        <div class="image"><img src="media/images/rachel.png"/></div>
        <div class="content"><a class="header">Click Button</a>
          <div class="meta"><span class="date">to blur</span></div>
        </div>
        <div class="extra content">
          <div ui-dimmer-button="ui-dimmer-button" [options]="{selector: '#dimExample'}" class="ui button">Dim Button            </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class partsDimmer {}
//------------------------------------



//------------------------------------
@Component({
  selector: 'parts-embed',
  directives: [uiSemanticEmbed],
  template: `
    <div ui-embed="ui-embed" [options]="{source: 'youtube', id: 'YdbGXHwHAko', placeholder: 'media/images/blackgradientstripes.png'}" class="ui segment ui embed"></div>
  `
})
export class partsEmbed {}
//------------------------------------

//------------------------------------
@Component({
  selector: 'parts-modal',
  directives: [uiSemanticModal],
  template: `
  <div ui-modal="ui-modal" [options]="{selector: '#modal1', blurring: true, transition: 'scale'}" class="ui button">Open Modal</div>
  <div id="modal1" class="ui modal"><i class="close icon"></i>
    <div class="header">Profile Picture</div>
    <div class="image content">
      <div class="ui medium image"><img src="media/images/rachel.png"/></div>
      <div class="description">
        <div class="ui header">We've auto-chosen a profile image for you.</div>
        <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </div>
    </div>
    <div class="actions">
      <div class="ui black deny button">Nope</div>
      <div class="ui positive right labeled icon button">Yep, that's me<i class="checkmark icon"></i></div>
    </div>
  </div>
  `
})
export class partsModal {}
//------------------------------------

//------------------------------------
@Component({
  selector: 'parts-popup',
  directives: [uiSemanticPopup],
  template: `
  <div class="ui popup bottom left transition hidden">
    <div class="ui four column relaxed divided grid">
      <div class="column">
        <h4 class="ui header">Fabrics</h4>
        <div class="ui link list"><a class="item">Cashmere</a><a class="item">Linen</a><a class="item">Cotton</a><a class="item">Viscose</a></div>
      </div>
    </div>
  </div><a ui-popup="ui-popup" [options]="{inline: true, hoverable: true, position: 'top left', delay: {show: 100, hide: 800}}" class="browse item">Browse<i class="dropdown icon"></i></a>
  <div class="ui popup bottom left transition hidden">
    <div class="ui four column relaxed divided grid">
      <div class="column">
        <h4 class="ui header">Types</h4>
        <div class="ui link list"><a class="item">Knitwear</a><a class="item">Outerwear</a><a class="item">Pants</a><a class="item">Shoes</a></div>
      </div>
    </div>
  </div>

  `
})
export class partsPopup {}
//------------------------------------


//------------------------------------
@Component({
  selector: 'parts-progress',
  directives: [uiSemanticProgress, uiSemanticProgressButton],
  template: `
  <div id="progress1" ui-progress="ui-progress" [options]="{percent: 0, total: 4, text: {active: 'Adding {value} of {total} photos | {left} left to go | {percent}%', success: '{total} photos uploaded!'}}" class="ui tiny teal progress">
    <div class="bar"></div>
    <div class="label"></div>
  </div>
  <div class="ui buttons">
    <div ui-progress-button="ui-progress-button" [options]="{selector: '#progress1', type: 'decrement'}" class="button ui negative">-</div>
    <div class="or"></div>
    <div ui-progress-button="ui-progress-button" [options]="{selector: '#progress1', type: 'increment'}" class="button ui positive">+</div>
  </div>
  <div class="ui inverted segment">
    <div id="progress2" ui-progress="ui-progress" [options]="{percent: 0, total: 10, text: {active: 'Adding {value} of {total} photos | {left} left to go | {percent}%', success: '{total} photos uploaded!'}}" class="inverted ui progress yellow">
      <div class="bar"></div>
      <div class="label"></div>
    </div>
    <div class="ui buttons">
      <div ui-progress-button="ui-progress-button" [options]="{selector: '#progress2', type: 'decrement'}" class="button ui negative">-</div>
      <div class="or"></div>
      <div ui-progress-button="ui-progress-button" [options]="{selector: '#progress2', type: 'increment'}" class="button ui positive">+</div>
    </div>
  </div>
  <div class="ui segment">
    <div class="ui card">
      <div class="image"><img src="media/images/rachel.png"/></div>
      <div class="content"><a class="header">Project</a>
        <div class="meta"><span class="date">Started in 2014</span></div>
      </div>
      <div class="extra content"><a><i class="user icon"></i>      22 Friends</a></div>
      <div id="progress3" ui-progress="ui-progress" [options]="{percent: 0, total: 3, text: {active: 'Adding {value} of {total} photos | {left} left to go | {percent}%', success: '{total} photos uploaded!'}}" class="ui top attached progress orange">
        <div class="bar"></div>
        <div class="label"></div>
      </div>
      <div class="ui buttons">
        <div ui-progress-button="ui-progress-button" [options]="{selector: '#progress3', type: 'decrement'}" class="button ui negative">-</div>
        <div class="or"></div>
        <div ui-progress-button="ui-progress-button" [options]="{selector: '#progress3', type: 'increment'}" class="button ui positive">+</div>
      </div>
    </div>
  </div>
  `
})
export class partsProgress {}
//------------------------------------


//------------------------------------
@Component({
  selector: 'parts-ratings',
  directives: [uiSemanticRating],
  template: `
  <div class="ui segment">
    <div ui-rating="ui-rating" [options]="{initialRating: 3, maxRating: 10}" class="ui star rating"></div>
  </div>
  <div class="ui segment">
    <div ui-rating="ui-rating" [options]="{initialRating: 3, maxRating: 10}" class="ui heart rating"></div>
  </div>
  `
})
export class partsRating {}
//------------------------------------


//------------------------------------
@Component({
  selector: 'parts-search',
  directives: [uiSemanticSearch],
  template: `
  <div class="ui segment">
    <div ui-search="ui-search" [options]="{source: mockContent, searchFields: ['title'], minCharacters: 1, transition: 'scale'}" class="ui search">
      <div class="ui icon input">
        <input type="text" placeholder="Local Search" class="prompt"/><i class="search icon"></i>
      </div>
      <div class="results"></div>
    </div>
  </div>
  <div class="ui segment">
    <div ui-search="ui-search" [options]="{apiSettings: {url: '//api.github.com/search/repositories?q={query}'},fields: {results: 'items',  title :'name', url: 'html_url'}, minCharacters : 3}" class="ui search">
      <div class="ui left icon input">
        <input ui-search="ui-search" type="text" placeholder="Search GitHub" class="prompt"/><i class="github icon"></i>
      </div>
      <div class="results"></div>
    </div>
  </div>
  `
})
export class partsSearch {
  mockContent:any;

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
//------------------------------------



//------------------------------------
@Component({
  selector: 'parts-shapes',
  directives: [uiSemanticShape],
  template: `
  <div class="ui segment">
    <div class="ui ignored icon direction buttons">
      <div ui-shape="ui-shape" [options]="{selector: '#shape1', animation: 'flip left'}" class="ui button"><i class="left long arrow icon"></i></div>
      <div ui-shape="ui-shape" [options]="{selector: '#shape1', animation: 'flip up'}" class="ui button"> <i class="up long arrow icon"></i></div>
      <div ui-shape="ui-shape" [options]="{selector: '#shape1', animation: 'flip down'}" class="ui button"> <i class="down long arrow icon"></i></div>
      <div ui-shape="ui-shape" [options]="{selector: '#shape1', animation: 'flip right'}" class="ui button"> <i class="right long arrow icon"></i></div>
      <div style="margin-left: 20px" class="ui ignored icon direction buttons">
        <div ui-shape="ui-shape" [options]="{selector: '#shape1', animation: 'flip over'}" class="ui button"> <i class="retweet icon"></i></div>
        <div ui-shape="ui-shape" [options]="{selector: '#shape1', animation: 'flip back'}" class="ui button"> <i class="flipped retweet icon"></i></div>
      </div>
    </div>
  </div>
  <div style="min-height: 250px" class="ui segment">
    <div id="shape1" class="ui cube shape">
      <div class="sides">
        <div class="active side">
          <div class="content">
            <div class="center">1</div>
          </div>
        </div>
        <div class="side">
          <div class="content">
            <div class="center">2</div>
          </div>
        </div>
        <div class="side">
          <div class="content">
            <div class="center">3</div>
          </div>
        </div>
        <div class="side">
          <div class="content">
            <div class="center">4</div>
          </div>
        </div>
        <div class="side">
          <div class="content">
            <div class="center">5</div>
          </div>
        </div>
        <div class="side">
          <div class="content">
            <div class="center">6</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui segment">
    <div class="ui ignored icon direction buttons">
      <div ui-shape="ui-shape" [options]="{selector: '#shape2', animation: 'flip left'}" class="ui button"><i class="left long arrow icon"></i></div>
      <div ui-shape="ui-shape" [options]="{selector: '#shape2', animation: 'flip up'}" class="ui button"> <i class="up long arrow icon"></i></div>
      <div ui-shape="ui-shape" [options]="{selector: '#shape2', animation: 'flip down'}" class="ui button"> <i class="down long arrow icon"></i></div>
      <div ui-shape="ui-shape" [options]="{selector: '#shape2', animation: 'flip right'}" class="ui button"> <i class="right long arrow icon"></i></div>
      <div style="margin-left: 20px" class="ui ignored icon direction buttons">
        <div ui-shape="ui-shape" [options]="{selector: '#shape2', animation: 'flip over'}" class="ui button"> <i class="retweet icon"></i></div>
        <div ui-shape="ui-shape" [options]="{selector: '#shape2', animation: 'flip back'}" class="ui button"> <i class="flipped retweet icon">   </i></div>
      </div>
    </div>
  </div>
  <div style="min-height: 500px" class="ui segment">
    <div id="shape2" class="ui people shape">
      <div class="sides">
        <div class="side active">
          <div class="ui card">
            <div class="image"><img src="media/images/steve.jpg"/></div>
            <div class="content">
              <div class="header">Steve Jobes</div>
              <div class="meta"><a>Acquaintances</a></div>
              <div class="description">Steve Jobes is a fictional character designed to resemble someone familiar to readers.</div>
            </div>
            <div class="extra content"><span class="right floated">Joined in 2014</span><span><i class="user icon"></i>151 Friends</span></div>
          </div>
        </div>
        <div class="side">
          <div class="ui card">
            <div class="image"><img src="media/images/rachel.png"/></div>
            <div class="content"><a class="header">Stevie Feliciano</a>
              <div class="meta"><span class="date">Joined in 2014</span></div>
              <div class="description">Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.</div>
            </div>
            <div class="extra content"><a><i class="user icon"></i>22 Friends              </a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui segment">
    <div class="ui ignored icon direction buttons">
      <div ui-shape="ui-shape" [options]="{selector: '#shape3', animation: 'flip left'}" class="ui button"><i class="left long arrow icon"></i></div>
      <div ui-shape="ui-shape" [options]="{selector: '#shape3', animation: 'flip up'}" class="ui button"> <i class="up long arrow icon"></i></div>
      <div ui-shape="ui-shape" [options]="{selector: '#shape3', animation: 'flip down'}" class="ui button"> <i class="down long arrow icon"></i></div>
      <div ui-shape="ui-shape" [options]="{selector: '#shape3', animation: 'flip right'}" class="ui button"> <i class="right long arrow icon">     </i></div>
    </div><br/><br/>
  </div>
  <div style="min-height: 75px" class="ui segment">
    <div id="shape3" class="ui text shape">
      <div class="sides">
        <div class="ui header side">Did you know? This side starts visible.</div>
        <div class="ui header side">Help, its another side!</div>
        <div class="ui header side active">This is the last side</div>
      </div>
    </div>
  </div>
  `
})
export class partsShapes {}
//------------------------------------
