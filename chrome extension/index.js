let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  clearInput();
  console.log(localStorage.getItem("myLeads"));
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
