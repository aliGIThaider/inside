var app = app || {};

app.plugins = (function ($) {
    function init() {
        swiper();
        //swiperInnerPage();
        flexslider();
    }

    function swiper() {
        var mySwiper = new Swiper ('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            effect: 'slide',
            simulateTouch: false,
            autoplay: 1000,
            speed: 400
        })
    }
    function swiperInnerPage() {
        var mySwiper = new Swiper ('.swiper-container-inner', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            effect: 'fade',
            speed: 400
        })
    }
    function flexslider() {
        var textRight = $('.text-right');
        var flexslider = $('.flexslider').flexslider({
            animation: "slide",
            prevText: '',
            nextText: '',
            slideshowSpeed: 2000,
            controlNav: false,
            after: function () {
                textRight.removeClass('slide2');
                textRight.removeClass('slide3');
                var num = $('.flex-active-slide').index();
                console.log(num);
                if (num == 2){
                    textRight.addClass('slide2');
                }
                if (num == 3) {
                    textRight.addClass('slide3');
                }
            }
        });

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
        waypoints();
        setClasses();
        titleFadeIn();
        animateOnScroll();
        crewmanClick();
        competBlockClick();
        hoverOnSlider();
        scrollToContacts();
        fixedMenu();

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
                            block.removeAttr('style');
                            maxHeight = $(this).outerHeight();
                            console.log(maxHeight);
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
        $(window).load(function() {
            function setHeightAndLines() {
                        maxHeight = 0;
                        conceptBlock.removeAttr('style');
                    if (conceptBlock.length>0){
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
                    } else {
                        $('.concept-block:nth-child(4) .line').css('top', '60px');
                        $('.concept-block:nth-child(5) .line').css('top', '80px');
                    }
                    if ($(window).width() < 641 ){
                        var concBlockHeight = maxHeight;
                        $('.concept-block:nth-child(4) .line').css('top', (concBlockHeight + 55) + 'px');
                        $('.concept-block:nth-child(5) .line').css('top', (concBlockHeight + 75) + 'px');
                    }
            }
            setHeightAndLines();
            $(window).resize(function () {
                window.setTimeout(function() {
                    setHeightAndLines();
                }, 200);
            });
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
    function setClasses() {
        var crewmanBlock = $('.crewman-block'),
            competBlock = $('.competencies-block');
        crewmanBlock.filter(':first').addClass('left');
        crewmanBlock.filter(':nth-child(2)').addClass('center');
        crewmanBlock.filter(':nth-child(3)').addClass('right');

        competBlock.filter(':first').addClass('left');
        competBlock.filter(':nth-child(2)').addClass('left');
        competBlock.filter(':nth-child(3)').addClass('right');
        competBlock.filter(':nth-child(4)').addClass('right');
        competBlock.filter(':nth-child(4)').addClass('hover');
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

        if ($(window).width()>480) {
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
        } else {
            $('.animated').removeClass('animated');
            $('.first-slider-sect .container').css('opacity', '1');
        }

    }
    function crewmanClick() {
        $('.crewman-block').on('click', function(e){
            e.preventDefault();
        });
    }
    function competBlockClick() {
        var competBlock = $('.competencies-block');
        competBlock.filter(':first').on('click', function (e) {
            e.preventDefault();
        });
        competBlock.filter(':nth-child(2)').on('click', function (e) {
            e.preventDefault();
        });
        competBlock.filter(':nth-child(3)').on('click', function (e) {
            e.preventDefault();
        });
    }

    function hoverOnSlider() {
        var logo = $('.swiper-slide .logo-mittel'),
            link = $('.swiper-slide .dienstle'),
            textTop = $('.text-top'),
            textHidden1 = $('.text-hidden-1'),
            textHidden2 = $('.text-hidden-2');
        logo.hover(
            function () {
                link.addClass('disabled');
                textTop.addClass('light');
                textHidden1.addClass('visible');
            },
            function () {
                link.removeClass('disabled');
                textTop.removeClass('light');
                textHidden1.removeClass('visible');
            }
        );
        link.hover(
            function () {
                textTop.addClass('light');
                logo.addClass('disabled');
                textHidden2.addClass('visible');
            },
            function () {
                logo.removeClass('disabled');
                textTop.removeClass('light');
                textHidden2.removeClass('visible');
            }
        )
    }

    function scrollToContacts() {
        $('.header-link').on('click', function () {
            $('nav ul li a').removeClass('active');
            $('nav ul li a.contacts').addClass('active');
        })
    }
    function fixedMenu() {
        $('.navbar').scrollToFixed();
    }
    function waypoints() {
        var navLinks = $('nav ul li a');


        var elements = $('.waypoint');
        var element1 = $('#header');
        var element2 = $('#kompetenzen');
        var element3 = $('#konzept');
        var element4 = $('#uber-uns');
        var element5 = $('#kontakt');
        if ($('#header').length>0) {
            var offset = parseInt($(window).height()*0.15);
            var begin1 = parseInt(element1.offset().top);
            var begin2 = parseInt(element2.offset().top);
            var begin3 = parseInt(element3.offset().top);
            var begin4 = parseInt(element4.offset().top);
            var begin5 = parseInt(element5.offset().top);
            var end1 = begin1 + parseInt(element1.outerHeight());
            var end2 = begin2 + parseInt(element2.outerHeight());
            var end3 = begin3 + parseInt(element3.outerHeight());
            var end4 = begin4 + parseInt(element4.outerHeight());
            var end5 = begin5 + parseInt(element5.outerHeight());

            $(window).resize(function () {
                offset = parseInt($(window).height()*0.15);
                begin1 = parseInt(element1.offset().top);
                begin2 = parseInt(element2.offset().top);
                begin3 = parseInt(element3.offset().top);
                begin4 = parseInt(element4.offset().top);
                begin5 = parseInt(element5.offset().top);
                end1 = begin1 + parseInt(element1.outerHeight());
                end2 = begin2 + parseInt(element2.outerHeight());
                end3 = begin3 + parseInt(element3.outerHeight());
                end4 = begin4 + parseInt(element4.outerHeight());
                end5 = begin5 + parseInt(element5.outerHeight());
            });
        }




        var lastScrollTop = 0;
        var id;
        $(window).scroll(function () {
            var st = $(this).scrollTop();
            if (st > lastScrollTop){
                var scrollPos = parseInt(window.pageYOffset);

                if ( scrollPos > begin1){
                    if ( scrollPos < end1 ){
                        if (!element1.hasClass('active')) {
                            navLinks.removeClass('active');
                            id = element1.attr('id');
                            $('nav ul li a[href*="' + id + '"]').addClass('active');
                        }
                    }
                }
                if ( scrollPos > begin2){
                    if ( scrollPos < end2 ){
                        if (!element2.hasClass('active')) {
                            navLinks.removeClass('active');
                            id = element2.attr('id');
                            $('nav ul li a[href*="' + id + '"]').addClass('active');
                        }
                    }
                }
                if ( scrollPos > begin3){
                    if ( scrollPos < end3 ){
                        if (!element3.hasClass('active')) {
                            navLinks.removeClass('active');
                            id = element3.attr('id');
                            $('nav ul li a[href*="' + id + '"]').addClass('active');
                        }
                    }
                }
                if ( scrollPos > begin4){
                    if ( scrollPos < end4 ){
                        if (!element4.hasClass('active')) {
                            navLinks.removeClass('active');
                            id = element4.attr('id');
                            $('nav ul li a[href*="' + id + '"]').addClass('active');
                        }
                    }
                }
                if ( scrollPos > begin5){
                    if ( scrollPos < end5 ){
                        if (!element5.hasClass('active')) {
                            navLinks.removeClass('active');
                            id = element5.attr('id');
                            $('nav ul li a[href*="' + id + '"]').addClass('active');
                        }
                    }
                }
            } else {
                var scrollPos = parseInt(window.pageYOffset);
                if ( scrollPos > begin1){
                    if ( scrollPos < end1 ){
                        if (!element1.hasClass('active')) {
                            navLinks.removeClass('active');
                            id = element1.attr('id');
                            $('nav ul li a[href*="' + id + '"]').addClass('active');
                        }
                    }
                    if ( scrollPos > begin2){
                        if ( scrollPos < end2 ){
                            if (!element2.hasClass('active')) {
                                navLinks.removeClass('active');
                                id = element2.attr('id');
                                $('nav ul li a[href*="' + id + '"]').addClass('active');
                            }
                        }
                    }
                    if ( scrollPos > begin3){
                        if ( scrollPos < end3 ){
                            if (!element3.hasClass('active')) {
                                navLinks.removeClass('active');
                                id = element3.attr('id');
                                $('nav ul li a[href*="' + id + '"]').addClass('active');
                            }
                        }
                    }
                    if ( scrollPos > begin4){
                        if ( scrollPos < end4 ){
                            if (!element4.hasClass('active')) {
                                navLinks.removeClass('active');
                                id = element4.attr('id');
                                $('nav ul li a[href*="' + id + '"]').addClass('active');
                            }
                        }
                    }
                    if ( scrollPos > begin5){
                        if ( scrollPos < end5 ){
                            if (!element5.hasClass('active')) {
                                navLinks.removeClass('active');
                                id = element5.attr('id');
                                $('nav ul li a[href*="' + id + '"]').addClass('active');
                            }
                        }
                    }
                }
            }
            lastScrollTop = st;
        });


        $("a.scrollto").click(function () {
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top;
            if ($(window).width() < 769){
                destination = $(elementClick).offset().top - 57;
            }
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
            return false;
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
