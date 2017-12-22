$(document).ready(function(){
  $('.services-slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    // autoplay: true,
    autoplay: false,
    draggable: false,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    respondTo: 'min',
    // mobileFirst: true,
    // variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '60px',
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          draggable: false,
          centerMode: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          draggable: false,
          centerMode: false
        }
      }
    ]
  });
  $('.services-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(currentSlide);
  });
     

  $('.gallery-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    autoplay: false,
    // autoplay: false,
    draggable: false,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    respondTo: 'min',
    appendDots: ".gallery-slider-controls__dots",
    // mobileFirst: true,
    // variableWidth: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          draggable: false,
          centerMode: false
        }
      }
    ]
  });
  
  $('.services-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var decl = currentSlide - nextSlide;
    if(decl == 1 || decl == (slick.slideCount-1)*(-1) ) {
        console.log('is prev direction');

        $(".services-slider__item").removeClass("services-slider__item--next");
        $(".services-slider__item[data-slick-index="+ (currentSlide)+ "]").addClass("services-slider__item--next");

        $(".services-slider__item").removeClass("services-slider__item--prev");
        $(".services-slider__item[data-slick-index="+ (currentSlide-2)+ "]").addClass("services-slider__item--prev");

        if(nextSlide>currentSlide) {
          $(".services-slider__item[data-slick-index="+ (nextSlide+1)+ "]").addClass("services-slider__item--next");
          $(".services-slider__item[data-slick-index="+ (nextSlide-1)+ "]").addClass("services-slider__item--prev");
        }

      } else {
        console.log('is next direction');
        $(".services-slider__item").removeClass("services-slider__item--next");
        $(".services-slider__item[data-slick-index="+ (currentSlide+2)+ "]").addClass("services-slider__item--next");

        $(".services-slider__item").removeClass("services-slider__item--prev");
        $(".services-slider__item[data-slick-index="+ (currentSlide)+ "]").addClass("services-slider__item--prev");

        if(nextSlide<currentSlide) {
          $(".services-slider__item[data-slick-index="+ (nextSlide+1)+ "]").addClass("services-slider__item--next");
          $(".services-slider__item[data-slick-index="+ (nextSlide-1)+ "]").addClass("services-slider__item--prev");
        }


      }


    // $(".services-slider__item[data-slick-index="+ nextSlide+ "]").css("opacity",".1");

    // $(".services-slider__item.slick-center").siblings().removeClass("services-slider__item--prev");
    // $(".services-slider__item.slick-center").addClass("services-slider__item--prev");

    // $(".services-slider__item.slick-center").siblings().removeClass("services-slider__item--next");
    // $(".services-slider__item.slick-center").next().next().addClass("services-slider__item--next");
    // $(".services-slider__item.slick-center").removeClass("services-slider__item--next");
  });

// popup
  $(".js-btn-popup").click(function(){
    $(".popup").addClass("popup--visible").css("display", "block");
  });

  $(".popup__dim").click(function(){
    parent = $(this).parents(".popup");
    parent.fadeOut(400, function(){
      console.log("popup hide");
      parent.removeClass("popup--visible");
    });
  });
// eof popup

  $('.services-slider-controls .arrow--left').click(function(){
    $(".services-slider").slick('slickPrev');
    // $(".services-slider__item.slick-current").siblings().removeClass("services-slider__item--prev");
    // $(".services-slider__item.slick-current").prev().addClass("services-slider__item--prev");

    // $(".services-slider__item.slick-current").siblings().removeClass("services-slider__item--next");
    // $(".services-slider__item.slick-current").next().addClass("services-slider__item--next");
  });

  $('.services-slider-controls .arrow--right').click(function(){
    $(".services-slider").slick('slickNext');

    // $(".services-slider__item.slick-current").siblings().removeClass("services-slider__item--prev");
    // $(".services-slider__item.slick-current").prev().addClass("services-slider__item--prev");

    // $(".services-slider__item.slick-current").siblings().removeClass("services-slider__item--next");
    // $(".services-slider__item.slick-current").next().addClass("services-slider__item--next");
  });


  $('.gallery-slider-controls .arrow--left').click(function(){
    $(".gallery-slider").slick('slickPrev');
  });

  $('.gallery-slider-controls .arrow--right').click(function(){
    $(".gallery-slider").slick('slickNext');
  });


  var s = skrollr.init();

  // map init
  google.maps.event.addDomListener(window, 'load', init);
    function init() {
      var mapOptions = {
        zoom: 15,
        disableDefaultUI: true,
        center: new google.maps.LatLng(51.114926, 71.428111),
        styles: [
          {
              "featureType": "all",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "saturation": 36
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 40
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  },
                  {
                      "weight": 1.2
                  }
              ]
          },
          {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#e5c163"
                  }
              ]
          },
          {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#c4c4c4"
                  }
              ]
          },
          {
              "featureType": "administrative.neighborhood",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#e5c163"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 21
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#e5c163"
                  },
                  {
                      "lightness": "0"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#e5c163"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 18
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#575757"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#2c2c2c"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#999999"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 19
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  }
              ]
          }
      ]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(51.114926, 71.428111),
        map: map,
        title: 'Hammer legend'
      });
    } // eof map init
}); //eof doc.ready







