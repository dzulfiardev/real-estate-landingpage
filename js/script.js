// $(function () {

//     $(window).on('scroll', function () {
//         if ($(window).scrollTop()) {
//             $('#nav').addClass('light');
//             $('.nav-link').addClass('black');
//         }
//         else {
//             $('#nav').removeClass('light');
//             $('.nav-link').removeClass('black');
//         }
//     });


// $(window).on('scroll', function () {
//     if ($(window).scrollTop()) {
//         $('.nav-link').addClass('black');
//     }
//     else {
//         $('.nav-link').removeClass('black')
//     }
// })

// });


$(document).ready(function () {

    $("#owl-demo").owlCarousel({

        animateOut: 'fadeOut',
        //navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: false,  //is a shortcut for:
        items: 1, //
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true, //
        autoplayHoverPause: true,
        dots: true
        // itemsDesktop : false,
        // itemsDesktopSmall: true,
        // itemsTablet: true,
        // itemsMobile: true

    });

});

$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        // items: 3,
        // itemsDesktop: [1000, 3],
        // itemsDesktopSmall: [979, 2],
        // itemsTablet: [768, 2],
        // itemsMobile: [650, 1],
        dots: false,
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1

            },
            768: {
                items: 2

            },
            1000: {
                items: 3,
                loop: true
            }
        }

    });

    $('.section-head').parallaxie({
        speed: 0.4
    });

    $('.demo').parallaxie({
        speed: 0.5
    });

    // Nav Srolling
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            // $('#nav').addClass('light');
            $('#nav').addClass('black');
        }
        else {
            // $('#nav').removeClass('light');
            $('#nav').removeClass('black');
        }
    });

    // Lightbox
    lc_lightbox('.mybox', {
        wrap_class: 'lcl_fade_oc',
        fullscreen: true
    });


});


