$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  loop: false,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
});