$(document).ready(function () {
    /**
     * Menu click
     */
    $('.menu_btn').click(function () {
        $('.main_menu').toggle();
    }) ;
    /**
     * Menu page to scroll
     * */
    var menu_links = $(".main_menu a[href*='#']");
    menu_links.mPageScroll2id();
    menu_links.click(function () {
        $('.main_menu').hide();
    });
    /**
     * Sliders initialize
     */
    $("#Glide").glide();

});