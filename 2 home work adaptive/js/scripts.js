
$(document).ready(function(){
    $('.fourth-block-block1').hover(function(){
        $('.fourth-block-block-hover-block1').fadeToggle('fast');
    });
    $('.fourth-block-block2').hover(function(){
        $('.fourth-block-block-hover-block2').fadeToggle('fast');
    });
    $('.fourth-block-block3').hover(function(){
        $('.fourth-block-block-hover-block3').fadeToggle('fast');
    });
    $('.fourth-block-block4').hover(function(){
        $('.fourth-block-block-hover-block4').fadeToggle('fast');
    });
    $('.bxslider').bxSlider();
    $('.seventh-block-form-input').submit();
    $('.menu').slicknav({
        prependTo:'.header-mobile-menu'
    });
});

