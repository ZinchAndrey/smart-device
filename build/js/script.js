'use strict';

var popup = document.getElementById('popup');
var popupClose = document.getElementById('popup__close');
var callback = document.getElementById('callback');
// var popupContainer = document.getElementById('popup__container');


callback.addEventListener('click', function () {
  if (popup.classList.contains('popup--closed')) {
    popup.classList.remove('popup--closed');
    popup.classList.add('popup--opened');
  } else {
    popup.classList.add('popup--closed');
    popup.classList.remove('popup--opened');
  }
});

popupClose.addEventListener('click', function () {
  popup.classList.add('popup--closed');
  popup.classList.remove('popup--opened');
});

document.addEventListener('keydown', function (event) {
  if (event.code == 'Escape') {
    if (popup.classList.contains('popup--opened')) {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
    }
  }
});

popup.addEventListener('click', function (event) {
  if (event.target == event.currentTarget) {
    if (popup.classList.contains('popup--opened')) {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
    }
  }
});

var navButton = document.getElementById('nav-button');
var footerNavList = document.getElementById('page-footer__nav-list');
var contactsButton = document.getElementById('contacts-button');
var contactsList = document.getElementById('page-footer__contacts-block');

footerNavList.classList.remove('page-footer__nav-list--nojs');
contactsList.classList.remove('page-footer__contacts-block--nojs');

navButton.addEventListener('click', function () {
  if (footerNavList.classList.contains('page-footer__nav-list--closed')) {
    footerNavList.classList.remove('page-footer__nav-list--closed');
    footerNavList.classList.add('page-footer__nav-list--opened');
  } else {
    footerNavList.classList.add('page-footer__nav-list--closed');
    footerNavList.classList.remove('page-footer__nav-list--opened');
  }
});

contactsButton.addEventListener('click', function () {
  if (contactsList.classList.contains('page-footer__contacts-block--closed')) {
    contactsList.classList.remove('page-footer__contacts-block--closed');
    contactsList.classList.add('page-footer__contacts-block--opened');
  } else {
    contactsList.classList.add('page-footer__contacts-block--closed');
    contactsList.classList.remove('page-footer__contacts-block--opened');
  }
});


// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');
//
// pageHeader.classList.remove('page-header--nojs');
//
// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

// var popup = document.getElementById('popup');
// var popupClose = document.getElementById('popup__close');
// var callback = document.getElementById('callback');
//
//
// callback.addEventListener('click', function () {
//   popup.style.display = 'block';
// });
//
// popupClose.addEventListener('click', function () {
//   popup.style.display = 'none';
// });
