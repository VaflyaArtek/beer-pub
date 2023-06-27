const readMoreLinks = document.getElementsByClassName('blog__post-link');

for (let i = 0; i < readMoreLinks.length; i++) {
  readMoreLinks[i].addEventListener('click', function (event) {
    event.preventDefault();

    const buttonContainer = this.parentNode;
    const description = buttonContainer.previousElementSibling;

    const isExpanded = description.classList.contains('expanded');

    if (isExpanded) {
      description.classList.remove('expanded');
      this.textContent = 'READ MORE';
    } else {
      description.classList.add('expanded');
      this.textContent = 'READ LESS';
    }
  });
}

const countdownElement = document.getElementById('countdown');

let currentSlideIndex = 0;
const slideData = [
  {
    endDate: new Date('June 30, 2023'),
    imageSrc: 'images/three-people-drink-beer.jpeg',
  },
  {
    endDate: new Date('July 15, 2023'),
    imageSrc: 'images/three-people-drink-beer.jpeg',
  },
];

function updateCountdown() {
  const currentDate = new Date();
  const remainingTime = slideData[currentSlideIndex].endDate - currentDate;

  if (remainingTime < 0) {
    countdownElement.textContent = 'Time is up!';
    return;
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    <div class="countdown-item">
      <div class="countdown-value">${days}</div>
      <div class="countdown-label">Days</div>
    </div>
    <div class="countdown-separator">|</div>
    <div class="countdown-item">
      <div class="countdown-value">${hours}</div>
      <div class="countdown-label">Hours</div>
    </div>
    <div class="countdown-separator">|</div>
    <div class="countdown-item">
      <div class="countdown-value">${minutes}</div>
      <div class="countdown-label">Minutes</div>
    </div>
    <div class="countdown-separator">|</div>
    <div class="countdown-item">
      <div class="countdown-value">${seconds}</div>
      <div class="countdown-label">Seconds</div>
    </div>
  `;
}

function updateSlide(index) {
  const slide = slideData[index];
  const countdownImage = document.getElementById('blog__countdown-image');
  const countdownDescription = document.querySelector('.blog__description-count');

  countdownImage.src = slide.imageSrc;
  countdownDescription.textContent = slide.description;
  updateCountdown();
}

function handlePrevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slideData.length) % slideData.length;
  updateSlide(currentSlideIndex);
}

function handleNextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slideData.length;
  updateSlide(currentSlideIndex);
}

updateSlide(currentSlideIndex);
setInterval(updateCountdown, 1000);

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', handlePrevSlide);
nextBtn.addEventListener('click', handleNextSlide);

// Slider

const slides = [
  {
    image: 'images/three-people-drink-beer.jpeg',
    title: 'BAVARIAN BEER DAY',
    description: 'this Friday',
    imageCssProperties: {
      width: '100%',
    },
  },
  {
    image: 'images/ukrainian-festival.png',
    title: 'UKRAINIAN BEER FESTIVAL',
    description: 'next Saturday',
    imageCssProperties: {
      width: '70%',
      margin: 'auto',
    },
  },
];

let slideIndex = 0;
const countdownImage = document.getElementById('blog__countdown-image');
const sliderTitle = document.getElementById('sliderTitle');
const slideDescription = document.getElementById('slideDescription');

function showSlide(index) {
  countdownImage.src = slides[index].image;
  Object.assign(countdownImage.style, slides[index].imageCssProperties);

  sliderTitle.textContent = slides[index].title;
  slideDescription.textContent = slides[index].description;

  adjustTitleFontSize();
}

function adjustTitleFontSize() {
  const titleContainer = document.getElementById('titleContainer');
  const maxWidth = titleContainer.offsetWidth;
  const baseFontSize = 24;

  const newFontSize = (maxWidth / 20) + baseFontSize;

  sliderTitle.style.fontSize = `${newFontSize}px`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

window.addEventListener('resize', adjustTitleFontSize);

showSlide(slideIndex);
