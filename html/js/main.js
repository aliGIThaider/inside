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
        setEqualHeight($('.concept-block'));
        konzept();
        crewmanHover();
    }

    function setEqualHeight(elem) {
        /* set equal height of elements. detect highest element and set this height to other elements */
        $(window).load(function() {
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
        });
    }
    function konzept() {
        var conceptBlock = $('.concept-block');
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
