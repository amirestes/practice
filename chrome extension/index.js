let myLeads = `["www.example.com"]`;
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads);
// 2. Push a new value to the array
myLeads.push("www.ihoundz.com");
console.log(myLeads);

myLeads = JSON.stringify(myLeads);
console.log(typeof myLeads);
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  clearInput();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a href='http://${myLeads[i]}' target='_blank'>${myLeads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}

function clearInput() {
  inputEl.value = "";
}
