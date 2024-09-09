const sentence = "The quick brown fox jumps over the lazy dog.";
const displaySentence = document.getElementById("displaySentence");
const userInput = document.getElementById("userInput");
const feedback = document.getElementById("feedback");


// Display the sentence
displaySentence.innerText = sentence;

//function to translate sentence to morse code and store as translation
//display morse version (typed input should match original const sentence

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
    feedback.innerHTML = result;
});