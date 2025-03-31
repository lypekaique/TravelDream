document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#testimonials-carousel', {
      type      : 'loop',
      perPage   : 1,
      drag      : true,
      arrows    : true,
      pagination: true,
      autoplay  : false,
    } ).mount();
  } );