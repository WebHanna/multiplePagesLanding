$(document).ready(function(){
    $('.bxslider').bxSlider();
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".section_seven").offset().top
    }, 1000);
});

$("#services").click(function() {
    $('html, body').animate({
        scrollTop: $(".section_two").offset().top
    }, 1000);
});

$("#about_us").click(function() {
    $('html, body').animate({
        scrollTop: $(".section_four").offset().top
    }, 1000);

});

$("#news").click(function() {
    $('html, body').animate({
        scrollTop: $(".section_six").offset().top
    }, 1000);
});

$("#contact_sm").click(function() {
    $('html, body').animate({
        scrollTop: $(".section_seven").offset().top
    }, 1000, function () {
        $('.close').click();
    });
});

$("#services_sm").click(function() {
    $('html, body').animate({
        scrollTop: $(".section_two").offset().top
    }, 1000, function () {
        $('.close').click();
    });
});

$("#about_us_sm").click(function(e) {
    $('html, body').animate({
        scrollTop: $(".section_four").offset().top
    }, 1000, function () {
        $('.close').click();
    });
});

$("#news_sm").click(function() {
    $('html, body').animate({
        scrollTop: $(".section_six").offset().top
    }, 1000, function () {
        $('.close').click();
    });
});
