'use strict';
// всплывающее окно
var popup = document.getElementById('popup');
var popupClose = document.getElementById('popup__close');
var callback = document.getElementById('callback');

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


// раскрывающееся меню в подвале моб версии
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


// плавная прокрутка к якорю
var linkNav = document.querySelectorAll('[href^="#"]'); // выбираем все ссылки к якорю на странице
var V = 0.5; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) { // по клику на ссылку
    e.preventDefault(); // отменяем стандартное поведение
    var w = window.pageYOffset; // производим прокрутка прокрутка
    var hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
    var t = document.querySelector(hash).getBoundingClientRect().top; // отступ от окна браузера до id
    var start = null;
    requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
      if (start === null) {
        start = time;
      }
      var progress = time - start;
      var r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r !== w + t) {
        requestAnimationFrame(step);
      } else {
        location.hash = hash; // URL с хэшем
      }
    }
  }, false);
}
