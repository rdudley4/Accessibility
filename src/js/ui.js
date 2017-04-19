// ==========================================================================
// User Interface Functionality
// ==========================================================================

// Dependencies
// ------------

import 'objectFitPolyfill/dist/objectFitPolyfill.min';
require('smoothscroll-polyfill').polyfill();
const nav = require('./nav');


// Module Variables
// ----------------

const landing = document.querySelector('.landing') || document.querySelector('.landing--static');
const landingVideo = document.querySelector('.landing__video');
const mainContent = document.getElementById('main-content');
const chevronDown = document.querySelector('.title__chevron-down');
const toTop = document.getElementById('top');


// Object-fit Polyfill
// -------------------

if (/Edge\/\d./i.test(navigator.userAgent) || !!navigator.userAgent.match(/Trident\/7\./)){
   // This is Microsoft Edge or IE 10-11
   if(landingVideo) {
     landingVideo.setAttribute('data-object-fit', 'cover');
   } 
}


// Event Handlers
// --------------

// Navigation Transition
window.addEventListener('scroll', () => {
  nav.transition(landing);
});

// Landing Chevron
if (chevronDown) {
  chevronDown.addEventListener('click', () => {
    mainContent.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// Footer - Back To Top
if (toTop) {
  toTop.addEventListener('click', () => {
    landing.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}