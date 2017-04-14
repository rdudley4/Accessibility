// ==========================================================================
// User Interface Functionality
// ==========================================================================

// Dependencies
// ------------

require('smoothscroll-polyfill').polyfill();
const objectFitVideos = require('object-fit-videos/dist/object-fit-videos.min');


// Global Variables
// ----------------

const landing = document.querySelector('.landing') || document.querySelector('.landing--static');
const mainContent = document.getElementById('main-content');
const chevronDown = document.querySelector('.title__chevron-down');
const toTop = document.getElementById('top');



// Event Handlers
// --------------

// Landing Chevron
if (chevronDown) {
  chevronDown.addEventListener('click', function() {
    mainContent.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// Footer - Back To Top
if (toTop) {
  toTop.addEventListener('click', function() {
    landing.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}


// Object-fit Videos Polyfill
// --------------------------

objectFitVideos();