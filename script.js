const burgerMenu = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
});


new Swiper('.slider-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

});