// ==========================================================================
// User Interface Functionality
// ==========================================================================

// Dependencies
// ------------

// Modules
import { DOM } from './dom';
import { Nav } from './nav';
import { Anim } from './anim';
import { Tools } from './tools';
import Member from './member';
import verge from 'verge';

// Font Awesome 5
import fontawesome from '@fortawesome/fontawesome';
import { faChevronDown, faDotCircle, faRocket, faUser, faArrowAltToTop, faHeadphones, faQuestion, faCaretRight } from '@fortawesome/fontawesome-pro-light';
import { faGooglePlay, faSpotify, faApple, faAmazon, faNode, faNpm, faUikit, faTwitter, faInstagram, faFacebookF } from '@fortawesome/fontawesome-free-brands';
// Add icons to font awesome library.
fontawesome.library.add(faChevronDown, faGooglePlay, faSpotify, faApple, faAmazon, faDotCircle, faRocket, faNode, faNpm, faUser, faUikit, faTwitter, faFacebookF, faInstagram, faArrowAltToTop, faHeadphones, faQuestion, faCaretRight);
// Bind event handlers to icons after they have been converted to svg by Font Awesome.
fontawesome.dom.i2svg({ callback: Tools.iconsRendered });

// Performance Testing;
// let timeStart = 0;
// let timeEnd = 0;

// If the infobox exists on the page..
if (DOM.infoBox.base) {
  // Generate Test Members
  const numToGenerate = 5;
  const members = new Array(numToGenerate).fill(0);

  // Create x amount of member objects with randomly generated data and place in members[]
  Member.create(numToGenerate, members);
  // Ensure first member is selected on each page load.
  DOM.infoBox.select.options[0].selected = 'selected';

  // DOM.infoBox.select [EVENT] -> 'change'
  DOM.infoBox.select.addEventListener('change', () => {
    // Get currently selected value of DOM.infoBox.select.
    const currentlySelected = Member.getName(DOM.infoBox.select);
    // Use array.prototype.find to return the first member object that satisfies the testing function.
    const memObj = members.find(function(member) {
      return member.name === currentlySelected;
    });
    // Update DOM with member's info
    Member.update(memObj);
  });
}

// Event Handlers
// --------------

// window [EVENT] -> 'scroll'
window.addEventListener('scroll', () => {
  // Nav Transition
  Nav.transition({
    nav       : DOM.nav,
    relativeTo: DOM.generic.landing
  });

  // Trigger Album Format Animation
  if (verge.inY(DOM.section.formats)) {
    Anim.play({
      section      : DOM.section.formats,
      animation    : 'slide--3',
      childSelector: '.content-box--animated'
    });
  }

  // Trigger About the Band Animation
  if (verge.inY(DOM.section.about)) {
    Anim.play({
      section      : DOM.section.about,
      animation    : 'slide--3',
      childSelector: '.content-box--animated'
    });
  }
}); 

// console.log(UI.elms.table.querySelectorAll('tr').length - 1);