// ==========================================================================
// Random Stuff
// ==========================================================================

// Faker (Dummy Data Generator)
const faker = require('faker');

// Member Class
import Member from './member';

// Images
import drums from '../img/icons/drum-set.svg';
import guitar from '../img/icons/electric-guitar.svg';
import keyboard from '../img/icons/keyboard.svg';
import mic from '../img/icons/microphone.svg';

export const Tools = {
  // Register mouse over events for each band member element.
  registerMemberEvents: function(domElm, memberInfo, infobox) {
    domElm.innerHTML = `${memberInfo.name} <span class="list__tag">${memberInfo.instName}</span>`;
    domElm.addEventListener('mouseover', function() {
      infobox.icon.src             = memberInfo.icon;
      infobox.instIcon.src         = memberInfo.instIcon;
      infobox.name.innerHTML       = memberInfo.name;
      infobox.age.innerHTML        = memberInfo.age;
      infobox.dob.innerHTML        = memberInfo.dob;
      infobox.town.innerHTML       = memberInfo.town;
      infobox.about.innerHTML      = memberInfo.about;
    });
  },
  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  genMembers: function(num) { 
    const members = [];
    const instruments = ['Drums', 'Guitar', 'Keyboard', 'Vocals'];
    for (let i = 0; i < num; i++) {
      // Member Information Variables
      const id         = this.randomNumber(1, 1000);
      const name       = `${ faker.name.firstName() } ${ faker.name.lastName() }`;
      const age        = this.randomNumber(20, 50);
      const dob        = new Date().getFullYear() - age;
      const avatar     = faker.image.avatar();
      const hometown   = `${ faker.address.city() }, ${ faker.address.state() }`;
      const about      = faker.lorem.paragraph();
      const instrument = instruments[i];
      // Instrument Icon
      let icon;
      switch (instrument) {
        case 'Drums':
          icon = drums;
          break;
        case 'Guitar':
          icon = guitar;
          break;
        case 'Keyboard':
          icon = keyboard;
          break;
        case 'Vocals':
          icon = mic;
          break;
      }
      // Create Member then push to members array
      const newMember = new Member(name, id, avatar, age, dob, hometown, about, instrument, icon);
      members.push(newMember);
    }
    return members;
  },
  createMembers: function({ amount, eventElms, infoBox } = {}) {
    const newMembers = this.genMembers(amount);
    for (let x = 0; x < newMembers.length; x++ ) {
      this.registerMemberEvents(eventElms[x], newMembers[x], infoBox);
    }
  },
  genDummyData: function(elms) {
    for (let elm of elms) {
      elm.innerHTML = faker.lorem.paragraph();
    }
  }
};