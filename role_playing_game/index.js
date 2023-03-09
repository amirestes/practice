//Random Dice roll
function getDiceRollArray(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
}

//Renders random dice to DOM
function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map((num) => `<div class="dice">${num}</div>`)
    .join("");
}

//Hero object
const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceCount: 3,
};

//Monster object
const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceCount: 1,
};

//Renders the character to the DOM
function renderCharacter(data) {
  const { elementId, name, avatar, health, diceScore, diceCount } = data;

  const diceHtml = getDiceHtml(diceCount);

  document.getElementById(elementId).innerHTML = `<div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
         ${diceHtml}
         </div>
   </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
