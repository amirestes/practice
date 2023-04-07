import { getDicePlaceholderHtml, getDiceRollArray } from "./utils.js";

const getPercentage = (remainingHealth, maximumHealth) =>
  (100 * remainingHealth) / maximumHealth;

//Character Constructor function
export function Character(data) {
  Object.assign(this, data);
  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.maxHealth = this.health;

  //Renders random dice to DOM
  this.getDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };

  //Renders take damage
  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (total, num) => total + num
    );
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
    console.log(getPercentage(this.health, this.maxHealth));
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
