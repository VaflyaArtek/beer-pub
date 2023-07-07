const title = document.querySelector('.products__title');
const subtitle = document.querySelector('.products__subtitle');
const description = document.querySelector('.products__description');

const languages = {
  english: {
    headline: 'Bottled beer',
    subtitle: 'Bottled beer specials',
    description: 'Appreciate the taste of craft bottled beer from the best producers.',
    fontSize: '',
    lineHeight: ''
  },
  ukrainian: {
    headline: 'Розливне пиво',
    subtitle: 'Фірмове пиво в пляшках',
    description: 'Оцініть смак крафтового пляшкового пива від кращих виробників.',
    fontSize: '3em',
    lineHeight: '1.5em'
  },
  polish: {
    headline: 'Piwo w butelkach',
    subtitle: 'Specjalne piwa butelkowe',
    description: 'Doceń smak rzemieślniczych piw butelkowych od najlepszych producentów.',
    fontSize: '',
	lineHeight: ''
  },
  german: {
    headline: 'Flaschenbier',
    subtitle: 'Flaschenbier-Spezialitäten',
    description: 'Genießen Sie den Geschmack von Craft-Flaschenbier der besten Hersteller.',
    fontSize: '',
    lineHeight: ''
  }
};

function changeLanguage() {
  const languagesKeys = Object.keys(languages);
  const randomIndex = Math.floor(Math.random() * languagesKeys.length);
  const selectedLanguage = languages[languagesKeys[randomIndex]];

  title.innerText = selectedLanguage.headline;
  subtitle.innerText = selectedLanguage.subtitle;
  description.innerText = selectedLanguage.description;
  
  if (languagesKeys[randomIndex] === 'ukrainian' && window.innerWidth <= 992 && window.innerWidth > 768) {
    subtitle.style.fontSize = '2.2em';
    subtitle.style.lineHeight = '1.5em';
  } else if (languagesKeys[randomIndex] === 'ukrainian' && window.innerWidth <= 768) {
    subtitle.style.fontSize = '1.8em';
    subtitle.style.lineHeight = '1.2em';
  } else {
    subtitle.style.fontSize = selectedLanguage.fontSize;
    subtitle.style.lineHeight = selectedLanguage.lineHeight;
  }

  setTimeout(changeLanguage, 2000);
}

changeLanguage();

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



