console.log("page loaded");

$(document).ready(function(){
  $('.services-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    // autoplay: false,
    draggable: false,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    variableWidth: false
  });

  $('.services-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".services-slider__item.slick-current").siblings().removeClass("services-slider__item--prev");
    $(".services-slider__item.slick-current").addClass("services-slider__item--prev");
    $(".services-slider__item.slick-current").siblings().removeClass("services-slider__item--next");
    $(".services-slider__item.slick-current").next().next().addClass("services-slider__item--next");
    // $(".services-slider__item.slick-current").removeClass("services-slider__item--next");
  });
}); //eof doc.ready

