const API_URL = 'https://api.punkapi.com/v2/beers/random';

async function fetchRandomBeer() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const beer = data[0];

        const beerName = beer.name;
        const beerDescription = beer.description;
        const beerTagline = beer.tagline;
        const beerImage = beer.image_url;

        const beerBlockContent = createBeerBlockContent(beerName, beerDescription, beerTagline);
        const beerBlockContainer = document.querySelector('.beer-recommendation');
        beerBlockContainer.innerHTML = '';
        beerBlockContainer.appendChild(beerBlockContent);

        const beerRecommendationImg = document.querySelector('.beer-recommendation-img');
        beerRecommendationImg.style.backgroundImage = `url(${beerImage === 'https://images.punkapi.com/v2/keg.png' ? 'images/craft-beer-ipa.png' : beerImage || 'images/craft-beer-ipa.png'})`;

        const nextBeerButton = document.getElementById('next-beer-button');
        nextBeerButton.addEventListener('click', (event) => {
            event.preventDefault();
            fetchRandomBeer();
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
