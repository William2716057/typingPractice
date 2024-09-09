const morseCodeMapping = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..',
    'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
    's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', ' ': '/'
};
 
// Function to translate sentence into Morse code
function translateToMorse(sentence) {
    return sentence
        .toLowerCase()
        .split('')
        .map(char => morseCodeMapping[char] || '')
        .join(' ');
}

// Morse translation of the sentence
const sentence = "message to be typed";
const morseSentence = translateToMorse(sentence);

// Display the Morse sentence
const displaySentence = document.getElementById("displaySentence");
displaySentence.innerText = morseSentence;

const userInput = document.getElementById("userInput");
const feedback = document.getElementById("feedback");

// Function to highlight mistakes
userInput.addEventListener("input", () => {
    const input = userInput.value;
    let result = '';

    // Compare user input with sentence
    for (let i = 0; i < sentence.length; i++) {
        if (i < input.length) {
            if (input[i] === sentence[i]) {
                result += `<span class="correct">${sentence[i]}</span>`;
            } else {
                result += `<span class="incorrect">${sentence[i]}</span>`;
            }
        } else {
            result += `<span class="correct">${sentence[i]}</span>`;
        }
    }

    // Update feedback with highlighted text
    userInput.addEventListener("input", () => {
        const input = userInput.value;

        // Check if the user has typed the entire sentence
        if (input.length === sentence.length) {
            let result = '';

            // Compare user input with sentence
            for (let i = 0; i < sentence.length; i++) {
                if (input[i] === sentence[i]) {
                    result += `<span class="correct">${sentence[i]}</span>`;
                } else {
                    result += `<span class="incorrect">${sentence[i]}</span>`;
                }
            }

            // Display feedback only when typing is complete
            feedback.innerHTML = result;
        }
    });
});