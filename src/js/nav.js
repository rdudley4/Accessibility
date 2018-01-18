// ==========================================================================
// Navigation Functionality
// ==========================================================================

// Nav Object
// ----------

export const Nav = {
  swapLinkStyles: ({elm, testClass, newClass} = {}) => {
    if (elm.className === testClass) {
      elm.className = newClass;
    }
  },
  transition: ({nav, relativeTo} = {}) => {
    const landingIsHidden = Math.abs(relativeTo.getBoundingClientRect().top) > (relativeTo.clientHeight - 50);
    for (let link of nav.links) {
      if (landingIsHidden) {
        Nav.swapLinkStyles({
          elm: link,
          testClass: 'nav__item',
          newClass: 'nav__item--alt'
        });
        nav.bar.style.backgroundColor = '#495275';
      } else {
        Nav.swapLinkStyles({
          elm: link,
          testClass: 'nav__item--alt',
          newClass: 'nav__item'
        });
        nav.bar.removeAttribute('style');
      }
    }
  }
};