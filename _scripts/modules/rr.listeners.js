/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Listeners
 */
var RR = (function (parent, $) {
    'use strict';

    var setup = function () {
        var $window = $(window),
            $body = $('body'),
            $header = $('.header'),
            isMobileDevice = $window.width() < 768 ? true : false,
            lastScrollTop = 0;

        $window.on('resize scroll', debounce(toggleHeader, 250));

        function toggleHeader() {
            var st = $(this).scrollTop(),
                $headerHeight = $header.height();

            isMobileDevice = $window.width() < 1024 ? 1 : 0;

            if (!isMobileDevice) {
                if (st > lastScrollTop) {
                    // scroll down
                    if (st > $headerHeight) {
                        $header.addClass('hide').removeClass('compact');
                    }
                } else {
                    // scroll up
                    if (st <= $headerHeight) {
                        $header.removeClass('compact hide');
                    } else {
                        $header.addClass('compact');
                    }
                }
            }

            lastScrollTop = st;
        };


        // Wayfinder Listeners
        $('.js-open-path').on('click', function (e) {
            e.preventDefault();

            var $this = $(this),
                data = $this.data('path');

            TweenMax.staggerTo('.controls .col', 0.5, {
                autoAlpha: 0,
                scale: 0.75,
                ease: Expo.easeOut
            }, 0.1, function() {
                $('.action').addClass('show');
                $('.levels').addClass('levels--open');
                $('.levels .level').addClass('level--current');
                $('.level__pins').addClass('level__pins--active');
            });
        });

        $('.js-close-path').on('click', function (e) {
            e.preventDefault();

            $('.action').removeClass('show');
            $('.levels').removeClass('levels--open');
            $('.levels .level').removeClass('level--current');
            $('.level__pins').removeClass('level__pins--active');

            var $this = $(this),
                data = $this.data('path');

            TweenMax.staggerTo('.controls .col', 0.5, {
                autoAlpha: 1,
                scale: 1,
                ease: Expo.easeOut,
                delay: 0.5
            }, 0.1);
        });
    };

    // Export module method
    parent.listeners = {
        setup: setup
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.listeners.setup();
});
