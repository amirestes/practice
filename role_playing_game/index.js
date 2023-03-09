/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/
const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceScore: [3, 1, 4],
  diceCount: 3,
};

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceScore: [2],
  diceCount: 1,
};

renderCharacter(hero);
renderCharacter(monster);

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceScore, diceCount } = data;

  const diceHtml = getDiceHtml(diceCount);
  //    diceScore
  //  .map((dice) => `<div class="dice">${dice}</div>`)
  //  .join("");

  document.getElementById(elementId).innerHTML = `<div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
         ${diceHtml}
         </div>
   </div>`;
}

function getDiceRollArray(diceCount) {
  const newDiceRolls = [];
  for (let i = 0; i < diceCount; i++) {
    newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return newDiceRolls;
}

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map((num) => `<div class="dice">${num}</div>`)
    .join("");
}

// getDiceRollArray(3);
