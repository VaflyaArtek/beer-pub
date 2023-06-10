function playMusic(volume) {
    var audio = document.getElementById("music__audio");
    audio.volume = volume;
    audio.play();
    hidefallout();
    alert("Music on!");
}

function openPageWithoutMusic() {
    hidefallout();
    alert("Music off!");
}

function hidefallout() {
    var fallout = document.getElementById("fallout");
    fallout.style.display = "none";
}

function setupEventListeners() {
    var yesButton = document.getElementById("music__yes-btn");
    var noButton = document.getElementById("music__no-btn");
    var volumeSlider = document.getElementById("music__volume-slider");

    if (!yesButton || !noButton || !volumeSlider) {
        return false;
    }

    yesButton.addEventListener("click", function() {
        var volume = volumeSlider.value / 100;
        playMusic(volume);
    });
    noButton.addEventListener("click", openPageWithoutMusic);
    return true;
}

var intervalID = setInterval(function() {
    if (setupEventListeners()) {
        clearInterval(intervalID);
    }
}, 100);
