const barItem = document.querySelectorAll('.bar__carousel .carousel__slide-container .carousel__item .sort__item');
const carouselItem = document.querySelectorAll('.carousel__item');
const itemSort = document.querySelector('.sort__item');
let count = 0;
let width;

function init() {
  console.log('resize');
  width = document.querySelector('.carousel__slide-container').offsetWidth;
  const screenWidth = window.innerWidth;

  if (screenWidth < 720) {
    barItem.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
    });

    rollCarousel(screenWidth);
  } else {
    barItem.forEach(item => {
      item.style.width = width / 2 + 'px';
      item.style.height = 'auto';
    });

    carouselItem.forEach(item => {
      item.style.width = width * barItem.length + 'px';
    });

    rollCarousel(screenWidth);
  }

  console.log(width);
}

window.addEventListener('resize', init);
init();

document.querySelector('.bar__btn-prev').addEventListener('click', function () {
  count--;
  if (count < 0) {
    count = (carouselItem.length) - 1;
  }

  const screenWidth = window.innerWidth;
  rollCarousel(screenWidth);
});

document.querySelector('.bar__btn-next').addEventListener('click', function () {
  count++;
  if (count >= carouselItem.length) {
    count = 0;
  }

  const screenWidth = window.innerWidth;
  rollCarousel(screenWidth);
});

function rollCarousel(screenWidth) {
  if (screenWidth < 720) {
    carouselItem.forEach(item => {
      item.style.transform = 'translateX(-' + count * width + 'px)';
    });
  } else {
    carouselItem.forEach(item => {
      item.style.transform = 'translateX(-' + count * width / 2 + 'px)';
    });
  }
}

