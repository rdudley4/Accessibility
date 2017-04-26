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
import { Anim } from './anim';


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

    // Navigation Elements
    // -------------------
    navBar: document.querySelector('.navbar'),
    navLinks: document.querySelectorAll('.nav__item'),

    // Animation Elements
    // ------------------ 
    // Album Formats
    formatContainer: document.querySelector('.section__list'),
    formatItems: document.querySelectorAll('.format'),
    // About The Band
    aboutContainer: document.querySelector('.section__about-the-band'),
    aboutItems: document.querySelectorAll('.about')
  },
  elementInViewport: el => {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
      
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }
};


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
  if (UI.elementInViewport(UI.elms.formatContainer) && Anim.notTriggered(UI.elms.formatItems[0], 'slide')) {
    Anim.play({
      animation: 'slide--3',
      nodeList: UI.elms.formatItems
    });
  }

  // Trigger About the Band Animation
  if (UI.elementInViewport(UI.elms.aboutContainer) && Anim.notTriggered(UI.elms.aboutItems[0], 'slide')) {
    Anim.play({
      animation: 'slide--3',
      nodeList: UI.elms.aboutItems
    });
  }
});

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