import "./styles.css";

/* Write a program that creates a string that represents an 8 x8  grid,
using new-line characters to separate lines. At each position of the grid
there is either a space or a # character. The characters should form a chess board.
Pass the string in console.log*/

let size = 8; //sets iteration limit
let board = ""; //sets an empty string for a placeholder for our if statements to fill

for (let y = 0; y < size; y++) {
  // y = vertical axis aka rows
  for (let x = 0; x < size; x++) {
    // x = horizontal axis aka columns
    // the for loop of x must complete before the for loop of y can complete its run
    if ((x + y) % 2 == 0) {
      // when we set x + y every second number will be divisible by 2, every second character will be a space character
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
