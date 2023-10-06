// eslint-disable-next-line no-undef
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
  },
});

swiper();
