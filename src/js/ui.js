// ==========================================================================
// User Interface Functionality
// ==========================================================================



// Dependencies
// ------------

// Polyfills
require('smoothscroll-polyfill').polyfill();

// Modules
import { Nav } from './nav';
import { Anim } from "./anim";
import { loremGenerator } from './loremGenerator';
import { Tools } from './tools';
const verge = require("verge");

 

// UI Object
// ---------

export const UI = {
  elms: {
    // Generic Elements
    // ----------------
    landing: document.querySelector('.landing') || document.querySelector('.landing--static'),
    landingVideo: document.querySelector('.landing__video'),
    mainContent: document.getElementById('main-content'),
    chevronDown: document.querySelector('.title__chevron-down'),
    toTop: document.getElementById('top'),
    table: document.querySelector('.table'),
    liveShow: document.getElementById('text__live-show'),
    tourText: document.getElementById('text__tour'),

    // Member Elements
    // ---------------
    members: [
       document.querySelector('.drums'),
       document.querySelector('.bass'),
       document.querySelector('.guitar'),
       document.querySelector('.vocals')
    ],
    
    // Info Box Elements
    infoBox: {
      base: document.querySelector('.info-box'),
      name: document.getElementById('member-name'),
      icon: document.getElementById('info-box__icon'),
      age: document.getElementById('stat1'),
      dob: document.getElementById('stat2'),
      town: document.getElementById('stat3'),
      about: document.getElementById('member-about'),
      instIcon: document.getElementById('member-instIcon')
    },

    // Navigation Elements
    // -------------------
    navBar: document.querySelector('.navbar'),
    navLinks: document.querySelectorAll('.nav__item'),

    // Sections
    // ------------------ 
    sectionFormats: document.querySelector('.album__formats'),
    sectionAbout: document.querySelector('.about'),
  }
};


// Generate Random Lorem Text and Insert it to our page
// Using http://www.randomtext.me/ API

loremGenerator.genData(loremGenerator.genOptions.createString(), [UI.elms.liveShow, UI.elms.tourText]);


// Generate Test Members

Tools.createMembers({
  amount: 4,
  eventElms: UI.elms.members,
  infoBox: UI.elms.infoBox
});


// Event Handlers
// --------------

// Window Scroll
window.addEventListener('scroll', () => {
  // Nav Transition
  Nav.transition({
    navBar: UI.elms.navBar,
    navLinks: UI.elms.navLinks,
    relativeTo: UI.elms.landing
  });

  // Trigger Album Format Animation
  if (verge.inY(UI.elms.sectionFormats)) {
    Anim.play({
      animation: 'slide--3',
      section: UI.elms.sectionFormats,
      childSelector: '.content-box--animated'
    });
  }

  // Trigger About the Band Animation
  if (verge.inY(UI.elms.sectionAbout)) {
    Anim.play({
      animation: 'slide--3',
      section: UI.elms.sectionAbout,
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


