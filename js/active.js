(function ($) {
    'use strict';
    var $window = $(window);

    // Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    var welcomeSlide = $('.welcome_slides');

    // Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000
        });
    }

    // Related Product Active Code
    if ($.fn.owlCarousel) {
        $('.you_make_like_slider').owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    }

    welcomeSlide.on('translate.owl.carousel', function () {
        var slideLayer = $("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).removeClass('animated ' + anim_name).css('opacity', '0');
        });
    });

    welcomeSlide.on('translated.owl.carousel', function () {
        var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).addClass('animated ' + anim_name).css('opacity', '1');
        });
    });

    $("[data-delay]").each(function () {
        var anim_del = $(this).data('delay');
        $(this).css('animation-delay', anim_del);
    });

    $("[data-duration]").each(function () {
        var anim_dur = $(this).data('duration');
        $(this).css('animation-duration', anim_dur);
    });

    

    // Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.karl-new-arrivals').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.karl-new-arrivals').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

   

    //  ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="ti-angle-up" aria-hidden="true"></i>'
        });
    }



    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

})(jQuery);