// https://codepen.io/canda-the-bashful/pen/MBWWYm

window.onscroll = function() {
  if (window.scrollY >= 190) {
    document.querySelector('.navigation-menu').classList.add('fixed-header');
    document.querySelector('.banner').classList.add('fixed-header');
  }
  else {
    document.querySelector('.navigation-menu').classList.remove('fixed-header');
    document.querySelector('.banner').classList.remove('fixed-header');
  }
};
