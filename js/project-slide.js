$('.project-wrapper-contents-list').slick({
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  variableWidth: true,
  responsive: [{
      breakpoint: 1300,
      settings: {
        centerMode: true,
        variableWidth: true,
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        variableWidth: false,
        centerPadding: '50px',
      }
    }
  ]
});