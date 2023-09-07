var swiperImg = new Swiper(".swiper1", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  crossFade: true,
  mousewheel: { eventsTarget: ".projectWrap" },
  autoplay: {
    delay: 100000,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".swiper2", {
  slidesPerView: 2.5,
  direction: "vertical",
  loop: true,
  spaceBetween: 143,
  centeredSlides: true,
  mousewheel: { eventsTarget: ".projectWrap" },
  autoplay: {
    delay: 100000,
    disableOnInteraction: false,
  },
});
swiper.on("reachEnd", function () {
  swiper.autoplay = false;
});
