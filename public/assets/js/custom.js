/*
Template Name: NewsBlog - News Editorial, Blog, Magazine HTML Template
Author: ScriptsBundle
Version: 2.0
Designed and Development by: ScriptsBundle

====================================
[ CSS TABLE CONTENT ]
------------------------------------
    
	1.0 - TOOLTIP
	2.0 - MOBILE MENU
	3.0 - OUR CLIENTS CAROUSEL
	4.0 - TESTIMONIAL 1
	5.0 - TESTIMONIAL 2
	6.0 - TYPING TEXT
	7.0 - RECENT PROJECT CAROUSEL
	8.0 - MENU FIXED
	9.0 - JQUERY SELECT
	10.0 - PRODUCT SLIDER
	11.0 - SCROLL TO TOP
	12.0 - MASTER SLIDER
	13.0 - FUN FACT COUNTER
	14.0 - POST SLIDER 
	15.0 - MAGNIFIC POPUP
	16.0 - ACCORDION
	17.0 - TOP SEARCH SELECT
	18.0 - Contact Form AJAX
	19.0 - REQUEST A CALL AJAX
	
	
-------------------------------------
[ END CSS TABLE CONTENT ]
=====================================
*/
(function($) {
    "use strict";

    /*TOOLTIP*/
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    /*--- MOBILE MENU---*/
    $('#menu-1').megaMenu({
        /*DESKTOP MODE SETTINGS*/
        logo_align: 'left',
        /*align the logo left or right. options (left) or (right)*/
        links_align: 'left',
        /* align the links left or right. options (left) or (right)*/
        socialBar_align: 'left',
        /*align the socialBar left or right. options (left) or (right)*/
        searchBar_align: 'right',
        /*align the search bar left or right. options (left) or (right)*/
        trigger: 'hover',
        /*show drop down using click or hover. options (hover) or (click)*/
        effect: 'expand-top',
        /*drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)*/
        effect_speed: 400,
        /*drop down show speed in milliseconds*/
        sibling: true,
        /*hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)*/
        outside_click_close: true,
        /*hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)*/
        top_fixed: false,
        /*fixed the menu top of the screen. options (true) or (false)*/
        sticky_header: false,
        /*menu fixed on top when scroll down down. options (true) or (false)*/
        sticky_header_height: 200,
        /*sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.*/
        menu_position: 'horizontal',
        /*change the menu position. options (horizontal), (vertical-left) or (vertical-right)*/
        full_width: false,
        /* make menu full width. options (true) or (false)
		 MOBILE MODE SETTINGS */
        mobile_settings: {
            collapse: true,
            /*collapse the menu on click. options (true) or (false)*/
            sibling: true,
            /* hide the others showing drop downs when click on current drop down. options (true) or (false)*/
            scrollBar: true,
            /* enable the scroll bar. options (true) or (false)*/
            scrollBar_height: 400,
            /* scroll bar height in px value. this option works if the scrollBar option true.*/
            top_fixed: false,
            /* fixed menu top of the screen. options (true) or (false)*/
            sticky_header: false,
            /* menu fixed on top when scroll down down. options (true) or (false)*/
            sticky_header_height: 200 /* sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.*/
        }
    });

    /*--- OUR CLIENTS CAROUSEL---*/

    $(".clients-list").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        loop: true,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsTabletSmall: false,

        itemsMobile: [479, 2],
    });
    
        /*--- OUR CLIENTS CAROUSEL---*/

    $(".product-list").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        loop: true,
        items: 4,
        margin:50,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
         navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });

    
         /*--- OUR CLIENTS CAROUSEL---*/

    $(".top-bottom").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        loop: true,
        items: 2,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsTabletSmall: false,
        itemsMobile: [479, 2],
         navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });


    /*--- TESTIMONIAL 1---*/

    $(".owl-testimonial-1").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        loop: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        stopOnHover: true

    });

    /*--- TESTIMONIAL 2---*/

    $(".owl-testimonial-2").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        loop: true,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        stopOnHover: true
    });

    /* TYPING TEXT */
    $(".animated-text").typed({
        strings: [
            "fully responsive Websites",
            "Completele Social Access.",
            "compains Organization",
            "multipurpose HTML Template",
            "Automated Analytic reports"
        ],
        typeSpeed: 50,
        loop: true,
    });

    /* ======= RECENT PROJECT CAROUSEL ======= */

    var owl = $(".recent-project-carousel");
    owl.owlCarousel({
        items: 4,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: [479, 1],
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });

    /*--- MENU FIXED---*/

    $(window).on('scroll', function() {

        var scrollTop = $(window).scrollTop();
        if (scrollTop > 300) {
            $("header").addClass("navbar-fixed-top");
            $("body").addClass("padding-top-body");

        } else if (scrollTop < 300) {
            $("header").removeClass("navbar-fixed-top");
            $("body").removeClass("padding-top-body");
        }

    });

    /*--- JQUERY SELECT---*/
    $(".budget").select2({
        placeholder: "Options",
        allowClear: true,
    });

    /*--- PRODUCT SLIDER ---*/
    $(".product-thumb").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [768, 4],
        itemsTablet: [767, 3],
        itemsMobile: [479, 3],
        slideSpeed: 1500,
        paginationSpeed: 1500,
        rewindSpeed: 1500,
        navigation: false,
        /*navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],*/
        pagination: false,
        addClassActive: true,
    });



    /*--- SCROLL TO TOP---*/

    $(document).on('ready', function() {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });


        $('.scrollup').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });


    /* MASTER SLIDER */
    var slider = new MasterSlider();
    slider.control('arrows');
    slider.control('bullets');

    slider.setup('masterslider', {
        width: 1400,
        /*slider standard width*/
        height: 625,
        /* slider standard height*/
        space: 0,
        speed: 45,
        layout: 'fillwidth',
        loop: true,
        preload: 0,
        autoplay: true,
        view: "parallaxMask"
    });

    /* ======= FUN FACT COUNTER  ======= */
    $('.counter-stats').counterUp({
        delay: 10,
        time: 2000
    });

    /* POST SLIDER */
    $("#post-slider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        autoPlay: true,
        stopOnHover: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    /* MAGNIFIC POPUP */
    $(window).on('load', function() {
        $('.tt-lightbox').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false
        });
    });

    /*ACCORDION*/
    $('.accordion-title a').on('click', function(event) {
        event.preventDefault();
        if ($(this).parents('li').hasClass('open')) {
            $(this).parents('li').removeClass('open').find('.accordion-content').slideUp(400);
        } else {
            $(this).parents('.accordion').find('.accordion-content').not($(this).parents('li').find('.accordion-content')).slideUp(400);
            $(this).parents('.accordion').find('> li').not($(this).parents('li')).removeClass('open');
            $(this).parents('li').addClass('open').find('.accordion-content').slideDown(400);
        }
    });

    /*TOP SEARCH SELECT*/
    $('.search-panel .dropdown-menu').find('a').on('click', function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });

    /*CONTACT FORM AJAX*/
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 5,
            },
            phone: {
                required: true,
                number: true,
            },
            message: {
                required: true,
                minlength: 5,
            },
        },
        messages: {
            name: {
                required: "Please enter a username",
                minlength: "Your Name must consist of at least 4 characters"
            },
            subject: {
                required: "Please provide a subject",
                minlength: "Your subject must be at least 5 characters long"
            },
            message: {
                required: "Please provide a message",
                minlength: "Your message must be at least 5 characters long",
            },
            email: "Please enter a valid email address",
            phone: "Please enter a valid Phone Number",
        },
        submitHandler: function(form) {
            $('#loader').show();
            $.ajax({
                type: "POST",
                url: 'php/contact-form.php',
                data: $("#contact-form").serialize(),

                success: function(response) {
                    if (response == "success") {

                        $('.alert_message').html('<h4> Thank you for your concern. We will contact you shortly.</h4>');
                        $('#loader').hide();
                        $('.alert_message').show();
                        $('#contact-form').each(function() {
                            this.reset();
                        });

                    }
                }
            });
        }

    });


    /*REQUEST A CALL AJAX*/

    $("#request-call-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 5,
            },
            phone: {
                required: true,
                number: true,
            },
            message: {
                required: true,
                minlength: 5,
            },
        },
        messages: {
            name: {
                required: "Please enter a username",
                minlength: "Your Name must consist of at least 4 characters"
            },
            subject: {
                required: "Please provide a subject",
                minlength: "Your subject must be at least 5 characters long"
            },
            message: {
                required: "Please provide a message",
                minlength: "Your message must be at least 5 characters long",
            },
            email: "Please enter a valid email address",
            phone: "Please enter a valid Phone Number",
        },
        submitHandler: function(form) {
            $('#loader').show();
            $.ajax({
                type: "POST",
                url: 'php/request-call-form.php',
                data: $("#request-call-form").serialize(),

                success: function(response) {
                    if (response == "success") {

                        $('.alert_message').html('<h4> Thank you for your concern. We will contact you shortly.</h4>');
                        $('#loader').hide();
                        $('.alert_message').show();
                        $('#request-call-form').each(function() {
                            this.reset();
                        });

                    }
                }
            });
        }

    });


})(jQuery);