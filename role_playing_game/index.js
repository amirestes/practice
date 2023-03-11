//Random Dice roll
function getDiceRollArray(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
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

//Character Constructor function
function Character(data) {
  Object.assign(this, data);

  //Renders random dice to DOM
  this.getDiceHtml = function (diceCount) {
    return getDiceRollArray(diceCount)
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };
   
  //Renders character to DOM
  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount } = this;

    const diceHtml = this.getDiceHtml(diceCount);

    document.getElementById(elementId).innerHTML = `<div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
         ${diceHtml}
         </div>
   </div>`;
  };
}

const wizard = new Character(hero);
const orc = new Character(monster);

wizard.getCharacterHtml();
orc.getCharacterHtml();
