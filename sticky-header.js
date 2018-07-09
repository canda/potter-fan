console.log('asd');

window.onscroll = function() {
  console.log('window.scrollY', window.scrollY);
  if (window.scrollY >= 190) {
    document.querySelector('.navigation-menu').classList.add('fixed-header');
  }
  else {
    document.querySelector('.navigation-menu').classList.remove('fixed-header');
  }
};
