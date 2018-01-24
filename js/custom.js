$(window).ready(function() {

    setTimeout(function () {
        $(".wrapper").animate({opacity: 1}, 500);
    }, 200);


        $('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('nav').toggleClass('active');
    });


    if($(window).width() <= 1190) {
        $('header .phone-number').appendTo('nav');
    }

    $(window).resize(function() {
        if($(window).width() <= 1190) {
            $('header .phone-number').appendTo('nav');
        } else {
            $('nav .phone-number').prependTo('header .phone-block');
        }
    });
});
