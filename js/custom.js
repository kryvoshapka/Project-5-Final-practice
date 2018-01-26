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


    $(".get-info").click(function () {
        $(".modal").fadeIn(400).css("display","flex");
    });

    $(".modal").click(function (event) {
        var clickedElemnt = event.target;
        if(!$(clickedElemnt).closest(".modal-inner").length) {
            $(".modal").fadeOut(400);
        }
        if($(clickedElemnt).hasClass("close-modal")) {
            $('.modal').fadeOut(400);
        }
    });

    $(".order-call").click(function () {
        $(".modal-2").fadeIn(400).css("display","flex");
    });

    $(".modal-2").click(function (event) {
        var clickedElemnt = event.target;
        if(!$(clickedElemnt).closest(".modal-inner").length) {
            $(".modal-2").fadeOut(400);
        }
        if($(clickedElemnt).hasClass("close-modal")) {
            $('.modal-2').fadeOut(400);
        }
    });


    $('a[href^="#"]').click(function() {

        if($(window).width() < 1190) {
            $('nav').toggleClass('active');
            $('.burger').toggleClass('fa-close fa-bars');
        }

        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 62}, 1000);

        return false;
    });
});

