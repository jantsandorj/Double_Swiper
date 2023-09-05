var swiperImg = new Swiper(".swiper1", {
  slidesPerView: 1,
  loop: true,
  fade: true,
  crossFade: true,
  mousewheel: { eventsTarget: ".swiper-container" },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".swiper2", {
  slidesPerView: 3,
  direction: "vertical",
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  mousewheel: { eventsTarget: ".swiper-container" },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});
