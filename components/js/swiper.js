var swiper = new Swiper(".mySwiper", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        540: {
            slidesPerView: 1.5,
            spaceBetween: 40
        },
        726: {
            slidesPerView:2,
            spaceBetween: 30
        },
        960: {
            slidesPerView: 2.5,
            spaceBetween: 50
        },
        1140: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1320: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 80
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