//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
//Author URL: http://webdesign-master.ru
(function($) {
    $.fn.animated = function(inEffect, outEffect) {

        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            } else {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            };
        }, {
            offset: "80%"
        }).waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            } else {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            };
        }, {
            offset: -$(window).height()
        });
    };
})(jQuery);

$(document).ready(function () {
   $('.main_menu').animated('flipInX','flipOutX');
   $('header .content').animated('fadeInRight','fadeOutLeft');
   $('header .logo').animated('fadeInRight','fadeOutLeft');
   $('.solutions .ready').animated('fadeInLeft','fadeOutRight');
   $('.solutions .individual').animated('fadeInRight','fadeOutLeft');
   $('.advantage').animated('zoomIn','zoomOut');
    $('.advantages h2').animated('fadeIn','fadeOut');
    $('.oils .oil').animated('fadeInRight','fadeOutLeft');
    $('.oils .text').animated('fadeIn','fadeOut');
    $('.discounts .discount').animated('fadeInLeft','fadeOutRight');
    $('.discounts h2').animated('fadeIn','fadeOut');

});