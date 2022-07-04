import "./styles.css";

/* write a loop that makes seven calls to console.log
 to output a triangle */

//using a do...while loop
let hash = "#";
do {
  console.log(hash);
  hash = hash + "#";
} while (hash.length !== 8);

//using a for loop
for (let triangle = "#"; triangle.length <= 8; triangle += "#") {
  console.log(triangle);
}
