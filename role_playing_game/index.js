import characterData from "./data.js";
import { Character } from "./Character.js";
import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

//Renders character to DOM
function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

function attack() {
  wizard.getDiceHtml();
  orc.getDiceHtml();
  wizard.takeDamage(orc.currentDiceScore);
  orc.takeDamage(wizard.currentDiceScore);
  render();
  if (wizard.dead || orc.dead) {
    endGame();
  }
}

function endGame() {
  const endMessage =
    wizard.health === 0 && orc.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard is Victorious"
      : "The Orc is Victorious";

  console.log(endMessage);
}

document.getElementById("attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();
