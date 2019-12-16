$(document).ready(function () {
    $('#myCarousel').hide().fadeIn(2300).delay(6000)
});
//BOUTONS SPECIAUX
$('#ctCoin').click(function(){
    $('.grosContainer2').css('background-image', "url(img/ctBackground.png)");
    $('.parallaxPageIntro2').css('background-image', "url(img/ctBackgroundIntro.jpg)");
    $('.footer2').css('background-color','#005778');
    $('.principes').css('background-color','rgba(20,200,255,0.7)');
});
$('#tCoin').click(function(){
    $('.grosContainer2').css('background-image', "url(img/tBackground.png)");
    $('.parallaxPageIntro2').css('background-image', "url(img/tBackgroundIntro.jpg)");
    $('.footer2').css('background-color','#ac8349');
    $('.principes').css('background-color','rgba(218,165,32,0.7)');
});
$('#restart').click(function(){
    $('.grosContainer2').css('background-image', "url(img/csBg2.jpg");
    $('.parallaxPageIntro2').css('background-image', "url(img/dust2map.png");
    $('.footer2').css('background-color','dimgrey');
    $('.principes').css('background-color','rgba(180,255,20,0.7)');
});
$(function () {
    $('[data-toggle="popover"]').popover()
});