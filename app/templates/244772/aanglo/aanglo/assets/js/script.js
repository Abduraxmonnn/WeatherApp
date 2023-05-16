(function($) {

    "use strict";


    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/

    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#slide-nav > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function(e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                 e.preventDefault();
                e.stopImmediatePropagation();
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();


    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var doParallax = -(resize/5);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }


   // SLIDER BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {

            });
        }
    }



    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect  : "elastic",
            closeEffect : "elastic",
            wrapCSS     : "project-fancybox-title-style"
        });
    }


    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }


    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
              enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }



    /*------------------------------------------
        = TESTIMONIAL SLIDER
    -------------------------------------------*/
    if ($(".testimonial-slider").length) {
        $(".testimonial-slider").owlCarousel({
            items:1,
            autoplay: true,
            loop:true,
            smartSpeed: 500,
            dots: false
        });
    }



    /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
    if($(".post-slider".length)) {
        $(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop:true,
            nav: true,
            navText: ['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
            dots: false,
            items: 1
        });
    }



    /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
    if($(".featured-post-slider".length)) {
        $(".featured-post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            loop:true,
            items: 1
        });
    }



    /*------------------------------------------
        = MOBILE SIDE MENU FUNCTIONALITY
    -------------------------------------------*/
    function modalMobileMenu() {

        // jQuery element variables
        var $hamburgerMenuBtn,
        $slideNav,
        $closeBtn,
        $main;

        // focus management variables
        var $focusableInNav,
        $firstFocusableElement,
        $lastFocusableElement;

        $(document).ready(function() {
            $hamburgerMenuBtn = $("#hamburger-menu"),
            $slideNav = $("#slide-nav"),
            $closeBtn = $("#close"),
            $main = $("main"),
            $focusableInNav = $('#slide-nav button, #slide-nav [href], #slide-nav input, #slide-nav select, #slide-nav textarea, #slide-nav [tabindex]:not([tabindex="-1"])');
            if ($focusableInNav.length) {
                $firstFocusableElement = $focusableInNav.first();
                $lastFocusableElement = $focusableInNav.last();
            }
            addEventListeners();
        });

        function addEventListeners() {

            $hamburgerMenuBtn.on("click", function() {
                console.log("asdf");
                $slideNav.addClass("visible active");
                setTimeout(function() {
                    $firstFocusableElement.focus()
                }, 1);
                $main.attr("aria-hidden", "true");
                $hamburgerMenuBtn.attr("aria-hidden", "true");
            })

            $closeBtn.on("click", function(e) {
                if (e.type === "keyup" && e.key !== "Escape") {
                return;
            }

            $slideNav.removeClass("active");
            $main.removeAttr("aria-hidden");
            $hamburgerMenuBtn.removeAttr("aria-hidden");
            setTimeout(function() {
                $hamburgerMenuBtn.focus()
            }, 1);
            setTimeout(function() {
                $slideNav.removeClass("visible")
            }, 501);
            })


            $slideNav.on("keyup", function(e) {
                if (e.type === "keyup" && e.key !== "Escape") {
                    return;
                }

                $slideNav.removeClass("active");
                $main.removeAttr("aria-hidden");
                $hamburgerMenuBtn.removeAttr("aria-hidden");
                setTimeout(function() {
                    $hamburgerMenuBtn.focus()
                }, 1);
                setTimeout(function() {
                    $slideNav.removeClass("visible")
                }, 501);
            })

            $firstFocusableElement = $focusableInNav.first();
            $firstFocusableElement.on("keydown", function(e) {
                if (e.key === "Tab" && e.shiftKey) {
                    e.preventDefault();
                    $lastFocusableElement.focus()
                }
            })

            $lastFocusableElement = $focusableInNav.last();
            $lastFocusableElement.on("keydown", function(e) {
                if (e.key === "Tab" && !e.shiftKey) {
                    e.preventDefault();
                    $firstFocusableElement.focus();
                }
            })
        }
    }

    modalMobileMenu();



    function toggleId() {
        var windowWidth = window.innerWidth;

        if (windowWidth >= 991) {
            console.log("bang");
           //var bang = $(".slide-content");
            $('.slide-content').removeAttr('id');
            $('.slide-content').attr('id', "navbar");

        } else {
            $('.slide-content').attr('id', "slide-nav");
        }
    }

    toggleId();


    
    /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })


    /*------------------------------------------
        = STICKY NAVIGATION
    -------------------------------------------*/
    function stickyNavi() {
        var amountScrolled = 500;
        var amountScrolled2 = 700;
        var navi = $(".navigation");
        var body = $("body");
        
        if ($(window).scrollTop() > amountScrolled ) {

            navi.addClass("sticky-on");

            body.css({
                "height": navi.innerHeight() + 'px'
            })

            if ($(window).scrollTop() > amountScrolled2 ) {
                navi.addClass("sticky-header");
            } else {
                navi.removeClass("sticky-header");
            }
        } else {
            navi.removeClass("sticky-on");
            body.css({
                "height": 0
            })
        }
    }



    /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/
    if($(".mini-cart").length) {
        var cartToggleBtn = $(".cart-toggle-btn");
        var cartContent = $(".mini-cart-content");
        var body = $("body");

        cartToggleBtn.on("click", function(e) {
            cartContent.toggleClass("mini-cart-content-toggle");
            e.stopPropagation();
        });

        body.on("click", function() {
            cartContent.removeClass("mini-cart-content-toggle");
        }).find(cartContent).on("click", function(e) {
            e.stopPropagation();
        });
    }


    /*------------------------------------------
        = HERO SLIDER
    -------------------------------------------*/
    var menu = [];
    $('.swiper-slide').each( function(index){
        menu.push( $(this).find('.slide-inner').attr("data-text") );
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },

        pagination: {
            el: '.swiper-cust-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    if($(".header-style-1").length) {
                        return '<div class="' + className + '">' + (menu[index]) + '</div>';
                    } else {
                        return '<div class="' + className + '">' + "" + '</div>';
                    }
            },
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }      
            },

            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },

            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // SLIDER BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });




    /*------------------------------------------
        = TOUCHSPIN FOR PRODUCT SINGLE PAGE
    -------------------------------------------*/
    if ($("input.product-count").length) {
        $("input.product-count").TouchSpin({
            verticalbuttons: true
        });
    }  


  /*------------------------------------------
        = SHOP DETAILS PAGE PRODUCT SLIDER
    -------------------------------------------*/
    if ($(".shop-single-slider").length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            focusOnSelect: true,

            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]

        });
    }


    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
    function masonryGridSetting() {
        if ($('.masonry-grids').length) {
            var $grid =  $('.masonry-grids').masonry({
                itemSelector: '.post',
                columnWidth: '.post',
                percentPosition: true
            });

            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        }
    }

    masonryGridSetting();


    /*------------------------------------------
        = TOUCHSPIN FOR PRODUCT SINGLE PAGE
    -------------------------------------------*/
    if ($(".product-count").length) {
        $(".product-count").TouchSpin({
            verticalbuttons: true
        });
    }


    /*------------------------------------------
        = woocommerce
    -------------------------------------------*/
    if($(".checkout-section").length) {
        var showLogInBtn = $(".woocommerce-info > a");
        var showCouponBtn = $(".showcoupon");
        var shipDifferentAddressBtn = $("#ship-to-different-address");
        var loginForm = $("form.login");
        var couponForm = $(".checkout_coupon");
        var shippingAddress = $(".shipping_address");

        loginForm.hide();
        couponForm.hide();
        shippingAddress.hide();

        showLogInBtn.on("click", function(event) {
            event.preventDefault();
            loginForm.slideToggle();
            event.stopPropagation();
        });

        showCouponBtn.on("click", function(event2) {
            event2.preventDefault();
            couponForm.slideToggle();
            event2.stopPropagation();
        })

        shipDifferentAddressBtn.on("click", function(event3) {
            shippingAddress.slideToggle();
            event3.stopPropagation();
        })
    }


        /*------------------------------------------
        = CONTACT FORM SUBMISSION
    -------------------------------------------*/
    if ($("#contact-form-main").length) {
        $("#contact-form-main").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },

                email: "required",

            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email address",
            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: $(form).serialize(),
                    success: function () {
                        $( "#loader").hide();
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 3000);
                        form.reset();
                    },
                    error: function() {
                        $( "#loader").hide();
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 3000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

        });
    }



    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
        $(window).on('load', function() {

            preloader();

            smallNavFunctionality();

            masonryGridSetting();

        });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {

        toggleBackToTopBtn();

        stickyNavi();
        
    });


    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {
        
        toggleClassForSmallNav();
        
        smallNavFunctionality();

        toggleId();

        modalMobileMenu();

        clearTimeout($.data(this, 'resizeTimer'));

        $.data(this, 'resizeTimer', setTimeout(function() {
            toggleClassForSmallNav();
            
            smallNavFunctionality();

            toggleId();

            modalMobileMenu();
        }, 200));

    });

})(window.jQuery);
