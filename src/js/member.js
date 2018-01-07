// ==========================================================================
// Member Info Box
// ==========================================================================

import { data } from './data';
import { Tools } from './tools';
import { DOM } from './dom';

export default class Member {
  constructor(id, name, age, dob, location, about, avatar) {
    this.id         = id;
    this.name       = name;
    this.age        = age;
    this.dob        = dob;
    this.location   = location;
    this.about      = about;
    this.avatar     = avatar;
  }

  static generateData(index) {
    let generatedData = {};
    // Generate some random filler data.
    const id    = Tools.randomNumber(1, 500);
    const age   = Tools.randomNumber(20, 50);
    const dob   = new Date().getFullYear() - age;
    const first = data.gen.first[Tools.randomNumber(0, data.gen.first.length - 1)];
    const last  = data.gen.last[Tools.randomNumber(0, data.gen.last.length - 1)];
    const location = data.gen.location[Tools.randomNumber(0, data.gen.location.length - 1)];
    // Store generated data in our generatedData object to be returned.
    generatedData.id     = id;
    generatedData.age    = age;
    generatedData.dob    = dob;
    generatedData.name   = `${first} ${last}`;
    generatedData.location   = `${location.cities[Tools.randomNumber(0, location.cities.length - 1)]}, ${location.state}`;
    generatedData.about  = data.gen.about[index];
    generatedData.avatar =  data.gen.icons[index];

    return generatedData;
  }

  static create(amt, storage) {
    for (let i = 0; i < amt; i++) {
      // Generate new member data.
      const newMemberInfo = this.generateData(i);
      // Push new member object to the storage array.
      storage.push(new Member(newMemberInfo.id, newMemberInfo.name, newMemberInfo.age, newMemberInfo.dob, newMemberInfo.location, newMemberInfo.about, newMemberInfo.avatar));
      // Dynamically generate our select field with member names.
      DOM.infoBox.options[i].text = newMemberInfo.name;
    }
    console.log(storage);
  }

  static getName(memberSelect) {
    return memberSelect.options[memberSelect.selectedIndex].text;
  }
}