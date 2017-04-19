// ==========================================================================
// Navigation Functionality
// ==========================================================================

// Module Variables
// ----------------

const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.nav__item');

// Nav Object
// ----------

const Nav = {
  swapLinkStyles: ({elm, testClass, newClass} = {}) => {
    if (elm.className === testClass) {
      elm.className = newClass;
    }
  },
  transition: landing => {
    const landingIsHidden = Math.abs(landing.getBoundingClientRect().top) > (landing.clientHeight - 50);
    for (let link of navItems) {
      if (landingIsHidden) {
        Nav.swapLinkStyles({
          elm: link,
          testClass: 'nav__item',
          newClass: 'nav__item--alt'
        });
        navbar.style.backgroundColor = '#fff';
        navbar.style.borderColor = '#f5f5f5';
      } else {
        Nav.swapLinkStyles({
          elm: link,
          testClass: 'nav__item--alt',
          newClass: 'nav__item'
        });
        navbar.removeAttribute('style');
      }
    }
  }
};

module.exports = Nav;