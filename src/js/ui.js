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
import smoothScroll from 'smoothscroll';
const verge = require("verge");

// Generate Test Members
Tools.createMembers({
  amount   : 4,
  eventElms: DOM.members,
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
    navBar    : DOM.nav.bar,
    navLinks  : DOM.nav.links,
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

// Landing Chevron
if (DOM.generic.chevronDown) {
  DOM.generic.chevronDown.addEventListener('click', () => {
    smoothScroll(DOM.generic.mainContent, 1000);
  });
}

// Footer - Back To Top
if (DOM.generic.toTop) {
  DOM.generic.toTop.addEventListener('click', () => {
    smoothScroll(DOM.generic.landing, 1500);
  });
}
