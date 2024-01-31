const main = document.getElementById("main");
const convertDiv = document.getElementById("convert");
const measureDiv = document.querySelector(".measure");
const toggle = document.getElementById("toggle");
const characterInput = document.getElementById("unit");
const wrongCharacter = document.querySelector("h3");
const numSpan = document.querySelectorAll(".number");

//onclick function for the Convert button
const clickMe = () => {
  validateInput();
  characterInput.value = "";
};

const toggleSwitch = () => {
  //if switch is toggled off then dark mode is off. Removes dark class from convertDiv.
  toggle.addEventListener("change", function () {
    if (this.checked) {
      convertDiv.classList.add("dark");
      measureDiv.classList.add("dark");
      convertDiv.classList.remove("light");
      measureDiv.classList.remove("light");
      console.log("dark");
    } else {
      convertDiv.classList.remove("dark");
      measureDiv.classList.remove("dark");
      convertDiv.classList.add("light");
      measureDiv.classList.add("light");
      console.log("light");
    }
  });
};

//Validates a number was entered not a letter or special character
const validateInput = () => {
  let cI = characterInput.value;
  if (cI.match(/[a-zA-Z$&+,:;=?@#|'<>.^*()%!-]/)) {
    wrongCharacter.innerText = `Please enter a number`;
  } else {
    console.log(cI);
    for (let i = 0; i < numSpan.length; i++) {
      numSpan[i].innerText = cI;
    }
    wrongCharacter.innerText = "";
  }
};

toggleSwitch();
