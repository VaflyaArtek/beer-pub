const readMoreLinks = document.getElementsByClassName('blog__post-link');

for (let i = 0; i < readMoreLinks.length; i++) {
  readMoreLinks[i].addEventListener('click', function(event) {
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
const endDate = new Date('June 30, 2023');

function updateCountdown() {
  const currentDate = new Date();
  const remainingTime = endDate - currentDate;

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

updateCountdown();
setInterval(updateCountdown, 1000);
