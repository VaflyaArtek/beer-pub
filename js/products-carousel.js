const carousel = document.querySelector('.products__carousel');
const carouselInner = carousel.querySelector('.products__carousel-container');
const prevButton = carousel.querySelector('.products__carousel--btn-prev');
const nextButton = carousel.querySelector('.products__carousel--btn-next');
let productCards = carouselInner.querySelectorAll('.products__carousel-slide');

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

cloneSlides();

function cloneSlides() {
  const firstSlideClone = productCards[0].cloneNode(true);
  const lastSlideClone = productCards[productCards.length - 1].cloneNode(true);

  carouselInner.appendChild(firstSlideClone);
  carouselInner.insertBefore(lastSlideClone, productCards[0]);

  productCards = carouselInner.querySelectorAll('.products__carousel-slide'); 
}

prevButton.addEventListener('click', function() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
});

nextButton.addEventListener('click', function() {
    currentIndex = Math.min(currentIndex + 1, productCards.length - slidesPerView);
    updateCarousel();
});