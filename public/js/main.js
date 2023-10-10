// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  grabCursor: true,
  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
  },
});

// eslint-disable-next-line no-undef, no-unused-vars
const swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '#swiper-button-next2',
    prevEl: '#swiper-button-prev2',
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
  },
});
