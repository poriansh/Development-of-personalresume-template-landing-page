const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        
      }
   
  });