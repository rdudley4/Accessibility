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
import Member from './member';
const verge = require("verge");

// Font Awesome 5
import fontawesome from '@fortawesome/fontawesome';
import { faChevronDown, faDotCircle, faRocket, faUser } from '@fortawesome/fontawesome-pro-light';
import { faGooglePlay, faSpotify, faApple, faAmazon, faNode, faNpm, faUikit } from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(faChevronDown, faGooglePlay, faSpotify, faApple, faAmazon, faDotCircle, faRocket, faNode, faNpm, faUser, faUikit);

// Bind event handlers to icons after they have been converted to svg by Font Awesome.
fontawesome.dom.i2svg({ callback: Tools.iconsRendered });

// If the infobox exists on the page..
if (DOM.infoBox.base) {
  // Generate Test Members
  const members = [];
  Member.create(5, members);
  // Reset selected index to 0 on each page load.
  DOM.infoBox.select.options[0].selected = 'selected';
  // Bind member select event handler.
  DOM.infoBox.select.addEventListener('change', () => {
    const currentlySelected = Member.getName(DOM.infoBox.select);
    for (let member of members) {
      if (member.name === currentlySelected) {
        Member.update(member);
      }
    }
  });
}

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