$(document).ready(function(){
    $('.slick_projectShow').slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
           
          ]
    });
  });