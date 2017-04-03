/*menu*/
var toggle_btn = document.querySelector(".main-nav__toggle");
var mobile_menu = document.querySelector(".main-nav__list");

if (document.documentElement.clientWidth >= 768) {
  mobile_menu.classList.remove("main-nav__list--open")
};

if (mobile_menu.classList.contains("main-nav__list--nojs")) {
    mobile_menu.classList.remove("main-nav__list--nojs");
    toggle_btn.classList.remove("main-nav__toggle--nojs");
};

toggle_btn.addEventListener("click", function(event) {
  event.preventDefault();
      mobile_menu.classList.toggle("main-nav__list--open");
      toggle_btn.classList.toggle("main-nav__toggle--close");
});


/*modal form*/
var modal_open = document.querySelector(".btn--features-order");
var product_buy = document.querySelectorAll(".catalog-item__btn-buy");

var modal = document.querySelector(".modal-cart");
var modal_overlay = document.querySelector(".modal-cart__overlay");

if (modal_open) {
    modal_open.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal-cart--show");
  });
};

if (modal_overlay) {
modal_overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-cart--show");
});
};

for (var i = 0; i < product_buy.length; i++) {
    product_buy[i].addEventListener("click", function(event) {
        event.preventDefault();
        if (modal) {
            modal.classList.add("modal-cart--show");
        }
    });
};

/*frame*/
var frame = document.querySelector(".contacts__iframe");
var image = document.querySelector(".contacts__img");
if (frame) {
  frame.classList.remove("contacts__iframe--hidden");
  image.classList.add("contacts__img--hidden");
};
