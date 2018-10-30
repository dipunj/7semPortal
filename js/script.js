$(document).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
});

var jumboHeight = $('.jumbotron').outerHeight();

function parallax(){
    var scrolled = $(window).scrollTop();
    $('header').css('background-position-y', (-scrolled/5) + 'px');
}

$(window).scroll(function(e){
    parallax();
});