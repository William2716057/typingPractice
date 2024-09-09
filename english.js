const sentence = "The quick brown fox jumps over the lazy dog.";
const displaySentence = document.getElementById("displaySentence");
const userInput = document.getElementById("userInput");
const feedback = document.getElementById("feedback");

displaySentence.innerText = sentence;

userInput.addEventListener("input", () => {
    const input = userInput.value;
    let result = '';

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
    feedback.innerHTML = result;
});