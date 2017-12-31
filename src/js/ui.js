// ==========================================================================
// User Interface Functionality
// ==========================================================================

// Dependencies
// ------------

// Modules
import smoothScroll from 'smoothscroll';
import { DOM } from './dom';
import { Nav } from './nav';
import { Anim } from './anim';
import { Tools } from './tools';
const verge = require("verge");

// Font Awesome 5
import fontawesome from '@fortawesome/fontawesome';
import { faChevronDown, faDotCircle, faRocket, faSlidersVSquare, faUsers, faStarExclamation } from '@fortawesome/fontawesome-pro-light';
import { faGooglePlay, faSpotify, faItunes, faSoundcloud } from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(faChevronDown, faGooglePlay, faSpotify, faItunes, faSoundcloud, faDotCircle, faRocket, faStarExclamation, faSlidersVSquare, faUsers);

// Bind event handlers to icons after they have been converted to svg by Font Awesome.
fontawesome.dom.i2svg({ callback: Tools.iconsRendered });

// Generate Test Members
Tools.createMembers({
  amount   : 4,
  memberElm: DOM.members,
  infoBox  : DOM.infoBox
});

// Populate Dummy Lorem
Tools.genDummyData(DOM.section.dummy);


// Event Handlers
// --------------

// Window Scroll
window.addEventListener('scroll', () => {
  // Nav Transition
  Nav.transition({
    bar       : DOM.nav.bar,
    links     : DOM.nav.links,
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

// Footer - Back To Top
if (DOM.generic.toTop) {
  DOM.generic.toTop.addEventListener('click', () => {
    smoothScroll(DOM.generic.landing, 1500);
  });
}