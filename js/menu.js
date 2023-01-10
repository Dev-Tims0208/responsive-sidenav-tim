$(document).ready(function(){
    $('#mobile_nav_show').on('click', function(){
        // add css to class
        $('.hidden_nav').addClass('d-md-block');
        $('.hidden_nav').css('left', '0');
        $('.blur_wrap').addClass('d-block');
    });

    $('.blur_wrap').on('click', function(){
        // add css to class
        $('.hidden_nav').removeClass('d-md-block');
        $('.hidden_nav').css('left', '-100%');
        $('.blur_wrap').removeClass('d-block');
    });

    $('#mobile_toggle_nav').on('click', function(){
        // add css to class
        $('.hidden_nav').removeClass('d-md-block');
        $('.hidden_nav').css('left', '-100%');
        $('.blur_wrap').removeClass('d-block');
    });
})