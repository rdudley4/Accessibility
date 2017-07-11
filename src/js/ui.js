// ==========================================================================
// User Interface Functionality
// ==========================================================================



// Dependencies
// ------------

// Polyfills
import 'objectFitPolyfill/dist/objectFitPolyfill.min';
require('smoothscroll-polyfill').polyfill();

// Modules
import { Nav } from './nav';
import { Anim } from "./anim";
import { loremGenerator } from './loremGenerator';
const verge = require("verge");

// UI Object
// ---------

const UI = {
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

    // Navigation Elements
    // -------------------
    navBar: document.querySelector('.navbar'),
    navLinks: document.querySelectorAll('.nav__item'),

    // Sections
    // ------------------ 
    sectionFormats: document.querySelector('.album__formats'),
    sectionAbout: document.querySelector('.about'),
  },
  elementInViewport: el => {
    if (el && window.innerWidth >= 840) { // Make sure element exists on the page.
      const rect = el.getBoundingClientRect();
      
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
        rect.right <= ( window.innerWidth || document.documentElement.clientWidth )
      );
    }
  }     
};


// Generate Random Lorem Text and Insert it to our page
// Using http://www.randomtext.me/ API

const elmToGen = [UI.elms.liveShow, UI.elms.tourText];

loremGenerator.genData(loremGenerator.genOptions.createString(), elmToGen);


// Object-fit Polyfill
// -------------------

if (/Edge\/\d./i.test(navigator.userAgent) || !!navigator.userAgent.match(/Trident\/7\./)){
   // This is Microsoft Edge or IE 10-11
   if(UI.elms.landingVideo) {
     UI.elms.landingVideo.setAttribute('data-object-fit', 'cover');
   }
}


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

  // Trigger TD Scale Animation
    // if(verge.inY(UI.elms.table)) {
    //   Anim.play({
    //     animation: `grow--${UI.elms.table.querySelectorAll('tr').length - 1}`,
    //     section: UI.elms.table,
    //     childSelector: 'tr'
    //   });
    //   console.log(`Table animation fired.`);
    // }
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


