'use strict';
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

var popup = document.getElementById('popup');
var popupClose = document.getElementById('popup__close');
var callback = document.getElementById('callback');


callback.addEventListener('click', function () {
  popup.style.display = 'block';
});

popupClose.addEventListener('click', function () {
  popup.style.display = 'none';
});
