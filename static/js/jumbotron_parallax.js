//var jumboHeight = $('.jumbotron').outerHeight();  This got set to zero
var jumboHeight = 350;
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});