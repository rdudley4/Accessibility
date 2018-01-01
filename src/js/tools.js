// ==========================================================================
// Random Stuff
// ==========================================================================
'use strict';

// Faker (Dummy Data Generator)
// const faker = require('faker');

import smoothScroll from 'smoothscroll';
import { DOM } from './dom';

export const Tools = {
  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  iconsRendered: function() {
    // Create reference to our chevron after it has been rendered as an SVG
    DOM.generic.scrollDown = document.getElementById('scrollDown');

    // Bind smoothscroll event on click to the chevron image.
    if (DOM.generic.scrollDown) {
      DOM.generic.scrollDown.addEventListener('click', () => {
        smoothScroll(DOM.generic.mainContent, 1000);
      }); 
    }
  }
};