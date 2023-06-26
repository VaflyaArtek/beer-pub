const title = document.querySelector('.products__title');
const subtitle = document.querySelector('.products__subtitle');
const description = document.querySelector('.products__description');

const headlines = [
    'Bottled beer', // English 
    'Розливне пиво', // Ukrainian
    'Piwo w butelkach', // Polish 
    'Flaschenbier' // German 
];

const subtitles = [
    'Bottled beer specials', // English
    'Фірмове пиво в пляшках', // Ukrainian
    'Specjalne piwa butelkowe', // Polish
    'Flaschenbier-Spezialitäten' // German 
];

const descriptions = [
    'Appreciate the taste of craft bottled beer from the best producers.', // English
    'Оцініть смак крафтового пляшкового пива від кращих виробників.', // Ukrainian
    'Doceń smak rzemieślniczych piw butelkowych od najlepszych producentów.', // Polish
    'Genießen Sie den Geschmack von Craft-Flaschenbier der besten Hersteller.' // German 
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

title.innerText = getRandom(headlines);
subtitle.innerText = getRandom(subtitles);
description.innerText = getRandom(descriptions);

const products = [
    {
        id: '1',
        name: 'Ipa',
        image: 'images/craft-beer-ipa.png',
        alt: 'bottle Craft beer Ipa',
        description: 'Ideal for those who prefer strong and bitter beer with rich aroma.',
        details: ['ABV - 8%', 'IBU - 80'],
        note: 'Very bitter, hoppy, with grainy notes.'
    },
    {
        id: '2',
        name: 'Lager beer',
        image: 'images/lager-beer.png',
        alt: 'bottle Lager beer',
        description: 'This classic bottled beer features a wheat aroma and mild taste.',
        details: ['ABV - 4.2%', 'IBU - 12'],
        note: 'Light, mild, with very little bitterness.'
    },
    {
        id: '3',
        name: 'Bitter',
        image: 'images/craft-beer.png',
        alt: 'bottle Craft beer Bitter',
        description: '"England\'s favorite beer" is a great choice for those who like dark varieties of beer.',
        details: ['ABV - 4.6%', 'IBU - 40'],
        note: 'Bitter, malty, with a slight aftertaste of toasts.'
    }
]

products.sort((a, b) => Math.random() - 0.5);

function renderProducts(products) {
    const productList = document.querySelector('.products__carousel-container');
    productList.innerHTML = '';

    for (const product of products) {
        const detailsList = product.details.map(detail => `<li class="products__carousel--article-detail">${detail}</li>`).join('');
		
        productList.innerHTML += `
            <div class="products__carousel-slide">
                <div class="products__carousel--slide-image"><img src="${product.image}" alt="${product.alt}"></div>
                <article class="products__carousel-article">
                    <h3 class="products__carousel--article-title">${product.name}</h3>
                    <p class="products__carousel--article-description">${product.description}</p>
                    <ul class="products__carousel--article-details">
                        ${detailsList}
                    </ul>
                    <p class="products__carousel--article-note">${product.note}</p>
                </article>
            </div>`;
    }
}

renderProducts(products);



