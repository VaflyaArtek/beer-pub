const alightTags = document.querySelectorAll(".blog__title");
const alightTagsText = [];
let currentWordIndex = 0;

for (let i = 0; i < alightTags.length; i++) {
  const words = alightTags[i].textContent.trim().split(" ");
  alightTagsText.push(words);
}

function highlightWord() {
    for(let i = 0; i < alightTags.length; i++) {
        alightTags[i].innerHTML = "";

        for (let j = 0; j < alightTagsText[i].length; j++) {
            const span = document.createElement("span");
            span.innerText = alightTagsText[i][j] + " ";
        
            currentWordIndex % alightTagsText[i].length === j 
                    ? span.style.color = '#ffc123'
                    : span.style.color = '#fff'
            alightTags[i].appendChild(span); 
        }
    }
    currentWordIndex++;
}

setInterval(highlightWord, 1000);
highlightWord();

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