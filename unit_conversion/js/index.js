const main = document.getElementById("main");
const convertDiv = document.getElementById("convert");
const measureDiv = document.querySelector(".measure");
const toggle = document.getElementById("toggle");
const characterInput = document.getElementById("unit");

//onclick function for the Convert button
const clickMe = () => {
  console.log("clicked");
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
