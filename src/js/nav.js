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
  transition: ({bar, links, relativeTo} = {}) => {
    const landingIsHidden = Math.abs(relativeTo.getBoundingClientRect().top) > (relativeTo.clientHeight - 50);
    for (let link of links) {
      if (landingIsHidden) {
        Nav.swapLinkStyles({
          elm: link,
          testClass: 'nav__item',
          newClass: 'nav__item--alt'
        });
        bar.style.backgroundColor = '#fff';
        bar.style.borderColor = '#f5f5f5';
      } else {
        Nav.swapLinkStyles({
          elm: link,
          testClass: 'nav__item--alt',
          newClass: 'nav__item'
        });
        bar.removeAttribute('style');
      }
    }
  }
};