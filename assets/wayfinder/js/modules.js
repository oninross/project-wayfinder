/*! wayfinder 2016-07-30 */
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
;/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true, scrollMonitor: true */
/* jshint unused: false, strict: false */

/**
 * RR - Material Design Components
 */
var RR = (function (parent, $) {
    'use strict';

    var $body = $('body'),
        $window = $(window),
        isMobileDevice = $window.width() < 1024 ? 1 : 0;

    // Select Box Beautifier
    $.fn.materialize = function () {
        return this.each(function () {
            var $this = $(this),
                $label = $('<span class = "material-label"/>'),
                $arrow = $('<span class = "icon icon-chevron-down"/>'),
                $wrapper = $('<div class = "material-select-wrapper js-material-drop"/>'),
                $wrapperNative = $('<div class = "material-select-wrapper native js-material-drop"/>'),
                markup = '';

            if ($this.hasClass('native')) {
                $this.wrap($wrapperNative);
            } else {
                $this.wrap($wrapper);
            }

            $this
                .before($label)
                .before($arrow)
                .on('change', function (e) {
                    $label.text($this.find(':selected').text());
                });

            $label.text($this.find(':selected').text());

            markup += '<div class="card-wrapper"><ul>';

            $this.find('option').each(function () {
                var $that = $(this);

                if ($that.is(':selected')) {
                    markup += '<li class="active"><button>' + $that.text() + '</button></li>';
                } else {
                    markup += '<li><button>' + $that.text() + '</button></li>';
                }
            });

            markup += '</ul></div>';

            $this.after(markup);

            $this.parent().on('click', '.material-label', function () {
                var $this = $(this),
                    $parent = $this.parent(),
                    $card = $this.parent().find('.card-wrapper');

                if ($parent.hasClass('native') && isMobileDevice) {
                    return false;
                }

                if ($this.hasClass('active')) {
                    TweenMax.to($card, 0.25, {
                        autoAlpha: 0,
                        scale: 0.75,
                        ease: Expo.easeOut,
                        onComplete: function () {
                            TweenMax.set($card.find('li'), {
                                opacity: 1,
                                top: 0
                            });
                        }
                    });
                } else {
                    var activeInd = $card.find('.active').index(),
                        materialDropPos = $('.material-select-wrapper .card-wrapper li').outerHeight() * activeInd;

                    TweenMax.to($card, 0.25, {
                        autoAlpha: 1,
                        scale: 1,
                        top: -materialDropPos,
                        ease: Expo.easeOut
                    });

                    TweenMax.staggerTo($card.find('li'), 1, {
                        opacity: 1,
                        top: 0,
                        ease: Expo.easeOut,
                        delay: 0.3
                    }, 0.1);
                }

                $this.toggleClass('active');

                $card.addClass('active').mCustomScrollbar('scrollTo', 0);

                $window.on('resize scroll', debounce(listener, 250));
            }).on('click', 'button', function (e) {
                e.preventDefault();

                var $this = $(this),
                    $cardWrapper = $this.parents('.card-wrapper'),
                    $materialSelectWrapper = $this.parents('.material-select-wrapper'),
                    $parent = $this.parent(),
                    ind = $parent.index() + 1,
                    selectedValue = $materialSelectWrapper.find('select option:nth-child(' + ind + ')').val();

                if ($parent.hasClass('native') && isMobileDevice) {
                    return false;
                }

                $materialSelectWrapper.find('.active').removeClass('active');
                $parent.addClass('active');

                TweenMax.to($cardWrapper, 0.25, {
                    autoAlpha: 0,
                    scale: 0,
                    ease: Expo.easeIn,
                    onComplete: function () {
                        TweenMax.set($cardWrapper.find('li'), { opacity: 0, top: -20 });
                    }
                });

                $materialSelectWrapper
                    .find('select').val(selectedValue).trigger('change').end()
                    .find('.material-label').text($this.text());

                $window.off('resize scroll', listener, 250);
            });

            $this.next().mCustomScrollbar({
                setTop: 0,
                setHeight: 250,
                theme: 'minimal-dark',
                scrollbarPosition: 'outside'
                // SET SCROLLABALE
            });

            $body.on('click', function (e) {
                var $eTarget = $(e.target),
                    $materialSelectWrapper = $('.material-select-wrapper'),
                    $cardWrapper = $('.material-select-wrapper .card-wrapper');

                if (!$eTarget.hasClass('material-select-wrapper') && !$eTarget.parents('.material-select-wrapper').length) {
                    $materialSelectWrapper.find('.material-label').removeClass('active');

                    TweenMax.to($cardWrapper, 0.25, {
                        autoAlpha: 0,
                        scale: 0,
                        top: 0,
                        ease: Expo.easeInOut,
                        onComplete: function () {
                            TweenMax.set($cardWrapper.find('li'), {
                                opacity: 0,
                                top: -20
                            });
                        }
                    });

                    $window.off('resize scroll', debounce(listener, 250));
                }
            });

            function listener() {
                $('.material-select-wrapper').find('.material-label').removeClass('active');

                TweenMax.to('.material-select-wrapper .card-wrapper', 0.5, {
                    autoAlpha: 0,
                    scale: 0,
                    top: 0,
                    ease: Expo.easeIn,
                    onComplete: function () {
                        TweenMax.set('.material-select-wrapper .card-wrapper li', {
                            opacity: 0,
                            top: -20
                        });
                    }
                });

                $window.off('resize scroll', debounce(listener, 250));
            };
        });
    };

    var setup = function () {

        // Ripple Effect
        var $rippleEffect = $('button, .cta');

        $rippleEffect.on('click', function (e) {
            var $this = $(this);

            if (!$this.hasClass('disabled')) {
                ripple(e, $this);
            }
        });


        // Hamburger Menu
        var $materialMenu = $('.material-menu');

        // TimelineMax the menu-icon animation for easier control on Touch/Mouse Events
        var tl = new TimelineMax();

        tl.to('.material-menu .top', 0.2, { top: 4, ease: Expo.easeInOut });
        tl.to('.material-menu .bot', 0.2, { top: -4, ease: Expo.easeInOut }, '-=0.2');

        tl.to('.material-menu .mid', 0.2, { opacity: 0, ease: Expo.easeInOut });
        tl.to('.material-menu .top', 0.2, { rotation: 45, ease: Expo.easeInOut }, '-=0.2');
        tl.to('.material-menu .bot', 0.2, { rotation: -45, ease: Expo.easeInOut }, '-=0.2');


        // Stop the Timeline at 0 else the animation will play after initiation
        tl.pause();

        $materialMenu.on('click', function () {
            var $this = $(this);

            $this.toggleClass('active');

            if ($this.hasClass('active')) {
                tl.reverse();
            } else {
                tl.play();
            }
        });


        // Floating Label Input Box
        $('.floating-input').each(function () {
            var $this = $(this);

            $this
                .wrap('<div class="floating"></div>')
                .before('<span class="placeholder">' + $this.attr('placeholder') + '</span>')
                .attr('placeholder', '')
                .on('focus', function () {
                    var $this = $(this);

                    $this.parent().addClass('focus');
                }).on('blur', function () {
                    var $this = $(this);

                    if ($this.val() === '') {
                        $this.parent().removeClass('focus');
                    }
                });

            if ($this.data('hint') !== undefined && $this.data('hint') !== '') {
                $this.after('<span class="hint"><strong>*Hint: </strong>' + $this.data('hint') + '</span>');
            }

            $('.placeholder').on('click', function () {
                $(this).next().focus();
            });
        });


        // Progress Bar
        $('.progress').each(function () {
            var $this = $(this),
                $progressBar = $this.find('.progress-bar');

            if ($progressBar.data('value') !== undefined) {
                $progressBar.css({ width: $progressBar.data('value') + '%' });
            }
        });

        $('.material').materialize();

        // cards
        var $card = $('.card');
        if ($card.length) {
            $card.each(function (i, el) {
                var $this = $(el);

                var cardWatcher = scrollMonitor.create(el);
                cardWatcher.enterViewport (function () {
                    $this.addClass('show', this.isInViewport);
                    $this.removeClass('up', this.isAboveViewport);
                });

                cardWatcher.exitViewport(function () {
                    $this.removeClass('show', this.isInViewport);
                    $this.toggleClass('up', this.isAboveViewport);
                });
            });

            scrollMonitor.recalculateLocations();
        }

        $window.on('resize', debounce(function () {
            isMobileDevice = $window.width() < 1024 ? true : false;
        }, 250));
    };

    /* Toaster */
    var toasterInd = 0;
    var toaster = function (msg) {
        // Alert Toaster
        var popupAlert = doT.template($('#toaster-template').html()),
            obj = {
                ind: toasterInd,
                message: msg
            };

        if (!$('.toaster-wrap').length) {
            $('#main').after('<div class="toaster-wrap" />');
        }

        $('.toaster-wrap').append(popupAlert(obj));

        var toaster = '.toaster' + toasterInd;

        TweenMax.to(toaster, 0.75, {
            scale: 1,
            ease: Expo.easeOut
        });

        TweenMax.to(toaster, 0.75, {
            scale: 0,
            ease: Expo.easeOut,
            delay: 5,
            onComplete: function () {
                $(toaster).remove();
            }
        });

        $(toaster).on('click', function (e) {
            e.preventDefault();

            TweenMax.to($(this), 0.75, {
                scale: 0,
                ease: Expo.easeOut,
                onComplete: function () {
                    $(toaster).remove();
                }
            });
        });

        toasterInd++;
    };

    /* Ripple Effect */
    var inc = 0;
    var ripple = function (e, el) {
        if ($('.no-svg').length) {
            return false;
        }

        // create SVG element
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            g = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
            circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
            x = e.offsetX,
            y = e.offsetY;

        svg.setAttributeNS(null, 'class', 'ripple ripple' + inc);
        g.setAttributeNS(null, 'transform', 'translate(' + x + ', ' + y + ')');
        circle.setAttributeNS(null, 'r', (parseInt(el.outerWidth()) + x));

        svg.appendChild(g);
        g.appendChild(circle);
        el.append(svg);

        var $ripple = el.find('.ripple' + inc);
        TweenMax.from($ripple.find('circle'), 1.5, {
            attr: { r: 0 },
            opacity: 0.75,
            ease: Expo.easeOut,
            onComplete: function () {
                $ripple.remove();
            }
        });

        inc++;
    };

    // Export module method
    parent.materialDesign = {
        setup: setup,
        ripple: ripple,
        toaster: toaster
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    'use strict';
    // Self-init Call
    RR.materialDesign.setup();
});
;/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Awesome Mobile Menu
 */
var RR = (function (parent, $) {
    'use strict';

    var el = $('#primary-nav'),
        mobileMenuMarkup = '<button class="menu js-mobile-menu"><span class="line top"></span><span class="line mid"></span><span class="line bot"></span></button>',
        subNavMarkup = '<button class="sub-nav js-sub-nav icon-arrow"><span class="vh">Sub-navigation</span></button>',
        $dropdownList,
        $lvl1 = el.find('.lvl1'),
        $lvl2 = el.find('.lvl2'),
        $lvl3 = el.find('.lvl3'),
        $set = $lvl1.add($lvl2).add($lvl3),
        $window = $(window),
        isMobileDevice = $window.width() < 1024 ? true : false;

    var setup = function () {
        el.prepend(mobileMenuMarkup);

        // Insert Subnav Markup after Level 1 menu items
        $lvl1.find('ul').each(function () {
            $(this).before(subNavMarkup);
        });

        // TimelineMax the menu-icon animation for easier control on Touch/Mouse Events
        var tl = new TimelineMax();

        tl.to(el.find('.top'), 0.2, { top: 4, ease: Expo.easeInOut });
        tl.to(el.find('.bot'), 0.2, { top: -4, ease: Expo.easeInOut }, '-=0.2');

        tl.to(el.find('.mid'), 0.2, { opacity: 0, ease: Expo.easeInOut });
        tl.to(el.find('.top'), 0.2, { rotation: 45, ease: Expo.easeInOut }, '-=0.2');
        tl.to(el.find('.bot'), 0.2, { rotation: -45, ease: Expo.easeInOut }, '-=0.2');


        // Stop the Timeline at 0 else the animation will play after initiation
        tl.pause();

        // Declare Eventlisteners
        $dropdownList = el.find('ul li');

        var $mobileMenu = $('.js-mobile-menu'),
            $subNav = $('.js-sub-nav');

        TweenMax.killTweensOf($dropdownList);

        $mobileMenu.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var $this = $(this);

            if ($this.hasClass('active')) {
                $this.removeClass('active');
                $set.find('.icon-arrow.active').removeClass('active');

                tl.reverse();

                TweenMax.to($lvl1, 0.25, {
                    autoAlpha: 0,
                    scale: 0.75,
                    ease: Expo.easeOut,
                    onComplete: function () {
                        TweenMax.set($lvl1.find('> li'), { opacity: 0, top: -30 });

                        $lvl2.hide();
                        $lvl3.hide();
                    }
                });
            } else {
                $this.addClass('active');

                tl.play();

                $lvl1.slideDown({
                    duration: 750,
                    easing: 'easeOutExpo',
                    queue: false
                });

                TweenMax.to($lvl1, 0.25, {
                    scale: 1,
                    autoAlpha: 1,
                    ease: Expo.easeOut,
                    onComplete: function () {
                        TweenMax.staggerTo($lvl1.find('> li'), 1, {
                            opacity: 1,
                            top: 0,
                            ease: Expo.easeOut
                        }, 0.05);

                        checkNavHeight();
                    }
                });
            }
        });

        $subNav.on('touchend, click', function () {
            var $this = $(this),
                $grandParent = $this.parent().parent(),
                $next = $this.next();

            if ($this.hasClass('active')) {
                if ($next.hasClass('lvl2')) {
                    $set.find('.icon-arrow.active').removeClass('active');

                    $this.removeClass('active')
                        .next().find('.icon-arrow.active')
                        .removeClass('active');

                    $lvl3.slideUp({
                        duration: 500,
                        easing: 'easeOutExpo'
                    });

                    $next.slideUp({
                        duration: 500,
                        easing: 'easeOutExpo',
                        queue: false,
                        complete: function () {
                            TweenMax.set($lvl2.find('li'), {
                                opacity: 0,
                                top: -30
                            });

                            checkNavHeight();
                        }
                    });
                } else {
                    $this.removeClass('active');

                    $next.slideUp({
                        duration: 750,
                        easing: 'easeOutExpo',
                        queue: false,
                        complete: function () {
                            TweenMax.set($next.find('li'), {
                                opacity: 0,
                                top: -30
                            });

                            checkNavHeight();
                        }
                    });
                }
            } else {
                if ($grandParent.hasClass('lvl1')) {
                    $lvl1
                        .find('.icon-arrow.active')
                            .removeClass('active')
                            .next().slideUp({
                                duration: 750,
                                easing: 'easeOutExpo'
                            });
                } else if ($grandParent.hasClass('lvl2')) {
                    $lvl2
                        .find('.icon-arrow.active')
                            .removeClass('active')
                            .next().slideUp({
                                duration: 750,
                                easing: 'easeOutExpo'
                            });
                }

                $this.addClass('active');

                $next.slideDown({
                    duration: 750,
                    easing: 'easeOutExpo',
                    queue: false,
                    complete: checkNavHeight
                });

                TweenMax.staggerTo($next.find('> li'), 1, {
                    opacity: 1,
                    top: 0,
                    ease: Expo.easeOut
                }, 0.1);
            }
        });

        // Primary Nav Mouse Listeners
        el.on('click', '.no-link', function (e) {
            e.preventDefault();
            var $this = $(this),
                $next = $this.next();

            $next.trigger('click');

            RR.materialDesign.ripple(e, $this);
        }).on('click', '.lvl2 a', function (e) {
            var $this = $(this),
                $next = $this.next();

            if ($this.attr('src') === '#' && $this.parent().hasClass('no-link')) {
                $next.trigger('click');
            }

            RR.materialDesign.ripple(e, $this);
        }).on('mouseover', '.lvl1 a', function () {
            var $this = $(this),
                $next = $this.next();

            if (!isMobileDevice && !$next.hasClass('active')) {
                $next.trigger('click');
            }
        }).on('mouseout', '.lvl1 a', function () {
            var $this = $(this),
                $next = $this.next();

            if (!isMobileDevice && !$next.hasClass('active')) {
                $next.trigger('click');
            }
        });

        var $body = $('body');
        $body.on('click', function (e) {
            var $eTarget = $(e.target);

            if (!$eTarget.hasClass('nav') && !$eTarget.parents('.nav').length) {
                if ($mobileMenu.hasClass('active')) {
                    $mobileMenu.trigger('click');
                }

                $('.js-sub-nav.active').trigger('click');
            }
        });

        // Window Listener
        $window.on('resize', debounce(function () {
            isMobileDevice = $window.width() < 1024 ? true : false;

            if (isMobileDevice) {
                $mobileMenu.removeClass('active');
                $set.find('.icon-arrow.active').removeClass('active');

                tl.reverse();

                TweenMax.to($lvl1, 0.25, {
                    scale: 0,
                    ease: Expo.easeOut,
                    onComplete: function () {
                        TweenMax.set($lvl1.find('> li'), { opacity: 0, top: -30 });

                        $lvl2.hide();
                        $lvl3.hide();
                    }
                });
            } else {
                $lvl1.show();
                TweenMax.set($lvl1, { scale: 1 });
                TweenMax.set($lvl1.find('li'), { opacity: 1, top: 0 });

                $('.js-sub-nav.active').trigger('click');
            }

            checkNavHeight();
        }, 250));

        $window.on('scroll', debounce(function () {
            isMobileDevice = $window.width() < 1024 ? true : false;

            if (!isMobileDevice) {
                $('.js-sub-nav.active').trigger('click');
            }
        }, 250));
    };

    function checkNavHeight() {
        var $lvl1 = $('#primary-nav .lvl1'),
            $visibleArea = $window.outerHeight() - $('.header').outerHeight();

        if ($lvl1.outerHeight() > $visibleArea) {
            $lvl1.css({
                height: $visibleArea
            });
        } else {
            $lvl1.css({
                height: 'auto'
            });
        }
    };

    // Export module method
    parent.mobileMenu = {
        setup: setup
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.mobileMenu.setup();
});
