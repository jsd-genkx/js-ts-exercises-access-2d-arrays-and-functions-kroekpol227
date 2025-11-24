const boardfn = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];
// console.log(boardfn.length);//row length
// console.log(boardfn[0].length);//col length
const rowLength = boardfn.length;
const colLength = boardfn[0].length;
const movefn: string[] = [];
// Start at A (0,0) -> [row][col]
let rowfn = 0;
let colfn = 0;
movefn.push(boardfn[rowfn][colfn]); // A
// Define movement functions
function moveRight() {
  if (colfn < colLength) {
    colfn++;
    movefn.push(boardfn[rowfn][colfn]);
  } else {
    console.log("Invalid move");
  }
}
function moveLeft() {
  if (colfn > 0) colfn--;
  movefn.push(boardfn[rowfn][colfn]);
}
function moveUp() {
  if (rowfn > 0) rowfn--;
  movefn.push(boardfn[rowfn][colfn]);
}
function moveDown() {
  if (rowfn < rowLength) rowfn++;
  movefn.push(boardfn[rowfn][colfn]);
}
// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E
console.log("Path:", movefn.join(" → "));
console.log("Total Moves (Start from 'A'):", movefn.length - 1);