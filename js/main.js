/*menu*/

var toggle_btn = document.querySelector(".main-nav__toggle");
var mobile_menu = document.querySelector(".main-nav__list");

 if (document.documentElement.clientWidth >= 768) {
    mobile_menu.classList.remove("main-nav__list--open")
  }

  mobile_menu.classList.remove('main-nav__list--nojs');

toggle_btn.addEventListener("click", function(event) {
  event.preventDefault();
      mobile_menu.classList.toggle("main-nav__list--open");
      toggle_btn.classList.toggle("main-nav__toggle--close");
});


