const API_URL = 'https://api.punkapi.com/v2/beers/random';
const beerRecommendationSection = document.querySelector('.beer-recommendation');
const arrowButton = document.getElementById('arrow__botton');
const ourStorySection = document.querySelector('.our-story');

arrowButton.addEventListener('click', () => {
    if (beerRecommendationSection.style.display === 'flex') {
        beerRecommendationSection.style.animation = 'slideOut 0.5s forwards';
        setTimeout(() => {
            beerRecommendationSection.style.display = 'none';
            beerRecommendationSection.style.animation = 'none';
            document.getElementById('botton-text').textContent = 'more about beer';
            document.getElementById('arrow__botton-up').style.transform = 'rotate(-90deg)';
        }, 500);
    } else {
        beerRecommendationSection.style.display = 'flex';
        beerRecommendationSection.style.animation = 'slideIn 0.5s forwards';
        document.getElementById('botton-text').textContent = 'hide';
        document.getElementById('arrow__botton-up').style.transform = 'rotate(90deg)';
    }
});

async function fetchRandomBeer() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const beer = data[0];

        const { name: beerName, description: beerDescription, tagline: beerTagline, image_url: beerImage } = beer;

        const beerBlockContent = createBeerBlockContent(beerName, beerDescription, beerTagline);
        const beerBlockContainer = document.querySelector('.beer-recommendation__post');
        beerBlockContainer.innerHTML = '';
        beerBlockContainer.appendChild(beerBlockContent);

        const beerRecommendationImg = document.querySelector('.beer-recommendation__img-container');
        beerRecommendationImg.style.backgroundImage = `url(${beerImage === 'https://images.punkapi.com/v2/keg.png' ? 'images/craft-beer-ipa.png' : beerImage || 'images/craft-beer-ipa.png'})`;

        const nextBeerButton = document.getElementById('next-beer-button');
        nextBeerButton.addEventListener('click', async (event) => {
            event.preventDefault();
            await fetchRandomBeer();
        });
    } catch (error) {
        console.log(error);
    }
}

function createBeerBlockContent(beerName, beerDescription, beerTagline) {
    const beerBlockContent = document.createElement('article');
    beerBlockContent.classList.add('our-story__post');

    beerBlockContent.innerHTML = `
        <p class="our-story__pre-title">Our beer recommendation</p>
        <h2 class="our-story__title">${beerName}</h2>
        <p class="our-story__description">${beerTagline}</p>
        <p class="our-story__text">${beerDescription}</p>
        <div class="our-story__button">
            <a href="#" id="next-beer-button" class="our-story__link">NEXT BEER ></a>
        </div>
    `;

    return beerBlockContent;
}

fetchRandomBeer();
