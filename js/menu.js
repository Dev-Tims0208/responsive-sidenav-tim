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

    // if browser width more than 992px
    $(window).resize(function(){
        if($(window).width() > 992){ 
            $('.hidden_nav').css('left', '0'); 
            console.log($(window).width());
        }
        if($(window).width() <= 768){ 
            $('.hidden_nav').css('left', '-100%'); 
            console.log($(window).width());
        }
    });
     
})