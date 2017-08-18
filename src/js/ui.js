// ==========================================================================
// User Interface Functionality
// ==========================================================================

// Dependencies
// ------------

// Modules
import { Nav } from './nav';
import { Anim } from './anim';
import { Tools } from './tools';
const verge = require("verge");
 

// UI Object
// ---------

export const UI = {
  // UI Page Node References [UI.elms]
  // ---------------------------------
  elms: {
    // Generic Elements
    toTop       : document.getElementById('top'),
    mainContent : document.getElementById('main-content'),
    landing     : document.querySelector('.landing') || document.querySelector('.landing--static'),
    landingVideo: document.querySelector('.landing__video'),
    chevronDown : document.querySelector('.title__chevron-down'),
    table       : document.querySelector('.table'),
    
    // Navigation Elements
    navBar  : document.querySelector('.navbar'),
    navLinks: Array.from( document.querySelectorAll('.nav__item') ),

    // Sections
    sectionFormats: document.querySelector('.album__formats'),
    sectionAbout  : document.querySelector('.about'),
    sectionDummy  : Array.from( document.querySelectorAll('.dummy') ),

    // Member Elements
    members: [
       document.querySelector('.drums'),
       document.querySelector('.bass'),
       document.querySelector('.guitar'),
       document.querySelector('.vocals')
    ],
    
    // Info Box Elements
    infoBox: {
      base      : document.querySelector('.info-box'),
      memberList: document.getElementById('member__list'),
      name      : document.getElementById('member-name'),
      icon      : document.getElementById('info-box__icon'),
      age       : document.getElementById('stat1'),
      dob       : document.getElementById('stat2'),
      town      : document.getElementById('stat3'),
      about     : document.getElementById('member-about'),
      instIcon  : document.getElementById('member-instIcon')
    }
  }
};


// Generate Test Members
Tools.createMembers({
  amount   : 4,
  eventElms: UI.elms.members,
  infoBox  : UI.elms.infoBox
});

// Populate Dummy Lorem
Tools.genDummyData(UI.elms.sectionDummy);


// Event Handlers
// --------------

// Infobox Animation Event Handler - NEED TO FIX / REMOVE
// UI.elms.infoBox.memberList.addEventListener('mouseenter', function() {
//   UI.elms.infoBox.base.style.maxHeight = '1000px';
//   UI.elms.infoBox.base.style.padding   = '15px';
//   UI.elms.infoBox.base.style.boxShadow = '0 0 0 1px rgba(232,232,232,.36), 0 12px 24px 0 rgba(202,202,202,.22)';
// });

// UI.elms.infoBox.memberList.addEventListener('mouseleave', function(){
//   UI.elms.infoBox.base.removeAttribute('style');
// });


// Window Scroll
window.addEventListener('scroll', () => {
  // Nav Transition
  Nav.transition({
    navBar    : UI.elms.navBar,
    navLinks  : UI.elms.navLinks,
    relativeTo: UI.elms.landing
  });

  // Trigger Album Format Animation
  if (verge.inY(UI.elms.sectionFormats)) {
    Anim.play({
      section      : UI.elms.sectionFormats,
      animation    : 'slide--3',
      childSelector: '.content-box--animated'
    });
  }

  // Trigger About the Band Animation
  if (verge.inY(UI.elms.sectionAbout)) {
    Anim.play({
      section: UI.elms.sectionAbout,
      animation: 'slide--3',
      childSelector: '.content-box--animated'
    });
  }
}); 

// console.log(UI.elms.table.querySelectorAll('tr').length - 1);

// Landing Chevron
if (UI.elms.chevronDown) {
  UI.elms.chevronDown.addEventListener('click', () => {
    UI.elms.mainContent.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// Footer - Back To Top
if (UI.elms.toTop) {
  UI.elms.toTop.addEventListener('click', () => {
    UI.elms.landing.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}


