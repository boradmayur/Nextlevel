
        $(document).ready(function(){
  $('.partner-logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,        // Immediate transition
    speed: 3000,             // How long each slide takes (smoothness)
    cssEase: 'linear',       // Smooth easing
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: true      // Needed for smooth marquee feel
  });
});