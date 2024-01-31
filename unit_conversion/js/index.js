const main = document.getElementById("main");
const convertDiv = document.getElementById("convert");
const measureDiv = document.querySelector(".measure");
const toggle = document.getElementById("darkMode");
const characterInput = document.getElementById("unit");
const wrongCharacter = document.querySelector("h3");
const numSpan = document.querySelectorAll(".number");
const ftSpan = document.querySelector("#feet");
const meterSpan = document.querySelector("#meters");
const litSpan = document.querySelector("#gallons");
const galSpan = document.querySelector("#liters");
const kilSpan = document.querySelector("#kilos");
const poundSpan = document.querySelector("#pounds");
const body = document.querySelector("body");

//onclick function for the Convert button
const clickMe = () => {
  validateInput();
  convertValue();
  characterInput.value = "";
};

const toggleSwitch = () => {
  //if switch is toggled off then dark mode is off
  toggle.addEventListener("change", function () {
    if (this.checked) {
      convertDiv.classList.add("dark");
      measureDiv.classList.add("dark");
      body.classList.add("dark");
      convertDiv.classList.remove("light");
      measureDiv.classList.remove("light");
    } else {
      convertDiv.classList.remove("dark");
      measureDiv.classList.remove("dark");
      body.classList.remove("dark");
      convertDiv.classList.add("light");
      measureDiv.classList.add("light");
    }
  });
};

//Validates a number was entered not a letter or special character
const validateInput = () => {
  let cI = characterInput.value;
  if (cI.match(/[a-zA-Z$&+,:;=?@#|'<>.^*()%!-]/)) {
    wrongCharacter.innerText = `Please enter a number`;
  } else {
    // iterates over all the spans with a class of number
    for (let i = 0; i < numSpan.length; i++) {
      numSpan[i].innerText = cI;
    }
    wrongCharacter.innerText = "";
  }
};

// converts the number inputed and prints it
const convertValue = () => {
  let cI = characterInput.value;

  //meter to foot conversion
  let meterToFoot = cI / 0.3048;
  ftSpan.innerText = meterToFoot.toFixed(3);

  //foot to meter conversion
  let footToMeter = cI / 3.28084;
  meterSpan.innerText = footToMeter.toFixed(3);

  //Liters to gallons
  let litToGal = cI / 3.78541;
  litSpan.innerText = litToGal.toFixed(3);

  //gallons to liters conversion
  let galToLit = cI * 3.78541;
  galSpan.innerText = galToLit.toFixed(3);

  //kilos to pounds
  let kilToPound = cI / 0.453592;
  kilSpan.innerText = kilToPound.toFixed(3);

  //pounds to kilos
  let poundsToKilos = cI * 0.453592;
  poundSpan.innerText = poundsToKilos.toFixed(3);
};

toggleSwitch();
