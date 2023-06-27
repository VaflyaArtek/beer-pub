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