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

// Faker (Dummy Data Generator)
const faker = require('faker');

 

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
    albumDesc: document.getElementById('newAlbum__desc'),
    aboutDesc: document.getElementById('about__desc'),

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
      memberList: document.getElementById('member__list'),
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

// Infobox Animation Event Handler
// UI.elms.infoBox.memberList.addEventListener('mouseenter', function() {
//   UI.elms.infoBox.base.style.maxHeight = '1000px';
//   UI.elms.infoBox.base.style.padding   = '15px';
//   UI.elms.infoBox.base.style.boxShadow = '0 0 0 1px rgba(232,232,232,.36), 0 12px 24px 0 rgba(202,202,202,.22)';
// });

// UI.elms.infoBox.memberList.addEventListener('mouseleave', function(){
//   UI.elms.infoBox.base.removeAttribute('style');
// });

UI.elms.albumDesc.innerHTML = faker.lorem.paragraph();
UI.elms.aboutDesc.innerHTML = faker.lorem.paragraph();

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


