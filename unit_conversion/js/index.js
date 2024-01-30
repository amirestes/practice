const main = document.getElementById("main");
const convertDiv = document.getElementById("convert");
const measureDiv = document.querySelector(".measure");
const toggle = document.getElementById("toggle");
const characterInput = document.getElementById("unit");
const wrongCharacter = document.querySelector("h3");

//onclick function for the Convert button
const clickMe = () => {
  if (characterInput.value.match(/[a-zA-Z]/)) {
    wrongCharacter.innerText = `Please enter a number`;
  } else {
    console.log(characterInput.value);
    wrongCharacter.innerText = "";
  }
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

toggleSwitch();
