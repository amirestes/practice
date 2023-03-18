import { getDicePlaceholderHtml, getDiceRollArray } from "./utils.js";

//Character Constructor function
export function Character(data) {
  Object.assign(this, data);
  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  //Renders random dice to DOM
  this.getDiceHtml = function (diceCount) {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };

  //Renders take damage
  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, num) => {
      return total + num;
    });
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
  };

  //Renders HTML
  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount, diceArray } = this;

    const diceHtml = this.getDiceHtml(diceCount);

    return `<div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
           ${diceArray}
           </div>
        </div>`;
  };
}
