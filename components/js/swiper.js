var swiper = new Swiper(".mySwiper", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        726: {
            slidesPerView:3,
            spaceBetween: 30
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1140: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        1320: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1400: {
            slidesPerView: 4.5,
            spaceBetween: 0
        },
    },
    // loop: true,
});
let swiper2 = new Swiper(".Swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        240: {
            slidesPerView: 1,
            spaceBetween: 90
        },
        340: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        540: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        726: {
            slidesPerView:1,
            spaceBetween: 80
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1140: {
            slidesPerView: 1.2,
            spaceBetween: 90
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1400: {
            slidesPerView: 1.8,
            spaceBetween: 20
        },

    },
    // initialSlide: 1,
    // loop: true
});

