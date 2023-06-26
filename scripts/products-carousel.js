const carousel = document.querySelector('.products__carousel');
const carouselInner = carousel.querySelector('.products__carousel-container');
const prevButton = carousel.querySelector('.products__carousel--btn-prev');
const nextButton = carousel.querySelector('.products__carousel--btn-next');
const productCards = carouselInner.querySelectorAll('.products__carousel-slide');

let slidesPerView = 1;
let currentIndex = 0;

function updateSlidesPerView() {
    if (window.innerWidth >= 768) {
        slidesPerView = 2;
    } else {
        slidesPerView = 1;
    }
    updateCarousel();
}

window.addEventListener('resize', updateSlidesPerView);

updateSlidesPerView();

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * (100 / slidesPerView)}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, productCards.length - slidesPerView);
    updateCarousel();
});



