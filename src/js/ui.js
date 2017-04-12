// ==========================================================================
// User Interface Functionality
// ==========================================================================

// Dependencies
// ------------

require('smoothscroll-polyfill').polyfill();


// Global Variables
// ----------------

const landing = document.querySelector('.landing');
const mainContent = document.getElementById('main-content');
const chevronDown = document.querySelector('.title__chevron-down');
const toTop = document.getElementById('top');


// Event Handlers
// --------------

// Landing Chevron
chevronDown.addEventListener('click', function() {
  mainContent.scrollIntoView({
    behavior: "smooth",
    block: "end"
  });
});

// Footer - Back To Top
toTop.addEventListener('click', function() {
  landing.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});