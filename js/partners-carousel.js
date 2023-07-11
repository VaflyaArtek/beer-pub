const slides = [
    '<div><img class="carousel-img" src="images/logo_beer-carlsberg.svg" alt="logo Carlsberg beer"></div>',
    '<div><img class="carousel-img" src="images/logo_budweiser.svg" alt="logo Budweiser"></div>',
    '<div><img class="carousel-img" src="images/logo_beer-heineken.svg" alt="logo Heineken"></div>',
    '<div><img class="carousel-img" src="images/logo_beer-corona-extra.svg" alt="logo Corona Extra"></div>',
    '<div><img class="carousel-img" src="images/logo_beer-miller.svg" alt="logo Miller"></div>',
    '<div><img class="carousel-img" src="images/logo_beer-hoegaarden.svg" alt="logo Hoegaarden"></div>',      
];

const carouselSlide = document.querySelector('.partners__carousel-slide');

let currentSlide = 0;

function renderSlide() {
    carouselSlide.innerHTML = slides[currentSlide];
    if (window.innerWidth >= 768) {
        const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        carouselSlide.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth >= 1024) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            carouselSlide.innerHTML += slides[thirdSlideIdx];
        }
    }
}

renderSlide();

  function nextSlide() {
      currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      renderSlide();
  }
  
  function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
          currentSlide = slides.length - 1;
      }
      renderSlide();
  }

const btnNext = document.querySelector('.partners__carousel__btn-next');
const btnPrev = document.querySelector('.partners__carousel__btn-prev');

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

