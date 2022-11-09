// JS DE LA INTRO
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100);
        });

        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (span + 1) * 50);
            });
        }, 2000);
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    });
});

// JS DE LA GALERÍA 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//JS PREGUNTA FRECUENTES
let collapsibles = document.querySelectorAll('.preg')

collapsibles.forEach(element => {
    element.addEventListener("click", () => {
        element.querySelector('.btn-preg').classList.toggle('active');
        element.querySelector('.icon-chevron').classList.toggle('rotate');
    })
});