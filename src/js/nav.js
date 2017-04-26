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
  transition: ({navBar, navLinks, relativeTo} = {}) => {
    const landingIsHidden = Math.abs(relativeTo.getBoundingClientRect().top) > (relativeTo.clientHeight - 50);
    for (let link of navLinks) {
      if (landingIsHidden) {
        Nav.swapLinkStyles({
          elm: link,
          testClass: 'nav__item',
          newClass: 'nav__item--alt'
        });
        navBar.style.backgroundColor = '#fff';
        navBar.style.borderColor = '#f5f5f5';
      } else {
        Nav.swapLinkStyles({
          elm: link,
          testClass: 'nav__item--alt',
          newClass: 'nav__item'
        });
        navBar.removeAttribute('style');
      }
    }
  }
};