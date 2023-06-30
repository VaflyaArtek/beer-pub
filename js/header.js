const words = document.querySelectorAll('.nav-link');

words.forEach(function (word) {
    word.addEventListener("mouseenter", addUnderline);
    word.addEventListener("mouseleave", removeUnderline);
});

function addUnderline() {
    this.style.textDecoration = "underline";
}

function removeUnderline() {
    this.style.textDecoration = "none";
}



