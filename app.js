const swiper = new Swiper('.partners__slider', {
	direction:	'horizontal',
  
  slidesPerView: 4,
  spaceBetween: 30,
	autoHeight: true,
  loop: true,
 
  // Navigation arrows
  navigation: {
    nextEl: '.sl-btn__prev',
    prevEl: '.sl-btn__next',
  },

	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
			centeredSlides: true
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20,
			centeredSlides: true
    },

		576:{
			slidesPerView: 2,
      spaceBetween: 20,
			centeredSlides: true
		},
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
			centeredSlides: true
    },

		768: {
      slidesPerView: 3,
      spaceBetween: 20,
			centeredSlides: true
    },

		1024:{
			slidesPerView: 4,
      spaceBetween: 30,
			centeredSlides: true
		},

		1170:{
			slidesPerView: 4,
      spaceBetween: 30,
		},
	}
});
