// ==========================================================================
// DOM References
// ==========================================================================

export const DOM = {
  // Generic Elements
  generic: {
    mainContent : document.getElementById('main-content'),
    landing     : document.querySelector('.landing') || document.querySelector('.landing--static'),
    landingVideo: document.querySelector('.landing__video'),
    table       : document.querySelector('.table')
  },

  // Navigation Elements
  nav: {
    bar      : document.querySelector('.navbar'),
    container: document.getElementById('nav-container'),
    links    : Array.from(document.querySelectorAll('.navbar-link'))
  },

  // Sections
  section: {
    formats: document.querySelector('.album__formats'),
    about  : document.querySelector('.about'),
    dummy  : Array.from(document.querySelectorAll('.dummy'))
  },

  // Member Elements
  members: [
    document.querySelector('.drums'),
    document.querySelector('.bass'),
    document.querySelector('.guitar'),
    document.querySelector('.vocals')
  ],

  // Info Box Elements
  infoBox: {
    base      : document.getElementById('current-members'),
    name      : document.getElementById('member-name'),
    icon      : document.getElementById('member-icon'),
    age       : document.getElementById('member-age'),
    dob       : document.getElementById('member-dob'),
    location  : document.getElementById('member-location'),
    about     : document.getElementById('member-about'),
    id        : document.getElementById('member-id'),
    select    : document.getElementById('select-box'),
    options   : Array.from(document.querySelectorAll('.member-option'))
  }
};