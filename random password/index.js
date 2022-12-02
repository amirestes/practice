const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let noSpecialCharacters = characters.slice(0, 62);
let noNumbers = characters.slice(52, 62);
let passwordOneEl = document.getElementById("password1-el");
let passwordTwoEl = document.getElementById("password2-el");
let characterInput = document.getElementById("characterInput");
let toggleSpecial = document.querySelector("#toggleSpecial");
let toggleNumber = document.querySelector("#toggleNumber");

function generatePassword() {
  let randomPasswordOne = [];
  let randomPasswordTwo = [];
  let randomIndexOne = Math.floor(Math.random() * noSpecialCharacters.length);
  let randomIndexTwo = Math.floor(Math.random() * noSpecialCharacters.length);

  if (toggleSpecial.checked) {
    for (let i = 0; i < characterInput.value; i++) {
      randomIndexOne = Math.floor(Math.random() * characters.length);
      randomIndexTwo = Math.floor(Math.random() * characters.length);
      randomPasswordOne.push(characters[randomIndexOne]);
      randomPasswordTwo.push(characters[randomIndexTwo]);
      passwordOneEl.textContent = randomPasswordOne.join(" ");
      passwordTwoEl.textContent = randomPasswordTwo.join(" ");
    }
  } else {
    for (let i = 0; i < characterInput.value; i++) {
      randomIndexOne = Math.floor(Math.random() * noSpecialCharacters.length);
      randomIndexTwo = Math.floor(Math.random() * noSpecialCharacters.length);
      randomPasswordOne.push(noSpecialCharacters[randomIndexOne]);
      randomPasswordTwo.push(noSpecialCharacters[randomIndexTwo]);
      passwordOneEl.textContent = randomPasswordOne.join(" ");
      passwordTwoEl.textContent = randomPasswordTwo.join(" ");
    }
  }
  // toggleNumberSelector();
}

const reset = () => {
  passwordOneEl.textContent = "";
  passwordTwoEl.textContent = "";
  characterInput.value = "";
  toggleSpecial.checked = true;
};

// const toggleNumberSelector = () => {
//   let randomPasswordOne = [];
//   let randomPasswordTwo = [];
//   let randomIndexOne = Math.floor(Math.random() * noNumbers.length);
//   let randomIndexTwo = Math.floor(Math.random() * noNumbers.length);

//   if (toggleNumber.checked) {
//     for (let i = 0; i < characterInput.value; i++) {
//       randomIndexOne = Math.floor(Math.random() * characters.length);
//       randomIndexTwo = Math.floor(Math.random() * characters.length);
//       randomPasswordOne.push(characters[randomIndexOne]);
//       randomPasswordTwo.push(characters[randomIndexTwo]);
//       passwordOneEl.textContent = randomPasswordOne.join(" ");
//       passwordTwoEl.textContent = randomPasswordTwo.join(" ");
//     }
//   } else {
//     for (let i = 0; i < characterInput.value; i++) {
//       randomIndexOne = Math.floor(Math.random() * noNumbers.length);
//       randomIndexTwo = Math.floor(Math.random() * noNumbers.length);
//       randomPasswordOne.push(noNumbers[randomIndexOne]);
//       randomPasswordTwo.push(noNumbers[randomIndexTwo]);
//       passwordOneEl.textContent = randomPasswordOne.join(" ");
//       passwordTwoEl.textContent = randomPasswordTwo.join(" ");
//     }
//   }
// };
