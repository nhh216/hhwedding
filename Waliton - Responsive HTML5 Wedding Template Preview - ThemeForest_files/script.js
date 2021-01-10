(function($) {
    
    "use strict";

    /* ==================== Preloader ==================== */
        function preloader_load() {
            if($('.preloader').length){
                $('.preloader').delay(400).fadeOut(500);
            }
        }


      //page-scroll
      function main() {
        $("a.page-scroll").on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({scrollTop: target.offset().top - 82}, 1000);
                    return false;
                }
            }
        });
      }

    main();

    // close navbar-collapse when a  clicked
    var onePageNav = $('.sp-header .navbar-nav li a');
    onePageNav.on('click', function () {
      onePageNav.parent().removeClass("active");
        $(this).parent().addClass("active");
    });

      // Scroll To Top
      $(window).on('scroll', function () {
          if ($(this).scrollTop() > 200) {
              $('.scrollup').fadeIn();
          } else {
              $('.scrollup').fadeOut();
          }
      });
      $('.scrollup').on('click', function () {
          $("html, body").animate({
              scrollTop: 0
          }, 1000);
          return false;
      });

      // Navbar
      var nav = $('.main-navigation');
      
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              nav.addClass("fixed-header");
          } else {
              nav.removeClass("fixed-header");
          }
      });


      $(document).ready(function(){
          var dropDown = $('.dropdown');
          //Show dropdown on hover only for desktop devices
          if($(window).innerWidth() > 767){
              dropDown.on({
                  mouseenter: function () {
                      dropDown.clearQueue();
                      $(this).find('>.dropdown-menu').addClass('show');
                  },
                  mouseleave: function () {
                      $(this).find('>.dropdown-menu').removeClass('show');
                  }
              });

          }

          $(document).on('ready', function() {
            $('select').niceSelect();
          });

          //Show dropdown on click only for mobile devices
          if($(window).innerWidth() < 768) {
              dropDown.on('click', function(event){

                  // Avoid having the menu to close when clicking
                  event.stopPropagation();

                  // close all the siblings
                  $(this).siblings().removeClass('show');
                  $(this).siblings().find('>.dropdown-menu').removeClass('show');

                  // close all the submenus of siblings
                  $(this).siblings().find('>.dropdown-menu').parent().removeClass('show');

                  // opening the one you clicked on
                  $(this).find('>.dropdown-menu').toggleClass('show');
                  $(this).siblings('>.dropdown-menu').toggleClass('show');
              });
          }
      });



      // Default Class Js // Use To Background Images // Not Delete JS // 
      if ($('[data-background]').length > 0) {
            $('[data-background]').each(function() {
              var $background, $backgroundmobile, $this;
              $this = $(this);
              $background = $(this).attr('data-background');
              $backgroundmobile = $(this).attr('data-background-mobile');
              if ($this.attr('data-background').substr(0, 1) === '#') {
                return $this.css('background-color', $background);
              } else if ($this.attr('data-background-mobile') && device.mobile()) {
                return $this.css('background-image', 'url(' + $backgroundmobile + ')');
              } else {
                return $this.css('background-image', 'url(' + $background + ')');
              }
            });
      }

     // Gallery filter 

    if($('.gallery-filter li').length){
        $('.gallery-filter li').on("click",function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    }

    if($('.gallery-filter').length){
        $('.gallery-filter').on('click', 'a', function () {
            $('#filters button').removeClass('current');
            $(this).addClass('current');
            var filterValue = $(this).attr('data-filter');
            $(this).parents(".gallery-filter-item").next().isotope({filter: filterValue});
        });
    }

      // countdown Timer
      var now = new Date();
      var countTo = '2020/01/01';

      if($('.timer').length){
        $('.timer').countdown(countTo, function(event) {
            $(this).find('.days').text(event.offset.totalDays);
            $(this).find('.hours').text(event.offset.hours);
            $(this).find('.minutes').text(event.offset.minutes);
            $(this).find('.seconds').text(event.offset.seconds);
        });
      }
      
      // Default Class Js // Use To Background Images // Not Delete JS // 
      $('#sidebar-carousel').owlCarousel({
                loop:true,
                margin:10,
                dots: true,
                nav:false,
                autoplayHoverPause:false,
                autoplay: true,
                smartSpeed: 1500,
                navText: [
                  '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                  '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
                responsive: {
                    0: {
                        items: 1,
                        center: false
                    },
                    480:{
                        items:1,
                        center: false
                    },
                    600: {
                        items: 1,
                        center: false
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
      });
      

      // Shop Discription // Not Delete JS // 
      $('#shop-3col-carousel').owlCarousel({
                loop:true,
                margin:10,
                dots: true,
                nav:false,
                autoplayHoverPause:false,
                autoplay: true,
                smartSpeed: 1500,
                navText: [
                  '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                  '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
                responsive: {
                    0: {
                        items: 1,
                        center: false
                    },
                    480:{
                        items:1,
                        center: false
                    },
                    600: {
                        items: 1,
                        center: false
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
      });
      

      // Shop Discription // Not Delete JS // 
      $('#gift_registration_carousel').owlCarousel({
                loop:true,
                margin:10,
                dots: false,
                nav:true,
                autoplayHoverPause:true,
                autoplay: true,
                smartSpeed: 1500,
                navText: [
                  '<i class="flaticon-back"></i>',
                  '<i class="flaticon-next"></i>'
                ],
                responsive: {
                    0: {
                        items: 1,
                        center: false
                    },
                    480:{
                        items:2,
                        center: false
                    },
                    600: {
                        items: 2,
                        center: false
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
      });
      

      $('#baner-slider').owlCarousel({
          loop:true,
          margin:0,
          dots: false,
          nav:false,
          autoplayHoverPause:false,
          autoplay: true,
          smartSpeed: 1500,
          navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
          ],
          responsive: {
              0: {
                  items: 1,
                  center: false
              },
              480:{
                  items:1,
                  center: false
              },
              600: {
                  items: 1,
                  center: false
              },
              768: {
                  items: 1
              },
              992: {
                  items: 1
              },
              1200: {
                  items: 1
              }
          }
      });


    //owl-Carousel-TwoColumn
    $("#projects_carousel").owlCarousel({
        loop:true,
        autoplay: 5000,
        autoplayHoverPause:false,
        smartSpeed: 700,
        items: 3,
        margin:30,
        dots: true,
        nav:true,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>'
        ],
        responsive:{
          0:{
            items:1
          },
          480:{
            items:1
          },
          600:{
            items:1
          },
          800:{
            items:2
          },
          1024:{
            items:3
          },
          1200:{
            items:3
          }
        }
    });

    //GALLERY SLIDER
      $("#gallery_slider").owlCarousel({
            mouseDrag: true,
            smartSpeed: 500,
            autoplay: false,
            items: 5,
            loop:true,
            nav: true,
            navText: [
              '<i class="flaticon-back-1"></i>',
              '<i class="flaticon-next-1"></i>'
            ],
            dots: false,
            responsive: {
                0 : {
                    items: 1,
                },

                550 : {
                    items: 2,
                },

                768 : {
                    items: 4,
                },

                1200 : {
                    items: 5,
                }
            }
      });


    //owl-Carousel-TwoColumn
    $("#testimonials_carousel").owlCarousel({
        loop:true,
        autoplay: 2000,
        autoplayHoverPause:true,
        smartSpeed: 700,
        items: 1,
        margin:30,
        dots: true,
        nav:true,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>'
        ]
    });


    //owl-Carousel-TwoColumn
    $("#divider_slider").owlCarousel({
        loop:true,
        autoplay: 2000,
        autoplayHoverPause:true,
        smartSpeed: 700,
        items: 1,
        margin:30,
        dots: true,
        nav:false,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>'
        ]
    });


    //owl-Carousel-TwoColumn
    $("#client_carousel").owlCarousel({
        loop:true,
        autoplay: 2000,
        autoplayHoverPause:true,
        smartSpeed: 700,
        items: 6,
        margin:30,
        dots: false,
        nav:true,
        navText: [
          '<i class="flaticon-back-1"></i>',
          '<i class="flaticon-next"></i>'
        ]
    });

     //owl-Carousel-TwoColumn
        // $(".event-baner-slider").slick({
        //     dots: false,
        //     infinite: true,
        //     speed: 500,
        //     fade: true,
        //     cssEase: 'linear',
        //     autoplay: true,
        //     autoplaySpeed: 3000,
        //     arrows: false,
        // });

      //bootstrap Slider JS Start
      $('#slider-style-one').bsTouchSlider();
      //bootstrap Slider JS End


      //flexslider JS Start
      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false
      });
      //flexslider JS End

      //slick JS Start
      $(document).ready(function(){  
        var slickSlider = $('.slick-slider-one');

        slickSlider.on('init', function(event, slick){
          $('.animated').addClass('activate fadeInUp');
        });   

        // slickSlider.slick({
        //   autoplay: true,
        //   autoplaySpeed: 3000,
        //   pauseOnHover: false,
        //   dots: true,
        // });     

        $('.carousel').carousel({
          interval: 2000
        })

        slickSlider.on('afterChange', function(event, slick, currentSlide) {
          $('.animated').removeClass('off');
          $('.animated').addClass('activate fadeInUp');
        });   

        slickSlider.on('beforeChange', function(event, slick, currentSlide) {
          $('.animated').removeClass('activate fadeInUp');
          $('.animated').addClass('off');
        });
      });
      //slick JS Start

      //Video Player JS Strat
      $('.player').mb_YTPlayer();
      //Video Player JS End


      //LightBox / MagnificPopup start

      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: true,

          fixedContentPos: false
      });

      $('.lightbox-image').magnificPopup({
        type: 'image',
        removalDelay: 500,
        mainClass: 'mfp-fade',
        // other optionsgallery: 
              gallery: {
                  enabled: true,
                  navigateByImgClick: true,
                  preload: [0,1]
              },
              
               retina: {
                  ratio: 1, // Increase this number to enable retina image support.
                  // Image in popup will be scaled down by this number.
                  // Option can also be a function which should return a number (in case you support multiple ratios). For example:
                  // ratio: function() { return window.devicePixelRatio === 1.5 ? 1.5 : 2  }


                  replaceSrc: function(item, ratio) {
                    return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
                  } // function that changes image source
              }
      });
      //LightBox / MagnificPopup End

      $('.story-lightbox-image').magnificPopup({
        type: 'image',
        removalDelay: 500,
        mainClass: 'mfp-fade',
        // other optionsgallery: 
              gallery: {
                  enabled: true,
                  navigateByImgClick: true,
                  preload: [0,1]
              },
      });
      //LightBox / MagnificPopup End


      // makes the parallax elements JQUARY Start
      function parallaxIt() {
        // create variables
        var $fwindow = $(window);
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        var $contents = [];
        var $backgrounds = [];

        // for each of content parallax element
        $('[data-type="content"]').each(function(index, e) {
          var $contentObj = $(this);

          $contentObj.__speed = ($contentObj.data('speed') || 1);
          $contentObj.__fgOffset = $contentObj.offset().top;
          $contents.push($contentObj);
        });

        // for each of background parallax element
        $('[data-type="parallax"]').each(function() {
          var $backgroundObj = $(this);

          $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
          $backgroundObj.__fgOffset = $backgroundObj.offset().top;
          $backgrounds.push($backgroundObj);
        });

        // update positions
        $fwindow.on('scroll resize', function() {
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          $contents.forEach(function($contentObj) {
            var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

            $contentObj.css('top', yPos);
          })

          $backgrounds.forEach(function($backgroundObj) {
            var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

            $backgroundObj.css({
              backgroundPosition: '50% ' + yPos + 'px'
            });
          });
        });

        // triggers winodw scroll for refresh
        $fwindow.trigger('scroll');
      };
      parallaxIt();
      // Parallax elements JQUARY End

      // Type Slider JQUARY Start
      function typeSlider() {
        var TxtRotate = function(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
        };
        TxtRotate.prototype.tick = function() {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];

          if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

          var that = this;
          var delta = 300 - Math.random() * 100;

          if (this.isDeleting) { delta /= 2; }

          if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
          }

          setTimeout(function() {
            that.tick();
          }, delta);
        };
        window.onload = function() {
          var elements = document.getElementsByClassName('txt-rotate');
          for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
          }
          // INJECT CSS
          var css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
          document.body.appendChild(css);
        };
      };
      typeSlider() 
      // Type Slider JQUARY End



      $(document).on('click','.widget-categories-list a',function(){
        var paerent = $(this).closest('li');
        var t = $(this);
        if(paerent.children('ul').length > 0){
          $(this).closest('li').children('ul').slideToggle();
          return false;
        }
      });


    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function() {

        preloader_load();

     });

    /*==========================================================================
        WHEN WINDOW READY
    ==========================================================================*/
    $(document).on('ready', function() {

    });


    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {
    });

    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {

    });


})(window.jQuery);

    
       
