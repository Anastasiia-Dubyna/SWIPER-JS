new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class"' + className + '">' + (index + 1) + "</span>";
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  hashNavigation: {
    watchState: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    // eventsTarget: ".image-slider",
  },
  autoHeight: true,
  slidesPerView: 1,
  wathOverflow: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 0,
  loop: false,
  loopedSlides: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
