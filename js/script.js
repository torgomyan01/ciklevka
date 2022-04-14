
const classes = {
    center: 'center',
    foregroundImg: '.foreground-img',
    sliderButton: '.slider-button',
    containerAfter: '.container-after',
    slider: '.slider',
    active: 'active'
}



//---------- HEADER SLIDER ---------------------
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

//---------- HEADER SLIDER ---------------------


//---------- PARTNER SLIDER ---------------------
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
//---------- PARTNER SLIDER ---------------------


//---------- MOBILE MENU ---------------------
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

//---------- MOBILE MENU ---------------------





// --------- OUR SERVICES ------------------
const btnOpenCloseText = $('.our-services .open-close-text');
const textBlock = $('.our-services .text-block');
const tenBlock = $('.our-services .text-block .ten');

btnOpenCloseText.on('click', function (){
    if(textBlock.hasClass('close')){
        textBlock.removeClass('close');
        $(this).removeClass('close');
        tenBlock.addClass('d-none');
    } else {
        textBlock.addClass('close');
        $(this).addClass('close');
        tenBlock.removeClass('d-none');
    }
})

// --------- OUR SERVICES ------------------



// ------------- AFTER BEFORE SECTION -----------

$(classes.slider).on("input change", function (e) {
    const sliderPos = e.target.value;
    const thisParent = $(this).parent(classes.containerAfter);
    thisParent.children(classes.foregroundImg).css('width', `${sliderPos}%`);
    thisParent.children(classes.sliderButton).css('left', `${sliderPos}%`);
});

// ------------- AFTER BEFORE SECTION -----------


//---------- OUR WORKS CATEGORIES ---------------------

$('.categories-block').slick({
    dots: false,
    prevArrow: `<button class="slider-prev"><i class="far fa-chevron-left"></i></button>`,
    nextArrow: `<button class="slider-next"><i class="far fa-chevron-right"></i></button>`,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});




const catItem = $('.our-works .categories-block .item');

catItem.on('click', function (){
    catItem.removeClass(classes.active);
    $(this).addClass(classes.active)
})

//---------- OUR WORKS CATEGORIES  ---------------------


//---------- reviews-section ---------------------

$('.reviews-section .reviews').slick({
    dots: true,
    prevArrow: `<button class="header-slider-prev "><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="header-slider-next"><i class="fas fa-chevron-right"></i></button>`,
    speed: 500,
    centerPadding: '60px',
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 1,
            }
        },
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
            }
        },
    ]
});

//---------- reviews-section ---------------------