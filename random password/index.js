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
let passwordOneEl = document.getElementById("password1-el");
let passwordTwoEl = document.getElementById("password2-el");
let characterInput = document.getElementById("characterInput");
let characterLengthInput = document.getElementById("submit");

characterLengthInput.addEventListener("click", () => {
  let characterLength = characterInput.value;
});

function generatePassword() {
  let randomPasswordOne = [];
  let randomPasswordTwo = [];
  for (let i = 0; i < characterInput.value; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    randomPasswordOne.push(characters[randomIndexOne]);
    randomPasswordTwo.push(characters[randomIndexTwo]);
  }
  passwordOneEl.textContent = randomPasswordOne.join(" ");
  passwordTwoEl.textContent = randomPasswordTwo.join(" ");
}

const reset = () => {
  passwordOneEl.textContent = "";
  passwordTwoEl.textContent = "";
  characterInput.value = "";
};

//let randomNumber = Math.floor(Math.random() * 13) + 1;

// let randomIndexOne = Math.floor(Math.random() * characters.length);
// characters[randomIndexOne]
