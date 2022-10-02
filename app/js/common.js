// mobile menu
$('.btn-burger').on('click', function () {
    $('.overlay-mobile').fadeToggle();
    $('.header-bottom').fadeToggle();
    $(this).toggleClass('click');
});

$('.overlay-mobile').on('click', function (e) {
    e.preventDefault();
    $('.header-bottom').fadeOut();
    $('.overlay-mobile').fadeOut();
    $('.btn-burger').removeClass('click');
});

$('.main-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.dropdown-menu .dropdown-menu-list .dropdown').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).addClass('show').find('.dropdown-menu').addClass('show');
});


$(document).ready(function () {
    var input = document.querySelector(".phone-input1");
    window.intlTelInput(input, {
        // separateDialCode: true,
        defaultCountry: 'auto',
        onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
            "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
            "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
            "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
    });

    var input2 = document.querySelector(".phone-input2");
    window.intlTelInput(input2, {
        separateDialCode: true,
        defaultCountry: 'auto',
        onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
            "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
            "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
            "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
    });

    var input3 = document.querySelector(".phone-input3");
    window.intlTelInput(input3, {
        separateDialCode: true,
        defaultCountry: 'auto',
        onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
            "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
            "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
            "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
    });
    //
    // var input4 = document.querySelector(".phone-input4");
    // window.intlTelInput(input4, {
    //     separateDialCode: true,
    //     defaultCountry: 'auto'
    // });
    //
    // var input5 = document.querySelector(".phone-input5");
    // window.intlTelInput(input5, {
    //     separateDialCode: true,
    //     defaultCountry: 'auto'
    // });
    //
    // var input6 = document.querySelector(".phone-input6");
    // window.intlTelInput(input6, {
    //     separateDialCode: true,
    //     defaultCountry: 'auto'
    // });

});

// invoke plugin
$('.inp-file').MultiFile({
    list: '.files-list'
});

$('.slider-range1').slider({
    range: true,
    min: 0,
    max: 10000,
    values: [1000, 7895],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1").val(ui.values[0] + ' ' + '€');
        //Поле максимального значения
        $(".dec2").val(ui.values[1] + ' ' + '€');
    }
});

$(".dec1").val($(".slider-range1").slider("values", 0) + ' ' + '€');
$(".dec2").val($(".slider-range1").slider("values", 1) + ' ' + '€');


$('.slider-range2').slider({
    range: true,
    min: 1930,
    max: 2022,
    values: [1970, 2015],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec3").val(ui.values[0]);
        //Поле максимального значения
        $(".dec4").val(ui.values[1]);
    }
});
$(".dec3").val($(".slider-range2").slider("values", 0));
$(".dec4").val($(".slider-range2").slider("values", 1));

$('.slider-range3').slider({
    range: true,
    min: 1930,
    max: 2022,
    values: [1970, 2015],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec5").val(ui.values[0]);
        //Поле максимального значения
        $(".dec6").val(ui.values[1]);
    }
});
$(".dec5").val($(".slider-range3").slider("values", 0));
$(".dec6").val($(".slider-range3").slider("values", 1));


$('.slider-range4').slider({
    range: true,
    min: 0,
    max: 10000,
    values: [1000, 7895],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec7").val(ui.values[0] + ' ' + '€');
        //Поле максимального значения
        $(".dec8").val(ui.values[1] + ' ' + '€');
    }
});

$(".dec7").val($(".slider-range4").slider("values", 0) + ' ' + '€');
$(".dec8").val($(".slider-range4").slider("values", 1) + ' ' + '€');

$('.slider-range5').slider({
    range: "min",
    min: 0,
    max: 20000,
    value: 11800,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec9").val(ui.value + ' ' + '€');
    }
});
$(".dec9").val($(".slider-range5").slider("value") + ' ' + '€');

$('.slider-range6').slider({
    range: "min",
    min: 0,
    max: 90,
    value: 84,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec10").val(ui.value + ' ' + 'мес.');
    }
});
$(".dec10").val($(".slider-range6").slider("value") + ' ' + 'мес.');


$('.interested-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        }
    ]
});

