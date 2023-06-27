const countdownElement = document.getElementById('countdown');
const countdownElement2 = document.getElementById('countdown2');

let currentSlideIndex = 0;
let currentSlideIndex2 = 0;
const slideData = [
  {
    endDate: new Date('July 5, 2023'),
    imageSrc: 'images/three-people-drink-beer.jpg',
    description: 'this Wednesday',
    title: 'BAVARIAN BEER DAY'
  },
  {
    endDate: new Date('July 15, 2023'),
    imageSrc: 'images/ukrainian-festival.png',
    description: 'next Saturday',
    title: 'UKRAINIAN BEER FESTIVAL'
  },
];

function updateCountdown() {
  const currentDate = new Date();
  const remainingTime = slideData[currentSlideIndex].endDate - currentDate;

  if (remainingTime < 0) {
    countdownElement.textContent = 'Time is up!';
  } else {
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
}

function updateSlide(index) {
  const slide = slideData[index];
  const countdownTitle = document.getElementById('sliderTitle');
  const countdownImage = document.getElementById('blog__countdown-image');
  const countdownDescription = document.getElementById('slideDescription');

  countdownTitle.textContent = slide.title;
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