$(function() {
    

    $('.header__slick').slick({
        fade: true,
        slidesToShow: 1,
        infinite: true,
        prevArrow: '<button type="button" class="slick-header__prev slick-header__arrow"></button>',
        nextArrow: '<button type="button" class="slick-header__next slick-header__arrow"></button>',
    })

    $('.services__slick').slick({
        slidesToShow: 5,
        prevArrow: '<button type="button" class="slick-header__prev slick-header__arrow slick-service__arrow slick-service__prev"></button>',
        nextArrow: '<button type="button" class="slick-header__next slick-header__arrow slick-service__arrow slick-service__next"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    prevArrow: '<button type="button" class="slick-adaptive__arrow slick-adaptive__prev"></button>',
                    nextArrow: '<button type="button" class="slick-adaptive__arrow slick-adaptive__next"></button>'                    
                }
            },
            {
                breakpoint: 586,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<button type="button" class="slick-adaptive__arrow slick-adaptive__prev"></button>',
                    nextArrow: '<button type="button" class="slick-adaptive__arrow slick-adaptive__next"></button>'  
                }
            }
        ]
    })


    $('.advantages-adaptive__slick').slick({
        slidesToShow: 2,
        prevArrow: '<button type="button" class="slick-advantages__prev slick-advantages__arrow"></button>',
        nextArrow: '<button type="button" class="slick-advantages__next slick-advantages__arrow"></button>',
        responsive: [
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    $('.activities-adaptive__slick').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-advantages__prev slick-advantages__arrow slick-activities__prev"></button>',
        nextArrow: '<button type="button" class="slick-advantages__next slick-advantages__arrow slick-activities__next"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })


    $('.burger').click(function() {
        $('.burger__items, .burger').toggleClass('active');
    })

})
