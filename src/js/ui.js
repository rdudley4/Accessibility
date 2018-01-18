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
let timeStart = 0;
let timeEnd = 0;

// If the infobox exists on the page..
if (DOM.infoBox.base) {
  const numToGenerate = 5;
  // Generate Test Members
  const members = new Array(numToGenerate);
  let i = 0;
  while (i < numToGenerate) {
    members[i] = 0;
    i += 1;
  }
  timeStart = performance.now();
  Member.create(numToGenerate, members);
  timeEnd = performance.now();
  console.log(Tools.timeToExecute('Member.create', timeStart, timeEnd));
  // Reset selected index to 0 on each page load.
  DOM.infoBox.select.options[0].selected = 'selected';
  // Bind member select event handler.
  DOM.infoBox.select.addEventListener('change', () => {
    const currentlySelected = Member.getName(DOM.infoBox.select);
    const memObj = members.find(function(member) {
      return member.name === currentlySelected;
    });
    // Update DOM
    Member.update(memObj);
  });
}

// Event Handlers
// --------------

// Window Scroll
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