let container = document.querySelector('#container');

// A reusable function for resetting all styles
function resetAllStyles() {
    container.removeAttribute('class'); // This removes all previous classes
    container.removeAttribute('style'); // This removes all previous styles
}

// Reset all styles
// If we call a named function in an event listener, we write it without parentheses ()
let buttonReset = document.querySelector('#reset');
buttonReset.addEventListener('click', resetAllStyles)

// *Clean* button example
// This button adds a CSS class
let buttonClean = document.querySelector('#buttonClean');
buttonClean.addEventListener('click', function () {
    resetAllStyles();
    container.classList.add('clean');
})

// *Poetic* button example
// This button adds inline CSS
let buttonPoetic = document.querySelector('#buttonPoetic');
buttonPoetic.addEventListener('click', function () {
    resetAllStyles();
    container.style.fontFamily = "Georgia";
    container.style.letterSpacing = "-0.1em";
    container.style.textAlign = "center";
    container.style.fontSize = "80px";
    container.style.wordSpacing = "2em";
    container.style.lineHeight = "3em";
})

// ———— USE .classList FOR THESE BUTTONS ———— //

// Add your code for the *pretty* button here!
let buttonPretty = document.querySelector('#buttonPretty');
buttonPretty.addEventListener('click', function () {
    resetAllStyles();
    container.classList.add('pretty');
})
// Add your code for the *ugly* button here!
let buttonUgly = document.querySelector('#buttonUgly');
buttonUgly.addEventListener('click', function () {
    resetAllStyles();
    container.classList.add('ugly');
})
// ———— USE .style FOR THESE BUTTONS ———— //

// Add your code for the *scary* button here!
let buttonScary = document.querySelector('#buttonScary');
buttonScary.addEventListener('click', function () {
    resetAllStyles();
    container.style.margin = "0 auto";
    container.style.padding = "1em";
    container.style.fontFamily = "'Courier New', Courier, monospace";
    container.style.fontSize = "2em";
    container.style.maxWidth = "30em";
    container.style.color = "red";
    container.style.backgroundColor = "black";
})

// Add your code for the *friendly* button here!
let buttonFriendly = document.querySelector('#buttonFriendly');
buttonFriendly.addEventListener('click', function () {
    resetAllStyles();
    container.style.margin = "0 auto";
    container.style.padding = "2em";
    container.style.fontFamily = "'TimesNewRoman'";
    container.style.fontSize = "2em";
    container.style.maxWidth = "40em";
    container.style.color = "Green";
    container.style.backgroundColor = "pink";
})