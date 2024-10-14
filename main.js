let words = document.querySelectorAll(".word");

// Wrap each word in letters for animation
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = ""; // Clear the word text
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span); // Append each letter to the word
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;

// Set opacity to 1 for the first word
words[currentWordIndex].style.opacity = "1";

// Function to change the text
let changeText = () => {
  let currentWord = words[currentWordIndex];

  // Determine the next word
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  // Fade out the current word
  currentWord.style.opacity = "0";

  // After current word fades out, update to the next word
  setTimeout(() => {
    currentWordIndex =
      currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    currentWord = words[currentWordIndex];

    // Set the next word's opacity to 1 and fade in
    currentWord.style.opacity = "1";
  }, 1000); // Delay before showing the next word
};

// Start the transition
changeText();
setInterval(changeText, 4000); // Time for each word to display (including fade out)
