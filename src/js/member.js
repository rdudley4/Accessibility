// ==========================================================================
// Member Info Box
// ==========================================================================

import { data } from './data';
import { Tools } from './tools';
import { DOM } from './dom';

export default class Member {
  constructor(id, name, age, dob, town, about, avatar, instrument) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.town = town;
    this.about = about;
    this.avatar = avatar;
    this.instrument = instrument;
  }

  static generateData(index) {
    let generatedData = {};
    const age = Tools.randomNumber(20, 50);
    const dob = new Date().getFullYear() - age;
    generatedData.name = data.members.names[index];
    generatedData.age = age;
    generatedData.dob = dob;  
    generatedData.town = data.members.towns[index];
    generatedData.about = data.members.about[index];
    generatedData.avatar = data.members.icons[index];
    generatedData.instrument = data.members.instruments[index];
    generatedData.id = Tools.randomNumber(1, 100);

    return generatedData;
  }

  static create(amt, storage) {
    for (let i = 0; i < amt; i++) {
      // Generate new member data.
      const newMemberInfo = this.generateData(i);
      // Push new member object to the storage array.
      storage.push(new Member(newMemberInfo.id, newMemberInfo.name, newMemberInfo.age, newMemberInfo.dob, newMemberInfo.town, newMemberInfo.about, newMemberInfo.avatar, newMemberInfo.instrument));
      // Dynamically generate our select field with member names.
      DOM.infoBox.options[i].text = newMemberInfo.name;
    }
    console.log(storage);
  }

  static getName(memberSelect) {
    return memberSelect.options[memberSelect.selectedIndex].text;
  }
}