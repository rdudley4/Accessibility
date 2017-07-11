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
import Member from './member';
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

    // Member Elements
    // ---------------
    member: [
       document.querySelector('.drums'),
       document.querySelector('.bass'),
       document.querySelector('.guitar'),
       document.querySelector('.vocals')
    ],
    infoBox: {
      base: document.querySelector('.info-box'),
      name: document.getElementById('member-name'),
      age: document.getElementById('member-age'),
      instrument: document.getElementById('member-instrument')  
    },

    // Navigation Elements
    // -------------------
    navBar: document.querySelector('.navbar'),
    navLinks: document.querySelectorAll('.nav__item'),

    // Sections
    // ------------------ 
    sectionFormats: document.querySelector('.album__formats'),
    sectionAbout: document.querySelector('.about'),
  },
  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateMember: function(array, num, instruments) {
    for (let x = 0; x < num; x++) {
      const id = UI.randomNumber(1, 1000);
      const age = UI.randomNumber(20, 50);
      const newMember = new Member(`Member ${id}`, id, age, instruments[x]);
      array.push(newMember);
    }
  }
};


// Generate Random Lorem Text and Insert it to our page
// Using http://www.randomtext.me/ API

const elmToGen = [UI.elms.liveShow, UI.elms.tourText];

loremGenerator.genData(loremGenerator.genOptions.createString(), elmToGen);

// Placeholder Member Generation
// -----------------------------
let members = [];
const possibleInstruments = ['Drums', 'Guitar', 'Bass', 'Vocals'];
UI.generateMember(members, 4, possibleInstruments);
for (let x = 0; x < members.length; x++) {
  const currentElement = UI.elms.member[x];
  currentElement.innerHTML = `${members[x].name} <span class="list__tag">${members[x].instrument}</span>`;
  currentElement.addEventListener('mouseover', function() {
    UI.elms.infoBox.base.style.opacity = 1;
    UI.elms.infoBox.name.innerHTML = `${members[x].name}`;
    UI.elms.infoBox.age.innerHTML = `Age: <span class="stats_value">${members[x].age}</span>`;
    UI.elms.infoBox.instrument.innerHTML = `Instrument: <span class="stats_value">${members[x].instrument}</span>`;
  });
  currentElement.addEventListener('mouseleave', function() {
    UI.elms.infoBox.base.removeAttribute('style');
  });
} 

console.log(members);


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


