$(window).on('load', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
});
/* viewport width */
function viewport() {
    var e = window,
    a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
};
/* viewport width */
$(function() {
    /* placeholder*/
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/

    /*mob-menu*/
    $('.js-touch-menu').click(function() {
        $(this).toggleClass('active'),
        $('.nav').slideToggle();
        return false;
    });

    /*main-slider*/
    if ($('.main-slider').length) {
        $('.main-slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        });
    };
    /*main-slider*/

    /*tabs-choose*/
    $('.tabs li a').click(function() {

        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        // $(id).find('.chose-info__item_first').click();
        return false;
    });
    /*tabs-choose*/

    /*slider-choose*/
    if ($('.chose-info').length) {
        $('.chose-info').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            swipe: false,
            asNavFor: '.choose-nav',
        });
    };
    if ($('.choose-nav').length) {
        $('.choose-nav').slick({
            dots: false,
            arrows: false,
            infinite: true,
            prevArrow: '<div class="slick-button slick-button_prev"><i class="icon-arrow-prev"></div>',
            nextArrow: '<div class="slick-button slick-button_next"><i class="icon-arrow-next"></div>',
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.chose-info',
            focusOnSelect: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }]
        });
    };
    /*slider-choose*/

    /*fancy*/
    if ($('.fancybox').length) {
        $('.fancybox').fancybox({
            margon: 0,
            padding: 0,
            
        });
    };
    $(".all-numbers__tel_modal").click(function() {
if ($('.fancybox').length) {
        $('.fancybox').fancybox({
            margon: 0,
            padding: 0,
            
        });
    };
    })
    /*fancy*/

    /*fixed-nav*/
    if($('.fixed-block').length){
        var offset_this = $('.fixed-block').offset();   
        $(window).scroll(function() {
            var scr_top = $(window).scrollTop();
            if (offset_this.top <= scr_top) {
                $('.fixed-block').addClass("fixed");
            } else{
                $('.fixed-block').removeClass("fixed")  
            }
        });

        $(window).on('load', function() {
            var scr_top = $(window).scrollTop();
            if (offset_this.top <= scr_top) {
                $('.fixed-block').addClass("fixed");
            } else{
                $('.fixed-block').removeClass("fixed")  
            }
        });
    };
    /*fixed-nav*/
    /*mob-menu-bg*/
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ) {
            $('.toch-wrap').addClass('scrolid');
        } else {
            $('.toch-wrap').removeClass('scrolid');
        }
    })
});
/*mob-menu-bg*/
/*input-mask*/
if ($('.birthday-mask').length) {
    $('.birthday-mask').mask('99.99.9999');
};
if ($('.number-mask').length) {
    $('.number-mask').mask('800 999-99-99');
};

/*input-mask*/








var handler = function() {

    var height_footer = $('footer').height();
    var height_header = $('header').height();

    $(function() {
        $('.main-slider__img').each(function() {
            var srcImg = $(this).find('img').attr('src');
            $(this).css({
                'background-image': 'url(' + srcImg + ')'
            });
        });
    });
    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid < 767) {
        $(window).scroll(function(){

        });
    }

}
$(window).bind('load', handler);
$(window).bind('resize', handler);