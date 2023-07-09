// const barItem = document.querySelectorAll('.carousel__slide-container .carousel__item .sort__item');
// const carouselItem = document.querySelectorAll('.carousel__item');
// const itemSort = document.querySelector('.sort__item');
// let count = 0;
// let width;

// function init() {
//     console.log('resize');
//     width = document.querySelector('.carousel__slide-container').offsetWidth;

//     carouselItem.forEach(item => {
//         item.style.width = width * barItem.length + 'px';
//     });

//     barItem.forEach(item => {
//         item.style.width = width + 'px';
//         item.style.height = 'auto';
//     });
//     rollCarousel();

//     console.log(width);
// }

// window.addEventListener('resize', init);
// init();
// document.querySelector('.carousel__btn-prev').addEventListener('click', function () {
//     count--;
//     if (count < 0) {
//         count = barItem.length-1;
//     }

//     rollCarousel();
// });


// document.querySelector('.carousel__btn-next').addEventListener('click', function () {
//     count++;
//     if (count >= barItem.length) {
//         count = 0;
//     }

//     rollCarousel();
// });

// function rollCarousel() {
//     carouselItem.forEach(item => {
//         item.style.transform = 'translateX(-' + count * width + 'px)';
//     });
// }
const barItem = document.querySelectorAll('.carousel__slide-container .carousel__item .sort__item');
const carouselItem = document.querySelectorAll('.carousel__item');
const itemSort = document.querySelector('.sort__item');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.carousel__slide-container').offsetWidth;

    carouselItem.forEach(item => {
        item.style.width = width * barItem.length + 'px';
    });

    barItem.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });

    rollCarousel();

    console.log(width);
}

window.addEventListener('resize', init);
init();

document.querySelector('.carousel__btn-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = barItem.length - 1;
    }

    rollCarousel();
});

document.querySelector('.carousel__btn-next').addEventListener('click', function () {
    count++;
    if (count >= barItem.length) {
        count = 0;
    }

    rollCarousel();
});

function rollCarousel() {
    carouselItem.forEach(item => {
        item.style.transform = 'translateX(-' + count * width + 'px)';
    });
}
