// const $ = require('jquery');
// const Masonry = require('masonry-layout');

// desplegar menu mobile
var navMenu = document.getElementById('nav-menu');
var mobileMenu = document.getElementById('mobile-menu');

mobileMenu.addEventListener('click', function (ev) {
  ev.preventDefault();
  navMenu.classList.toggle('show');
});

// desplegar barra de busqueda
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');
var headerFacebook = document.getElementById('header-facebook');
var headerTwitter = document.getElementById('header-twitter');

searchButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  searchInput.classList.toggle('show');
  mobileMenu.classList.toggle('hiden');
  navMenu.classList.toggle('hiden');
  signinButton.classList.toggle('hiden');
  headerFacebook.classList.toggle('hiden');
  headerTwitter.classList.toggle('hiden');
});

//desplegar modal

function toggleClass(target, clase) {
  console.log(target.classList.toggle(clase));
};

var signinButton = document.getElementById('signin');
var modalContainer = document.getElementById('modal');
var modalButton = document.getElementById('modal-close');

signinButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  toggleClass(modalContainer, 'hiden');
});

modalButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  toggleClass(modalContainer, 'hiden');
});

var elem = document.querySelector('.grid');

var msnry = new Masonry(elem, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
});
