// ==========================================================================
// Animation Functionality
// ==========================================================================


// Animation Object
// ----------------

export const Anim = {
  notTriggered: (elm, animation) => {
    return !elm.classList.contains(animation);
  },
  play: ({ animation, section, childSelector } = {}) => {
    const elmsToAnimate = section.querySelectorAll(childSelector);
    if (Anim.notTriggered(elmsToAnimate[0], animation)) {
      for (let elm of elmsToAnimate) {
        elm.classList.add(animation);
      }
    }
  }
};