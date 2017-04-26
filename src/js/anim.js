// ==========================================================================
// Animation Functionality
// ==========================================================================

// Animation Object
// ----------------

export const Anim = {
  notTriggered: (elm, animation) => {
    return !elm.classList.contains(animation);
  },
  play: ({ animation, elm = null, nodeList = null } = {}) => {
    const elmsToAnimate = elm || nodeList;
    if (elmsToAnimate.constructor == NodeList) {   
      for(let e of elmsToAnimate) {
        e.classList.add(animation);
      }
    } else {
      elmsToAnimate.classList.add(animation);
    }
  }
};