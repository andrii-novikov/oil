$(document).ready(function () {
    $('.menu_btn').click(function () {
        $('.main_menu').toggle();
    }) ;
    $("#Glide").glide();
    $(".main_menu a[href*='#']").mPageScroll2id();
    $(".main_menu a[href*='#']").click(function () {
        $('.main_menu').hide();
    });
});