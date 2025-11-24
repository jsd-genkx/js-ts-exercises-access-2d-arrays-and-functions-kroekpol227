const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves = [];

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0; 
moves.push(board[row][col]); // A // r0 c0 [0][0]

// Move Right to B		// ro c1 [0][1]
col++;
moves.push(board[row][col]); // B

// Move Right to C 		//r0 c2 [0][2]
col++;
moves.push(board[row][col]); // C

// Move Down to F		//r1 c2	[1][2]
row++;
moves.push(board[row][col]); // F

// Move left to E	 	//r1 c1 [1][1]
col--;
moves.push(board[row][col]); // F

console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E
console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4
