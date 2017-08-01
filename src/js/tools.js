// ==========================================================================
// Random Stuff
// ==========================================================================

// Verge
const verge = require('verge');

// Member Class
import Member from './member';

// Images
import helmet from '../img/icons/rank1.svg';
import beer from '../img/icons/rank2.svg';
import shield from '../img/icons/rank3.svg';
import viking from '../img/icons/rank4.svg';

const firstNames = [
  'Bob',
  'Bill',
  'David',
  'Joel',
  'Steven',
  'Carl',
  'Alfredo',
  'Jay',
  'Kevin',
  'John',
  'Michael',
  'William',
  'Blake',
  'Israel',
  'Daniel',
  'Joe',
  'Morris',
  'Connie',
  'Kyle',
  'Nancy',
  'Peggy',
  'Alice'
];

const lastNames = [
  'Wilson',
  'Lopes',
  'Peeples',
  'Potter',
  'Franklin',
  'Roland',
  'Byler',
  'Young',
  'Robbins',
  'Morton',
  'Miller',
  'Dawson',
  'Meserve',
  'Garcia',
  'Castillo',
  'Kellogg',
  'Davis',
  'Mathewson',
  'Clark'
];

const streetNames = [
  'Petunia Way',
  'Farland Street',
  'Grant Street',
  'Badger Pond Lane',
  'Grove Avenue',
  'Fleming Street',
  'Linden Avenue',
  'Abia Martin Drive',
  'Augusta Park',
  'Archwood Avenue',
  'Daylene Drive',
  'Traders Alley',
  'Oakdale Avenue',
  'Masonic Hill Road',
  'Henery Street',
  'Walnut Avenue',
  'Rogers Street',
  'Renwick Drive'
];

export const Tools = {
  registerMemberEvents: function(domElm, memberInfo, infobox) {
    domElm.innerHTML = `${memberInfo.name} <span class="list__tag">${memberInfo.instrument}</span>`;
    domElm.addEventListener('mouseover', function() {
      if (verge.mq('(min-width: 840px)')) {
        infobox.base.style.opacity = 1;
      }
      infobox.icon.src = memberInfo.icon;
      infobox.name.innerHTML = memberInfo.name;
      infobox.age.innerHTML = `${ memberInfo.age } Years Old`;
      infobox.dob.innerHTML = memberInfo.dob;
      infobox.town.innerHTML = memberInfo.town;
      infobox.instrument.innerHTML = memberInfo.instrument;
    });
    domElm.addEventListener('mouseleave', function() {
      infobox.base.removeAttribute('style');
    });
  },
  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateMember: function(num) {
    let members = [];
    for (let x = 0; x < num; x++) {
      const id = this.randomNumber(1, 1000);
      const first = firstNames[this.randomNumber(0, firstNames.length - 1)];
      const last = lastNames[this.randomNumber(0, lastNames.length - 1)]; 
      const age = this.randomNumber(20, 50);
      const dob = new Date().getFullYear() - age;
      const address = `${this.randomNumber(1, 9999)} ${streetNames[this.randomNumber(0, streetNames.length - 1)]}`;
      const instrument = ['Drums', 'Guitar', 'Bass', 'Vocals'];
      let icon;
      switch (instrument[x]) {
        case 'Drums':
          icon = helmet;
          break;
        case 'Guitar':
          icon = beer;
          break;
        case 'Bass':
          icon = shield;
          break;
        case 'Vocals':
          icon = viking;
          break;
      }
      const newMember = new Member(`${ first } ${ last }`, id, icon, age, dob, address, instrument[x]);
      members.push(newMember);
    }
    return members;
  },
  createMembers: function({ amount, eventElms, infoBox } = {}) {
    const newMembers = this.generateMember(amount);
    for (let x = 0; x < newMembers.length; x++ ) {
      this.registerMemberEvents(eventElms[x], newMembers[x], infoBox);
      console.log(eventElms[x], newMembers[x]);
    }
  }
};