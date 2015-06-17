var app = app || {};

app.plugins = (function ($) {
    function init() {
        swiper();
    }

    function swiper() {
        var mySwiper = new Swiper ('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            effect: 'fade',
            autoplay: 7000,
            speed: 800
        })
    }

    return {
        init: init
    };
})(jQuery);

app.events = (function ($) {
    function init() {
        setEqualHeight($('.competencies-block'));
        konzept();
        crewmanHover();
        menuScroll();
        crewmansSetClasses();
        titleFadeIn();
        animateOnScroll();
    }

    function setEqualHeight(elem) {
        /* set equal height of elements. detect highest element and set this height to other elements */
        $(window).load(function() {
            if ($(window).width() > 640){
                var block = elem;
                if (block.length>0){
                    var maxHeight = 0;
                    block.each(function () {
                        if ($(this).outerHeight()>maxHeight){
                            maxHeight = $(this).outerHeight();
                        }
                    });
                    block.css('height', maxHeight);
                }
            }
        });
        $(window).resize(function () {
            if ($(window).width() > 640){
                var block = elem;
                if (block.length>0){
                    var maxHeight = 0;
                    block.each(function () {
                        if ($(this).outerHeight()>maxHeight){
                            maxHeight = $(this).outerHeight();
                        }
                    });
                    block.css('height', maxHeight);
                }
            }
        })
    }
    function konzept() {
        var conceptBlock = $('.concept-block'),
            maxHeight;
        function setHeightAndLines() {
            $(window).load(function() {
                if (conceptBlock.length>0){
                    maxHeight = 0;
                    conceptBlock.each(function () {
                        if ($(this).outerHeight()>maxHeight){
                            maxHeight = $(this).outerHeight();
                        }
                    });
                    conceptBlock.css('height', maxHeight);
                }
                if ($(window).width() < 769 ){
                    var concBlockHeight = maxHeight;
                    $('.concept-block:nth-child(4) .line').css('top', (concBlockHeight + 55) + 'px');
                    $('.concept-block:nth-child(5) .line').css('top', (concBlockHeight + 75) + 'px');
                }
                if ($(window).width() < 641 ){
                    var concBlockHeight = maxHeight;
                    $('.concept-block:nth-child(4) .line').css('top', (concBlockHeight + 55) + 'px');
                    $('.concept-block:nth-child(5) .line').css('top', (concBlockHeight + 75) + 'px');
                }
            }
        )}
        setHeightAndLines();
        $(window).resize(function () {
            setHeightAndLines();
        });




        $('.bulb-wrap').hover(
            function () {
                $('.concept-block:lt(2)').addClass('hover');
            },
            function () {
                conceptBlock.removeClass('hover');
            }
        );
        $('.konzept-wrap').hover(
            function () {
                conceptBlock.eq(2).addClass('hover');
                conceptBlock.eq(3).addClass('hover');
            },
            function () {
                conceptBlock.removeClass('hover');
            }
        );
        $('.puzzle-wrap').hover(
            function () {
                conceptBlock.eq(4).addClass('hover');
            },
            function () {
                conceptBlock.removeClass('hover');
            }
        );
    }
    function crewmanHover() {
        var crewmanBlock = $('.crewman-block'),
            $this,
            index;
        crewmanBlock.hover(
            function () {
                index = $(this).index() + 1;
                crewmanBlock.not($('.crewman-block:nth-child('+ index +')')).addClass('light');
            },
            function () {
                crewmanBlock.not($('.crewman-block:nth-child('+ index +')')).removeClass('light');
            }
        )
    }
    function menuScroll() {
        jQuery(document).ready(function() {
            jQuery("a.scrollto").click(function () {
                elementClick = jQuery(this).attr("href")
                destination = jQuery(elementClick).offset().top;
                jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
                return false;
            });
        });
    }
    function crewmansSetClasses() {
        var crewmanBlock = $('.crewman-block');
        crewmanBlock.addClass('left');
        console.log(crewmanBlock);
        crewmanBlock.filter(':first').addClass('left');
        crewmanBlock.filter(':nth-child(2)').addClass('center');
        crewmanBlock.filter(':nth-child(3)').addClass('right');
    }
    function titleFadeIn() {
        $(window).load(function() {
            $('header h1').addClass('fadeInLeft done');
            $('header p').addClass('fadeInDown done');
            $('header h2').addClass('fadeInUp done');
            $('.navbar').addClass('fadeInUp done');
        });
    }
    function animateOnScroll() {
        var windowHeight = $(window).height();
        var animateDelay = windowHeight;
        $(window).resize(function() {
            var animateDelay = windowHeight;
        });

        $(window).scroll(function() {
            var topOfWindow = $(window).scrollTop();
            $('.first-slider-sect .container').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });

            $('.competencies-sect h3').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });
            $('.competencies-sect .sect-descrip').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });
            $('.competencies-sect .sect-title-line').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });
            $('.competencies-block.left').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInLeft done");
                }
            });
            $('.competencies-block.right').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInRight done");
                }
            });

            $('.concept-sect h3').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });
            $('.concept-sect .sect-descrip').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });
            $('.concept-sect .sect-title-line').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });

            $('.concept-img').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });
            $('.concept-blocks-wrap').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("slideInLeft done");
                }
            });


            $('.about-us-section h3').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });
            $('.about-us-section .sect-descrip').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });
            $('.about-us-section .sect-title-line').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });

            $('.crewman-block.left').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInLeft done");
                }
            });
            $('.crewman-block.right').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInRight done");
                }
            });
            $('.crewman-block.center').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });

            $('.contact-sect h3').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });
            $('.contact-sect .sect-descrip').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });
            $('.contact-sect .sect-title-line').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });

            $('.contact-form').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInLeft done");
                }
            });
            $('.contact-info').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInRight done");
                }
            });

            $('.footer-block').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });

            $('.footer-bottom').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+animateDelay) {
                    $(this).addClass("fadeInUp done");
                }
            });



        });
    }

    return {
        init: init
    };
})(jQuery);


var App = (function($, app){
    function init () {
        app.events.init();
        app.plugins.init();
    }
    return {
        init: init
    };
})(jQuery, app);

$(function () {
    App.init();
});
