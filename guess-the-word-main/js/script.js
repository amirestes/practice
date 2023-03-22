const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
// const span = document.querySelector(span);
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

guessButton.addEventListener("click", (e) => {
  e.preventDefault();
  const letter = letterInput.value;
  console.log(letter);
  letterInput.value = "";
});

function wordInProgressCircle() {
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
}

wordInProgressCircle(word);
