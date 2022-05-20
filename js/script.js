
const classes = {
    center: 'center',
    foregroundImg: '.foreground-img',
    sliderButton: '.slider-button',
    containerAfter: '.container-after',
    slider: '.slider',
    active: 'active',
    none: 'd-none'
}




class StepsEvent {
    constructor(stepAddress, activeStep) {
        this.stepStart = activeStep;
        this.stepAddress = stepAddress;

        // CLOSE ALL STEPS BLOCKS
        this._closeAllStep();
        this._openActiveSte();
    }
    _openActiveSte(){
        document.querySelectorAll(this.stepAddress[this.stepStart]).forEach((item) => {
            item.classList.remove('d-none');
        })
    }

    _closeAllStep(){
        this.stepAddress.forEach((address) => {
            document.querySelectorAll(address).forEach((item) => {
                item.classList.add('d-none');
            })
        });
    }

    nextStep(calBack = null){
        if(this.stepStart < this.stepAddress.length - 1){
            this._closeAllStep();
            this.stepStart = this.stepStart + 1;
            const nextStepBlock = document.querySelectorAll(this.stepAddress[this.stepStart]);
            nextStepBlock.forEach((item) => {
                item.classList.remove('d-none');
            });
            calBack && calBack(this.stepStart);
        } else {
            console.log('End Step Length');
        }
    }

