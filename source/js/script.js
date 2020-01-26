'use strict';
// всплывающее окно
var popup = document.getElementById('popup');
var popupClose = document.getElementById('popup__close');
var callback = document.getElementById('callback');
// var popupContainer = document.getElementById('popup__container');

// необходим рефакторинг
callback.addEventListener('click', function () {
  if (popup.classList.contains('popup--closed')) {
    popup.classList.remove('popup--closed');
    popup.classList.add('popup--opened');
  } else {
    popup.classList.add('popup--closed');
    popup.classList.remove('popup--opened');
  }
  username.focus();
});

popupClose.addEventListener('click', function () {
  popup.classList.add('popup--closed');
  popup.classList.remove('popup--opened');
});

document.addEventListener('keydown', function (event) {
  if (event.code === 'Escape') {
    if (popup.classList.contains('popup--opened')) {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
      popup.classList.remove('popup--error');
    }
  }
});

popup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    if (popup.classList.contains('popup--opened')) {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
      popup.classList.remove('popup--error');
    }
  }
});


// local storage
var username = popup.querySelector('[name=username]');
var phone = popup.querySelector('[name=phone]');
var form = popup.querySelector('#callback-form');

form.addEventListener('submit', function (evt) {
  if (!username.value || !phone.value) {
    evt.preventDefault();
    popup.classList.add('popup--error');
    // console.log('Введите все данные формы');
  } else {
    localStorage.setItem('username', username.value);
    localStorage.setItem('phone', phone.value);
  }
});

// eslint-disable-next-line no-undef
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(phone);


// раскрывающееся меню в подвале моб версии
var navButton = document.getElementById('nav-button');
var footerNavBlock = document.getElementById('page-footer__nav');
var contactsButton = document.getElementById('contacts-button');
var contactsBlock = document.getElementById('page-footer__contacts');

footerNavBlock.classList.add('page-footer__nav--closed');
contactsBlock.classList.add('page-footer__contacts--closed');

navButton.addEventListener('click', function () {
  if (footerNavBlock.classList.contains('page-footer__nav--closed')) {
    footerNavBlock.classList.remove('page-footer__nav--closed');
  } else {
    footerNavBlock.classList.add('page-footer__nav--closed');
  }
});

contactsButton.addEventListener('click', function () {
  if (contactsBlock.classList.contains('page-footer__contacts--closed')) {
    contactsBlock.classList.remove('page-footer__contacts--closed');
  } else {
    contactsBlock.classList.add('page-footer__contacts--closed');
  }
});


// плавная прокрутка к якорю
var linkNav = document.querySelectorAll('[href^="#"]'); // выбираем все ссылки к якорю на странице
var V = 0.5; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) { // по клику на ссылку
    e.preventDefault(); // отменяем стандартное поведение
    var w = window.pageYOffset; // производим прокрутка прокрутка
    var hash = e.currentTarget.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
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
