// ==========================================================================
// Animation Functionality
// ==========================================================================
'use strict';

// Animation Object
// ----------------

export const Anim = {
  notTriggered: (elm, animation) => {
    return !elm.classList.contains(animation);
  },
  play: ({ animation, section, childSelector } = {}) => {
    const elmsToAnimate = Array.from( section.querySelectorAll(childSelector) );
    if (Anim.notTriggered(elmsToAnimate[0], animation)) {
      for (let elm of elmsToAnimate) {
        elm.classList.add(animation);
      }
    }
  }
};