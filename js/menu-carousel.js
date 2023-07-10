const barItem = document.querySelectorAll('.carousel__slide-container .carousel__item .sort__item');
const carouselItem = document.querySelectorAll('.carousel__item');
const itemSort = document.querySelector('.sort__item');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.carousel__slide-container').offsetWidth;

    if (window.innerWidth < 720) {
        barItem.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });

        rollCarouselFull();
    } else {
        barItem.forEach(item => {
            item.style.width = width / 2 + 'px';
            item.style.height = 'auto';
        });

        carouselItem.forEach(item => {
            item.style.width = width * barItem.length + 'px';
        });

        rollCarousel();
    }

    console.log(width);
}

window.addEventListener('resize', init);
init();

document.querySelector('.bar__btn-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = carouselItem.length - 1;
    }

    if (window.innerWidth < 720) {
        rollCarouselFull();
    } else {
        rollCarousel();
    }
});

document.querySelector('.bar__btn-next').addEventListener('click', function () {
    count++;
    if (count >= carouselItem.length) {
        count = 0;
    }
    

    if (window.innerWidth < 720) {
        rollCarouselFull();
    } else {
        rollCarousel();
    }
});

function rollCarousel() {
    carouselItem.forEach(item => {
        item.style.transform = 'translateX(-' + count * width / 2 + 'px)';
    });
}

function rollCarouselFull() {
    carouselItem.forEach(item => {
        item.style.transform = 'translateX(-' + count * width + 'px)';
    });
}