    prevStep(calBack = null){
        if(this.stepStart > 0){
            this.stepStart = this.stepStart - 1;
            this._closeAllStep();
            const nextStepBlock = document.querySelectorAll(this.stepAddress[this.stepStart]);
            nextStepBlock.forEach((item) => {
                item.classList.remove('d-none');
            })
            calBack && calBack(this.stepStart);
        } else {
            console.log('This step 0');
        }
    }
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
$('.partners-section .partners-body').slick({
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




const catItem = $('.categories-block .item');

catItem.on('click', function (){
    catItem.removeClass(classes.active);
    $(this).addClass(classes.active)
})



const shippingPaymentTitleItems = $('.shipping-page .titles .item')

shippingPaymentTitleItems.on('click', function (){
    shippingPaymentTitleItems.removeClass(classes.active);
    $(this).addClass(classes.active);
})



//---------- OUR WORKS CATEGORIES  ---------------------


const calcTitles = [
    {
        title: 'Где требуется циклевка?',
        subTitle: ''
    },
    {
        title: 'Укажите общую площадь?',
        subTitle: ''
    },
    {
        title: 'Какие работы необходимо сделать?',
        subTitle: '(можно выбрать несколько)'
    },
    {
        title: 'Какое покрытие вы планируете?',
        subTitle: ''
    },
    {
        title: 'Требуется ли изменение цвета дерева?',
        subTitle: ''
    },
    {
        title: 'Где находится ваш объект?',
        subTitle: ''
    },
    {
        title: 'Куда вам отправить 3 варианта сметы?',
        subTitle: ''
    }
]

const CalcStepId = ['#calc-step1','#calc-step2','#calc-step3','#calc-step4', '#calc-step5','#calc-step6','#calc-step7'];



const CalcPageSteps = new StepsEvent(CalcStepId, 0);
const nextCalc = $('#next-calc-step');
const prevCalc = $('#prev-calc-step');
const loadingBlockCalc = $('.calculate-block .step-loader .step-loader-body');
const stepCount = $('#step-count');
const stepsCount = 100 / CalcStepId.length;
const calcTitle = $('#calc-titles-step');
const calcSubtitle = $('#subtitle-calc');
const activateItems = $('.calculate-block .selected__calc__item');
const leftMessageBlock = $('#left-message-calc');

nextCalc.on('click', function (){
    CalcPageSteps.nextStep((count) => {
        calcCount(count);
    })
})

prevCalc.on('click', function (){
    CalcPageSteps.prevStep((count) => {
        calcCount(count);
    })
})

function calcCount(count){
    const countPlus = count + 1;

    countPlus > 1 ? prevCalc.removeClass('d-none') : prevCalc.addClass('d-none');

    countPlus === CalcStepId.length ? nextCalc.addClass('d-none') : nextCalc.removeClass('d-none');

    loadingBlockCalc.css('width', `${stepsCount * countPlus}%`);
    stepCount.text(countPlus);
    calcTitle.text(
        calcTitles[count].title
    )
    calcSubtitle.text(
        calcTitles[count].subTitle
    )
    activateItems.removeClass(classes.active);
    activateItems.map((index, elem) => {
        if(index < countPlus){
            $(elem).addClass(classes.active);
        }
    })

    if(count === CalcStepId.length - 1){
        leftMessageBlock.addClass(classes.none);
        leftMessageBlock.next().removeClass('justify-content-sm-end').addClass('justify-content-sm-start');
    } else {
        leftMessageBlock.removeClass(classes.none);
        leftMessageBlock.next().removeClass('justify-content-sm-start').addClass('justify-content-sm-end');
    }
}


const costWork = $('.cost-work');
costWork.on('click', function (){
    costWork.removeClass(classes.active);
    $(this).addClass(classes.active);
})


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




//---------- discounts-promotions  ---------------------

$('.discounts-promotions .right-block .right-block-body').slick({
    dots: true,
    prevArrow: `<button class="header-slider-prev"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="header-slider-next"><i class="fas fa-chevron-right"></i></button>`,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
});

//---------- discounts-promotions  ---------------------




$('.open-close-info-catalog-item').on('click', function (){
    const nextBlock = $(this).prev('.text');
    if(nextBlock.hasClass(classes.active)){
        $(this).removeClass(classes.active);
        nextBlock.removeClass(classes.active);
    } else {
        $(this).addClass(classes.active);
        nextBlock.addClass(classes.active);
    }
})




const questionTitle = $('.question-body .question-excerpt .question-item .title');

questionTitle.on('click', function (){
    const parent = $(this).parent();
    if(parent.hasClass(classes.active)){
        parent.removeClass(classes.active);
    } else {
        questionTitle.parent().removeClass(classes.active);
        parent.addClass(classes.active);
    }
})

$('.slider-works').slick({
    dots: true,
    prevArrow: `<button class="header-slider-prev"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="header-slider-next"><i class="fas fa-chevron-right"></i></button>`,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
});




const cardProductPlus = $('.card-page .counts-product .counts-product-body .fa-plus');
const cardProductMinus = $('.card-page .counts-product .counts-product-body .fa-minus');

cardProductPlus.on('click', function (){
    const numberBlock = $(this).prev('span');
    const number = +numberBlock.text();
    numberBlock.html(number + 1);
})

cardProductMinus.on('click', function (){
    const numberBlock = $(this).next('span');
    const number = +numberBlock.text();
    if(number > 1){
        numberBlock.html(number - 1);
    }
})








const cardSteps = ['#step1', '#step2'];
const cardsPageSteps = new StepsEvent(cardSteps, 0);
const next = $('#next-step');
const prev = $('#prev-step');
const loadingBlock = $('.step-loader .step-loader-body');

next.on('click', function (){
    cardsPageSteps.nextStep((count) => calcToSteps(count));
})

prev.on('click', function (){
    cardsPageSteps.prevStep((count) => calcToSteps(count));
})

function calcToSteps(count){
    if(count === 1){
        prev.removeClass('d-none');
        next.addClass('d-none');
        loadingBlock.css('width', '100%');
        loadingBlock.next('.step-count').text(`Шаг ${count + 1} из ${cardSteps.length}`);
    } else {
        next.removeClass('d-none');
        prev.addClass('d-none');
        loadingBlock.css('width', '50%');
        loadingBlock.next('.step-count').text(`Шаг ${count + 1} из ${cardSteps.length}`);
    }
}

$('.title-mobile-filter').on('click', function (){
    const thisParent = $(this).parent();
    if(thisParent.hasClass(classes.active)){
        thisParent.removeClass(classes.active);
    } else {
        thisParent.addClass(classes.active);
    }
})





const worksBlock = $('.table-our-works .works');
const worksBlockMobile = $('.mobile-table-our-works-item');
worksBlock.on('click', function (){
    workBlockToggle(this, worksBlock);
})

worksBlockMobile.on('click', function (){
    workBlockToggle(this, worksBlockMobile);
})

function workBlockToggle(elem, allElem){
    const thisElem = $(elem);
    if(thisElem.hasClass(classes.active)){
        allElem.removeClass(classes.active);
    } else {
        allElem.removeClass(classes.active);
        thisElem.addClass(classes.active);
    }
}



const calcTelSelect = $('.soc-block-calc');
calcTelSelect.on('click', function (){
    calcTelSelect.removeClass(classes.active);
    $(this).addClass(classes.active);
})





// ---------------------- TYOM ------------------------

const paginationItem = $('.container-fluid .hov_main .numbr_main .bl1 .lin');

paginationItem.on('click', function (e){
    e.preventDefault();
    paginationItem.removeClass(classes.active);
    $(this).addClass(classes.active);
})

// ---------------------- TYOM ------------------------