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
        if($(clickedElemnt).hasClass(".fa-times")) {
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
        if($(clickedElemnt).hasClass(".fa-times")) {
            $('.modal-2').fadeOut(400);
        }
    });


    $('a[href^="#"]').click(function(){

        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);

        return false;

    });

});
