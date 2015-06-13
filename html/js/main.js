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
        competenciesBlocksHeight();
    }

    function competenciesBlocksHeight() {
        $(window).load(function() {
            var block = $('.competencies-block');
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