$('.brands-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});

$('.popular-models-slider').slick({
    slidesToShow: 11,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 9,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 7,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.sidebar-close, .overlay-mobile').on('click', function () {
    $('.sidebar').fadeOut();
    $('.mobile-wrapper').fadeOut();
    $('.overlay-mobile').fadeOut();
});

$('.btn-filter').on('click', function () {
    $('.overlay-mobile').fadeIn();
    $('.sidebar').fadeIn();
});

$('.btn-sorting').on('click', function () {
    $('.overlay-mobile').fadeIn();
    $('.mobile-sorting').fadeIn();
});

$('.btn-search').on('click', function (e) {
    e.preventDefault();
    $('.overlay-mobile').fadeIn();
    $('.mobile-search').fadeIn();
});


$('.product-gallery').slick({
    slidesToShow: 1,
    fade: true,
    arrows: true,
    asNavFor: '.product-gallery-preview',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.product-gallery-preview').slick({
    slidesToShow: 6,
    arrows: false,
    asNavFor: '.product-gallery',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
});

// hidden list > 5
$('.sidebar .sidebar-box').each(function () {
    if ($(this).find('ul li').length > 5) {
        $(this).find('ul li').slice(5).hide();
        $(this).find('.sidebar-box__body').append('<a href="#" class="color-accent load-more-wrap">Показать все</a>');
    }

});

// hidden list > 5

// show list all
$('.load-more-wrap').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.sidebar-box').find('ul li:hidden').slice(0, 5).slideDown();

    var onBlock = $(this).parents('.sidebar-box').find('ul li:hidden').length;
    if(onBlock <= 0) {
        $(this).hide();
    }
});

// show list all





// $(function () {
//     $("#filter__range").slider({
//         min: 0,
//         max: 10000,
//         values: [1800, 6000],
//         range: true,
//         stop: function (event, ui) {
//             $('.price-range-min.value').html('€' + $("#filter__range").slider("values", 0));
//             $('.price-range-max.value').html('€' + $("#filter__range").slider("values", 1));
//         },
//         slide: function (event, ui) {
//             $('.price-range-min.value').html('€' + $("#filter__range").slider("values", 0));
//             $('.price-range-max.value').html('€' + $("#filter__range").slider("values", 1));
//         }
//     });
//
//     $('#filter__range .ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + '€' + $('#filter__range').slider('values', 0) + '</span>');
//     $('#filter__range .ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + '€' + $('#filter__range').slider('values', 1) + '</span>');
// });















$('.reviews-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});



// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $('.category-cars-slider:not(.slick-initialized)').slick({
            dots: false,
            slidesToShow: 1,
            arrows: false,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $('.collapsed-btn').attr('data-toggle', 'collapse');
    } else {
        $(".category-cars-slider.slick-initialized").slick("unslick");
        $('.product-characteristics .collapse').collapse({
            toggle: false
        })
    }
});

$('.sidebar [data-toggle="collapse"]').collapse({
    toggle: true,
});

// slick active

//progressbar
// function setProgress(index) {
//     const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
//
//     $progressBar
//         .css('width', calc + '%')
//         .attr('aria-valuenow', calc);
//
// }
//
// const $slider = $('.category-cars-slider');
// const $progressBar = $('.progress-bg');
//
// $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//     setProgress(nextSlide);
//
// });



// $('.btn-toggle-filter').on('click', function (e) {
//     e.preventDefault();
//     // $('.overlay-mobile').fadeIn();
//     $('.filter-wrapper').fadeIn();
// });

// $('.btn-close__filter, .overlay-mobile').on('click', function (e) {
//     e.preventDefault();
//     $('.filter-wrapper').fadeOut();
//     // $('.overlay-mobile').fadeOut();
// });








// input focus
// $("input,textarea").focus(function () {
//     $(this).parent().addClass("focus");
// }).blur(function () {
//     if ($(this).val() === '') {
//         $(this).parent().removeClass("focus");
//     }
// });

// $('input, textarea').each(function () {
//     var $this = $(this),
//         val = $this.val();
//
//     if (val.length >= 1) {
//         $(this).parent().addClass("focus");
//     } else {
//         $(this).parent().removeClass("focus");
//     }
// });
//
// $(".label-select").on('click', function () {
//     $(this).addClass("focus");
// }).blur(function () {
//     if ($(this).find('select').val() === '') {
//         $(this).removeClass("focus");
//     }
// });



