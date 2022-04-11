
$('#header-slider').slick({
    dots: true,
    prevArrow: `<button class="header-slider-prev"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="header-slider-next"><i class="fas fa-chevron-right"></i></button>`,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});


$('.partners-body').slick({
    dots: true,
    prevArrow: `<button class="slider-prev"><i class="far fa-arrow-left"></i></button>`,
    nextArrow: `<button class="slider-next"><i class="far fa-arrow-right"></i></button>`,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

const mobileMenu = $('.mobile-menu');
const mobileMenuItem = $('.mobile-menu .menu-item a');
const mobileSubMenu = $('.mobile-menu .mobile-sub-menu');
const menuBlock = $('.mobile-menu .menu-body');
const mobileMenuTitle = $('#mobile-menu-title');

const subMenuTitle = $('#sub-menu-title');

const closeButtonMobileMenu = $('.mobile-menu .mobile-header .close');
const openMobileMenuButton = $('#open-mobile-menu');


openMobileMenuButton.on('click', function (){
    mobileMenu.addClass('open');
});

closeButtonMobileMenu.on('click', function (){
    mobileMenu.removeClass('open');
})

mobileMenuItem.on('click', function () {
    if(!!$(this).data('open')){
        const nextBlock = $(this).next().html();
        menuBlock.addClass('close');
        $('#sub-modal-block').html(nextBlock);
        mobileSubMenu.removeClass('close');
        mobileMenuTitle.addClass('d-none');
        subMenuTitle.text($(this).text());
    }
});

$('#menu-go-prev').on('click', function (){
    menuBlock.removeClass('close');
    mobileSubMenu.addClass('close');
    mobileMenuTitle.removeClass('d-none');
    subMenuTitle.text('');
    $('#sub-modal-block').html('');
});

