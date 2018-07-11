$(document).ready(function () {

    $(".nav a").click(function() { $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top + "px" }, { duration: 700, easing: "swing" }); return false; });

    $('input[name="phone"]').mask('+7 (999) 999-99-99');




    $('.stand_slid .list_view').on('click', 'li', function () {
        var currentImage = $(event.target).attr("src");
        $('.stand_slid .list_view li').removeClass('active');
       $(this).addClass('active');
        $('.stand_slid .big_view').css('background-image', 'url(../'+ currentImage +')');
    });

    $('.granit .list_view').on('click', 'li', function () {
        var currentImage = $(event.target).attr("src");
        $('.granit .list_view li').removeClass('active');
        $(this).addClass('active');
        $('.granit .big_view').css('background-image', 'url(../'+ currentImage +')');
    });

    $('.stone .list_view').on('click', 'li', function () {
        var currentImage = $(event.target).attr("src");
        $('.stone .list_view li').removeClass('active');
        $(this).addClass('active');
        $('.stone .big_view').css('background-image', 'url(../'+ currentImage +')');
    });

    $('.leaf .list_view').on('click', 'li', function () {
        var currentImage = $(event.target).attr("src");
        $('.leaf .list_view li').removeClass('active');
        $(this).addClass('active');
        $('.leaf .big_view').css('background-image', 'url(../'+ currentImage +')');
    });

    $('.mix .list_view').on('click', 'li', function () {
        var currentImage = $(event.target).attr("src");
        $('.mix .list_view li').removeClass('active');
        $(this).addClass('active');
        $('.mix .big_view').css('background-image', 'url(../'+ currentImage +')');
    });



    $('.left_num li').tipso({
        speed             : 400,
        background        : '#fff',
        titleBackground   : '#333333',
        color             : '#212121',
        titleColor        : '#ffffff',
        useTitle          : true,
        showArrow         : true,
        position          : 'right',
        width             : 150,
        maxWidth          : 150,
        delay             : 200,

    });
    $('.right_num li').tipso({
        speed             : 400,
        background        : '#fff',
        titleBackground   : '#333333',
        color             : '#212121',
        titleColor        : '#ffffff',
        useTitle          : true,
        showArrow         : true,
        position          : 'left',
        width             : 150,
        maxWidth          : 150,
        delay             : 200,

    });

$('.primer_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".slide_prev"),
    nextArrow: $(".slide_next"),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1199.98,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.granit_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $(".granit_prev"),
        nextArrow: $(".granit_next"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.stone_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $(".stone_prev"),
        nextArrow: $(".stone_next"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.leaf_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $(".leaf_prev"),
        nextArrow: $(".leaf_next"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.mix_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $(".mix_prev"),
        nextArrow: $(".mix_next"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.modal_button, .complect_item, .comb_item').on('click', function (event) {
        event.preventDefault();
        var nameForm = $(this).attr('data-name');
        $('#orderModal').find('input[name="forma"]').val(nameForm);
        $('#orderModal').arcticmodal({
            afterClose: function () {
                $('#orderModal').find('input[name="forma"]').val('');
            }
        });
        return false;
    });

    $('.main_pol, .conf a').on('click', function () {
        event.preventDefault();
        $('#politic').arcticmodal();
        return false;
    });


});



$(function () {

    add_antispamcheck();
    check_mobile();
    timer_antispamcheck();

    $("form").submit(function () {
        event.preventDefault();
        form = $(this);
        flag = true;

        form.find('input[name="phone"]').is(function () {
            phone = form.find('input[name="phone"]').val();
            phoneC = form.find('input[name="phone"]');
            if (phoneC.hasClass('error')) { phoneC.removeClass('error'); }
            var phoneReg = /^[+() 0-9 -]{7,}$/;
            if (!phoneReg.test(phone)) {
                flag = false;
                phoneC.addClass('error');
                form.find('input[name="phone"]').val('Введите номер телефона');
            }
        });

        if (flag) {
            var form_data = $(this).serialize();
            $.ajax({
                type: "POST",
                url: "sendit.php",
                data: form_data,
                success: function () {
                    $('input:not([name="forma"])').val('').empty();
                    $.arcticmodal('close');
                    $('#ty').arcticmodal();
                    event.preventDefault();
                }
            });
        }
        return false;
    });

    function add_antispamcheck() {
        $("form").each(function () {
            $(this).append("<input type='hidden' value='0' name='time_spend'>");
        });
    }

    function check_mobile() {

        var isMobile = {
            Android: function () { return navigator.userAgent.match(/Android/i) ? true : false; },
            BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
            iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
            Windows: function () { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
            any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows()); }
        };

        $("form").each(function () {
            $(this).append("<input type='hidden' value='" + isMobile.any() + "' name='mobile'>");
        });
    }

    function timer_antispamcheck() {
        $('form input[name="time_spend"]').each(function () {
            var value = $(this).val();
            value++;
            $(this).val(value);
        });
        setTimeout(timer_antispamcheck, 1000);
    }
});