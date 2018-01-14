// ==========================================================================
// Member Info Box
// ==========================================================================

import { data } from './data';
import { Tools } from './tools';
import { DOM } from './dom';

export default class Member {
  constructor(id, name, age, gender, dob, location, about, avatar) {
    this.id         = id;
    this.name       = name;
    this.age        = age;
    this.gender     = gender;
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
    const gender = this.getGender(Tools.randomNumber(0, 1));
    let first;
    let icon;
    // Generate first name and icon based on gender.
    if (gender === 'Female') {
      first = Tools.randomFromArray(data.gen.first.female);
      icon  = Tools.randomFromArray(data.gen.icons.female);
      generatedData.gender = 'Female';
    } else {
      first = Tools.randomFromArray(data.gen.first.male);
      icon  = Tools.randomFromArray(data.gen.icons.male);
      generatedData.gender = 'Male';
    }
    const last  = Tools.randomFromArray(data.gen.last);
    const location = Tools.randomFromArray(data.gen.location);
    // Store generated data in our generatedData object to be returned.
    generatedData.id     = id;
    generatedData.age    = age;
    generatedData.dob    = dob;
    generatedData.name   = `${first} ${last}`;
    generatedData.location   = `${Tools.randomFromArray(location.cities)}, ${location.state}`;
    generatedData.about  = data.gen.about[index];
    generatedData.avatar = icon;

    return generatedData;
  }

  static create(amt, storage) {
    for (let i = 0; i < amt; i++) {
      // Generate new member data.
      const newMemberInfo = this.generateData(i);
      // Push new member object to the storage array.
      storage[i] = new Member(newMemberInfo.id, newMemberInfo.name, newMemberInfo.age, newMemberInfo.gender, newMemberInfo.dob, newMemberInfo.location, newMemberInfo.about, newMemberInfo.avatar);
      // Dynamically generate our select field with member names.
      DOM.infoBox.options[i].text = newMemberInfo.name;
      // Populate the Info Box with first user information on page load.
      if (i === 0) {
        this.update(newMemberInfo);
      }
    }
  }

  static update(member) {
    DOM.infoBox.id.innerHTML       = `#${member.id}`;
    DOM.infoBox.age.innerHTML      = member.age;
    DOM.infoBox.dob.innerHTML      = member.dob;
    DOM.infoBox.name.innerHTML     = member.name;
    DOM.infoBox.location.innerHTML = member.location;
    DOM.infoBox.about.innerHTML    = member.about;
    DOM.infoBox.icon.src           = member.avatar;
  }

  // Randomly pick a gender
  static getGender(genderIndex) {
    let gender;

    if (genderIndex === 0) {
      gender = 'Female';
    } else {
      gender = 'Male';
    }

    return gender;
  }

  static getName(memberSelect) {
    return memberSelect.options[memberSelect.selectedIndex].text;
  }
}