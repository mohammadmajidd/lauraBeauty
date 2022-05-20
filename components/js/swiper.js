var swiper = new Swiper(".mySwiper", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        576: {
            slidesPerView:3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        720: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1140: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1320: {
            slidesPerView: 5,
            spaceBetween: 40
        },
    }
});
let swiper2 = new Swiper(".Swiper", {
    slidesPerView: 2,
    // spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});