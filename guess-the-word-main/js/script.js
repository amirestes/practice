const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
// const span = document.querySelector(span);
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

//submits the guessed letter from the input
guessButton.addEventListener("click", (e) => {
  e.preventDefault();
  const letter = letterInput.value;
  console.log(letter);
  letterInput.value = "";
  inputValue(letterInput.value);
});

//validates the player's input
function inputValue(input) {
  const acceptedLetter = /[a-zA-Z]/;
  input.length === 0
    ? (message.innerText = "Please enter a letter")
    : input.length > 1
    ? (message.innerText = "Only enter one letter")
    : input.match(acceptedLetter)
    ? (message.innerText = "Please use letter not a character.")
    : input;
}
//converts the word to a string and replaces each character with a circle
const wordInProgressCircle = () => {
  //string convert to an array
  const wordArray = word.split("");
  //change the items in the array into a circle
  const circleArray = wordArray
    .map((letter) => {
      return "●";
    })
    .join("");
  // display in word in progress
  wordInProgress.innerText = circleArray;
};

wordInProgressCircle(word);
