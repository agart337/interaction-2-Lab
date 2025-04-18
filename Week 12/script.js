
// Array of all your fortunes
let fortunes = [
    "You will have a <span style='font-size: 40px; color: blue;'>GLORIOUS</span> day.",
    "Eat <span style='letter-spacing: 0.5em; color: orange;'>cheese</span>.",
    "You will finish <br><span style='line-height: 100px; font-size: 80px; letter-spacing: 1em; color: blue;'>typography</span>",
    "You've earned it! Splurge <span style='font-size: 70px; color: green;'>$50</span> on bruch",
    "<span style='font-style: italic; color: red;'>Sell your ideas</span>-they have exceptional merit",
    "A <span style='font-size: 50px; font-style: italic'>routine</span> task will turn into an <span style='font-size: 60px; color: pink; font-style: bold'>enchanting</span> adventure",
    "Forget injuries; never forget <span style='font-size: 80px; color: orange;'>KINDNESSES</span>.",
    "Walk a <span style='font-size: 50px; color: grey;'>mile</span>",
    "Live this day as if it were your <span style='font-size: 60px; font-style: italic; color: lightblue;'>last.</span>",
    "<span style='font-size: 50px; color: red;'>Appreciate.</span><span style='font-size: 50px; color: orange;'>Appreciate.</span><span style='font-size: 50px; color: yellowgreen;'>Appreciate.</span>",
    "Borrow money from a <span style='font-size: 20px; color: purple;'>pessimist</span>. They don't expect it back.",
    "It is easier to <span style='font-style: italic; color: pink;'>stay out</span> than to <span style='font-style: italic; color: lightblue;'>get out</span>.",
]

// Global variable to track your current fortune
let currentFortuneIndex = 0;

// Output element
let output = document.querySelector('#output');

// ——————————
// This function has already been started for you

function nextFortune() {
    currentFortuneIndex = currentFortuneIndex + 1; // same as currentFortuneIndex++;

    if (currentFortuneIndex == fortunes.length) {
        currentFortuneIndex = 0;
    }

    output.innerHTML = fortunes[currentFortuneIndex];
}

let buttonNext = document.querySelector("#buttonNext");
buttonNext.addEventListener('click', nextFortune);

// ——————————
// TODO: Finish this function!

function prevFortune() {
    currentFortuneIndex = currentFortuneIndex - 1;

    if (currentFortuneIndex < 0) {
        currentFortuneIndex = fortunes.length - 1;
    }

    output.innerHTML = fortunes[currentFortuneIndex];
}

let buttonPrev = document.querySelector("#buttonPrev");
buttonPrev.addEventListener('click', prevFortune);

// ——————————
// TODO: Finish this function!

function randomFortune() {
    output.innerHTML = (fortunes[Math.floor(Math.random() * fortunes.length)]);

}

let buttonRandom = document.querySelector("#buttonRandom");
buttonRandom.addEventListener('click', randomFortune);
