const main = document.getElementById("main");
const toggle = document.getElementById("toggle");

const toggleSwitch = () => {
  if (!toggleSpecial.checked) {
    main.classList.remove("dark");
    main.classList.add("light");
  } else {
    main.classList.add("dark");
    main.classList.remove("light");
  }
};

toggleSwitch();