//
// $('.slider-range3').slider({
//     range: true,
//     min: 0,
//     max: 25000,
//     values: [1800, 18000],
//     classes: {
//         "ui-slider-handle": "ui-corner-all"
//     },
//     slide: function (event, ui) {
//         //Поле минимального значения
//         $(".dec5").val(ui.values[0]);
//         //Поле максимального значения
//         $(".dec6").val(ui.values[1]);
//     }
// });
//
//
// $(".dec5").val($(".slider-range3").slider("values", 0));
// $(".dec6").val($(".slider-range3").slider("values", 1));
//


// accordeon
// function accordeon() {
//     var panel = $('.panel-heading');
//
//     if (panel.hasClass('in')) {
//         $('.in').find('.block_hover').slideDown();
//     }
//
//     $('.panel-heading .block_title').on('click', function () {
//         $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
//     });
// }
//
// accordeon();

// modal
// $(function () {
//     var overlay = $('.overlay'),
//         open_modal = $('.open_modal'),
//         close = $('.modal__close, .overlay'),
//         modal = $('.modal__div');
//
//     open_modal.on('click', function (event) {
//         event.preventDefault();
//
//         modal.css('display', 'none').animate({
//             opacity: 0,
//             top: '45%'
//         }, 200);
//
//         var div = $(this).attr('href');
//         overlay.fadeIn(400,
//             function () {
//                 $(div)
//                     .css('display', 'flex')
//                     .animate({
//                         opacity: 1,
//                         top: '50%'
//                     }, 200);
//             });
//     });
//
//     close.on('click', function () {
//         modal
//             .animate({
//                     opacity: 0,
//                     top: '45%'
//                 }, 200,
//                 function () {
//                     $(this).css('display', 'none');
//                     overlay.fadeOut(400);
//                 }
//             );
//     });
// });
//end


// $('.btn-search').on('click', function () {
//     $(this).toggleClass('open');
//     $('.overlay-mobile').fadeToggle();
//     $('.mobile-filter').fadeToggle();
// });

// $('.brands-slider').slick({
//     slidesToShow: 2,
//     arrows: false,
//     dots: true,
//     variableWidth: true
// });





// var $pagingInfo = $('.counter-slide');
// var $teamSlider = $('.page-article-slider');
//
// $teamSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//     var i = (currentSlide ? currentSlide : 0) + 1;
//     var prefix = i < 10 ? '0' : '';
//     var prefixAll = slick.slideCount < 10 ? '0' : '';
//     $pagingInfo.html('<span class="current">' + prefix + i + '</span>' + '' + '<span class="total">' + prefixAll + slick.slideCount + '</span>');
// });
//
// $('.page-article-slider').slick({
//     slidesToShow: 1,
//     // fade: true,
//     appendArrows: '.page-article-slider__nav',
//     prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
//     nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
// });




// if ($(".page-product-information__head").length) {
//     $('.page-product-information__head').clone().appendTo('.title-mobile');
// }

// $('.characteristics-item h5').on('click', function () {
//     $(this).toggleClass('click').siblings('ul').slideToggle();
// });

// tabs
// $(document).ready(function ($) {
//     $('.tabs li a').click(function (e) {
//         e.preventDefault();
//     });
//     $('.tabs li').click(function () {
//         $('.tabs li').removeClass('active');
//         $(this).addClass('active');
//         $('.tab_content').removeClass('active')
//
//         var selectTab = $(this).find('a').attr("href");
//
//         $(selectTab).addClass('active');
//     });
// });
// tabs end


// $(window).on('load resize', function () {
//     if ($(window).width() < 576) {
//         var header = $('header'),
//             scrollPrev = 0;
//
//         $(window).scroll(function () {
//             var scrolled = $(window).scrollTop();
//
//             if (scrolled > 100 && scrolled > scrollPrev) {
//                 $('.mobile-vehicle-chat-sms').css('bottom', '0');
//             } else {
//                 $('.mobile-vehicle-chat-sms').css('bottom', '-100%');
//             }
//             scrollPrev = scrolled;
//         });
//
//     }
// });

// $('.mobile-vehicle-chat-sms').on('click', function (e) {
//     e.preventDefault();
//     $('.overlay').fadeIn();
//     $('.welcome-popup').css('bottom', '0');
// });
//
// $('.welcome-popup__close, .overlay').on('click', function (e) {
//     e.preventDefault();
//     $('.welcome-popup').css('bottom', '-100%');
//     $('.overlay').fadeOut();
// });
//
// $('.btn-close-cookie').on('click', function (e) {
//     e.preventDefault();
//     $('.cookie').fadeOut();
// });


