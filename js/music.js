const audio = document.getElementById("music__audio");
const fallout = document.getElementById("fallout");
const yesButton = document.getElementById("music__yes-btn");
const noButton = document.getElementById("music__no-btn");
const volumeSlider = document.getElementById("music__volume-slider");

const playMusic = (volume) => {
    if (!audio) return;
    audio.volume = volume;
    audio.play();
    hidefallout();
}

const openPageWithoutMusic = () => {
    hidefallout();
}

const hidefallout = () => {
    if (!fallout) return;
    fallout.style.display = "none";
}

const setupEventListeners = () => {
    if (!yesButton || !noButton || !volumeSlider) {
        return false;
    }

    yesButton.addEventListener("click", () => {
        const volume = volumeSlider.value / 100;
        playMusic(volume);
    });
    noButton.addEventListener("click", openPageWithoutMusic);
    return true;
}

const intervalID = setInterval(() => {
    if (setupEventListeners()) {
        clearInterval(intervalID);
    }
}, 100);
