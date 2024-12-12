(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}
	
	headerStyle();


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.megamenu').slideToggle(900);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 0);
	
		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}

	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(100);
				$(target).addClass('active-tab');
			}
		});
	}



	if ($('.accordion-box').length) {
		// Attach a click event handler to elements with class 'acc-btn' inside '.accordion-box'
		$(".accordion-box").on('click', '.acc-btn', function() {
			// Get the outer accordion box and the specific accordion associated with the clicked button
			var outerBox = $(this).closest('.accordion-box');
			var target = $(this).closest('.accordion');

			// Check if the clicked button does not have the class 'active'
			if (!$(this).hasClass('active')) {
				// Remove the 'active' class from all accordion buttons within the same accordion box
				outerBox.find('.accordion .acc-btn').removeClass('active');
			}

			// Check if the next '.acc-content' element is visible
			if ($(this).next('.acc-content').is(':visible')) {
				return false; // Prevent further action if it's visible
			} else {
				// Add the 'active' class to the clicked button
				$(this).addClass('active');

				// Remove the 'active-block' class from all '.accordion' elements within the same accordion box
				outerBox.find('.accordion').removeClass('active-block');

				// Slide up all '.acc-content' elements within the accordion box
				outerBox.find('.accordion .acc-content').slideUp(300);

				// Add the 'active-block' class to the specific '.accordion'
				target.addClass('active-block');

				// Slide down the next '.acc-content' element
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


	// banner-carousel
	if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="flaticon-up-chevron"></span>', '<span class="flaticon-down-chevron"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }


    // about-carousel
	if ($('.about-carousel').length) {
        $('.about-carousel').owlCarousel({
            loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }


    // single-item-carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-right-chevron"></span>', '<span class="flaticon-right-chevron"></span>' ],
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
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}

	// news-carousel
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-right-chevron"></span>', '<span class="flaticon-right-chevron"></span>' ],
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
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}


	// two-item-carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-thin-right-straight-arrow"></span>', '<span class="flaticon-thin-right-straight-arrow"></span>' ],
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
				1200:{
					items:2
				}

			}
		});    		
	}


    // three-item-carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-right-chevron"></span>', '<span class="flaticon-left-chevron"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},			
				1200:{
					items:3
				}

			}
		});    		
	}


	// four-item-carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-right-chevron"></span>', '<span class="flaticon-right-chevron"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},			
				1200:{
					items:4
				}

			}
		});    		
	}


	// five-item-carousel
	if ($('.five-item-carousel').length) {
		$('.five-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-thin-right-straight-arrow"></span>', '<span class="flaticon-thin-right-straight-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},			
				1200:{
					items:5
				}

			}
		});    		
	}


	// award-carousel
	if ($('.award-carousel').length) {
		$('.award-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			animateOut: 'slideOutUp',
    		animateIn: 'slideOut',
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-up-chevron"></span>', '<span class="flaticon-down-chevron"></span>' ],
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
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}



	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}

	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();


    // Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}


	//Search Popup
	if($('#search-popup').length){
		
		//Show Popup
		$('.search-toggler').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}


	//nice select
	$(document).ready(function() {
      $('select:not(.ignore)').niceSelect();
    });


	// Date picker
	function datepicker () {
	    if ($('#datepicker').length) {
	        $('#datepicker').datepicker();
	    };
	}

	// Date picker
	function datepicker_2 () {
	    if ($('#datepicker_2').length) {
	        $('#datepicker_2').datepicker();
	    };
	}


	//Appointment Calendar
	if($('#appoinment_calendar').length) {
		$('#appoinment_calendar').monthly();
	}

	//Appointment Calendar
	if($('#appoinment_calendar_2').length) {
		$('#appoinment_calendar_2').monthly();
	}

	//Appointment Calendar
	if($('#appoinment_calendar_3').length) {
		$('#appoinment_calendar_3').monthly();
	}


	$(document).ready(function() {
		navigator.geolocation.getCurrentPosition(success, error);

		  function success(pos) {
		    var lat = pos.coords.latitude;
		    var long = pos.coords.longitude;
		    weather(lat, long);
		  }

		  function error() {
		    console.log("There was an error");
		  }

		  function weather(lat, long) {
		    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
		    $.getJSON(URL, function(data) {
		      display(data);
		    });
		  }

		  function display(data) {
		    var city = data.name.toUpperCase();
		    var temp =
		      Math.round(data.main.temp_max) +
		      "&deg; C | " +
		      Math.round(Math.round(data.main.temp_max) * 1.8 + 32) +
		      "&deg; F";
		    var desc = data.weather[0].description;
		    var date = new Date();

		    var months = [
		      "January",
		      "February",
		      "March",
		      "April",
		      "May",
		      "June",
		      "July",
		      "August",
		      "September",
		      "October",
		      "November",
		      "December"
		    ];

		    var weekday = new Array(7);
		    weekday[0] = "Sunday";
		    weekday[1] = "Monday";
		    weekday[2] = "Tuesday";
		    weekday[3] = "Wednesday";
		    weekday[4] = "Thursday";
		    weekday[5] = "Friday";
		    weekday[6] = "Saturday";

		    if (data.weather[0].main == "Sunny" || data.weather[0].main == "sunny") {
		      $(".weathercon").html(
		        "<i class='fas fa-sun' style='color: #d36326;'></i>"
		      );
		    } else {
		      $(".weathercon").html(
		        "<i class='fas fa-cloud' style='color: #44c3de;'></i>"
		      );
		    }

		    $(".location").html(city);
		    $(".temp").html(temp);
		  }
		});


		//bx slider
		if ($('.resources-section .feature-slide').length) {
			$('.resources-section .feature-slide').bxSlider({
		        nextText: '<i class=""></i>',
		        prevText: '<i class=""></i>',
		        mode: 'fade',
		        auto: 'true',
		        speed: '700',
		        mode:'vertical',
		        maxSlides: 4,
				minSlides: 4,
				moveSlides: 1,
		        pager: true,
		    });
		};


		if($('.timer').length){
		   $(function(){
			    $('[data-countdown]').each(function() {
			   var $this = $(this), finalDate = $(this).data('countdown');
			   $this.countdown(finalDate, function(event) {
			     $this.html(event.strftime('%D days %H:%M:%S'));
			   });
			 });
			});

		   $('.cs-countdown').countdown('').on('update.countdown', function(event) {
			  var $this = $(this).html(event.strftime('<div class="count-col"><span>%D</span><h6>days</h6></div> <div class="count-col"><span>%H</span><h6>Hrs</h6></div> <div class="count-col"><span>%M</span><h6>Mins</h6></div> <div class="count-col"><span>%S</span><h6>Secs</h6></div>'));
			});
		}


    

	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			datepicker ();
			datepicker_2 ();
		})(jQuery);
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});

	

})(window.jQuery);