// ———————————
// ALREADY FINISHED: Tone.js code
let synth = new Tone.Synth().toDestination();
function playRandomNote() {
    Tone.start();
    let notes = ["C", "D", "E", "F", "G", "A", "B"];
    let randomOctave = Math.round(Math.random() * 5 + 1);
    let randomNote = notes[Math.floor(Math.random() * notes.length)];
    synth.triggerAttackRelease(randomNote + randomOctave, "64n");
}
// ———————————

let container = document.querySelector("#container");

// Finish this function!
function generateDivs() {

    // ALREADY FINISHED: Empty the container
    container.innerHTML = "";

    // STEP 1: Make this loop run a random number of times, between 0 and 100
    for (let i = 0; i < 200; i++) {

        // STEP 2: Create a <div> element
        let newElement = document.createElement('div');

        // STEP 3: Complete this template literal with the random red, green, and blue values
        let red = Math.round(Math.random() * 255);
        let green = Math.round(Math.random() * 255);
        let blue = Math.round(Math.random() * 255);
        newElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        // STEP 4: Add the new element to the container
        container.append(newElement);

        newElement.addEventListener('mouseenter', function () {
            playRandomNote();

            // STEP 5: Complete this template literal with the random red, green, and blue values
            let red = Math.round(Math.random() * 255);
            let green = Math.round(Math.random() * 255);
            let blue = Math.round(Math.random() * 255);
            newElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    }
}

// STEP 6: Use setInterval to run this function every 1000ms
generateDivs();
setInterval(generateElement, 100);