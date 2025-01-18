// Global variables
var resultParagraph = document.getElementById("result");
var random;
var range = 100;
var nextRandom = Math.floor(Math.random() * range + 1);

// Function to generate a random number
function generateRandom() {
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * range + 1);
    console.log(random);
    resultParagraph.innerHTML = random;
}

// Function for the higher button
function higher() {
    if (nextRandom > random) {
        window.alert("You Win!");
    } else if (!sameNumber()) {
        window.alert("You Lose!");
    }

    generateRandom();
}

// Function for the lower button
function lower() {
    if (nextRandom < random) {
        window.alert("You Win!");
    } else if (!sameNumber()) {
        window.alert("You Lose!");
    }

    generateRandom();
}

// Function if the same number is generated in a row
function sameNumber() {
    if (nextRandom == random) {
        window.alert("It was the same number, nothing happens!")
        return true;
    }

    return false
}