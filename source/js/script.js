/*let toggle = document.querySelector(".main-nav__toggle");
let menu = document.querySelector(".main-nav__menu");
let menuButtons = document.querySelectorAll(".site-nav__item > a");

toggle.onclick = function () {
  toggle.classList.toggle("main-nav__toggle--close");
  menu.classList.toggle("main-nav__menu--vertical");
};


for (const button of menuButtons) {
  button.addEventListener('click', function(event) {
    if(window.innerWidth < 992 ) {
      toggle.classList.toggle("main-nav__toggle--close");
      menu.classList.toggle("main-nav__menu--vertical");
    }
  })
}*/


/* Карусели */
$(document).ready(function () {
  $(".main-slider .owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      }
    }
  });
});