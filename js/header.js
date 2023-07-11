var words = document.querySelectorAll('.underline-on-hover');

words.forEach(function(word) {
  word.addEventListener("mouseenter", function() {
    this.style.textDecoration = "underline";
    this.style.transitionDuration = "5s";
  });

  word.addEventListener("mouseleave", function() {
    var self = this;
    setTimeout(function() {
      self.style.textDecoration = "none";
    }, 5000);
  });
});




