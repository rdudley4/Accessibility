// ==========================================================================
// Random Stuff
// ==========================================================================
'use strict';

import smoothScroll from 'smoothscroll';
import { DOM } from './dom';

export const Tools = {
  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  bindScrollEvents: function(elmData) {
    for (let data of elmData) {
      const { elm, scrollTo, eventType, duration } = data;
      if (elm) {
        elm.addEventListener(eventType, () => {
          smoothScroll(scrollTo, duration);
        });
      }
    }
  },
  iconsRendered: function() {
    const eventElms = [
      { 
        eventType: 'click',
        duration : 1000,
        // Landing -> To main content 
        elm      : document.getElementById('scrollDown'),
        scrollTo : DOM.generic.mainContent    
      },
      {
        eventType: 'click', 
        duration : 1500,
        // Footer -> Back to top
        elm      : document.getElementById('back-to-top'),
        scrollTo : DOM.generic.landing
      },
      {
        eventType: 'click', 
        duration : 1500,
        // Footer -> Back to main content
        elm      : document.getElementById('back-to-main'),
        scrollTo : DOM.generic.mainContent
      }
    ];

    document.getElementById('site-info').addEventListener('click', () => {
      console.log('[TSTMGR]: Site info has been clicked.');
    });

    Tools.bindScrollEvents(eventElms);
  },
  randomFromArray(array) {
    // Return a random index's value from the array that is passed in.
    return array[this.randomNumber(0, array.length - 1)];
  }
};