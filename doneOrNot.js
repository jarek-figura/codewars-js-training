/* doneOrNot.js =>
   Write a function passing a board (list[list_lines]) as parameter.
   If the board is valid return 'Finished!', otherwise return 'Try again!'

   Sudoku game
 */
/*
function doneOrNot(board){
	var res;

	// digits 1-9
	for (var i = 0; i < 9; i++) {
		res = board[i].every(function(val) {
			return val !== 0;
		});
		if (!res) return "Try again!";
	}

	// rows
	res = result(board, 0, 9);
	if (!res) return "Try again!";
	res = regions(board);
	if (!res) return "Try again!";

	// columns
	var cols = Object.keys(board[0]).map(function(col) {
		return board.map(function(row) {
			return row[col];
		})
	});
	res = result(cols, 0, 9);
	if (!res) return "Try again!";
	res = regions(cols);
	if (!res) return "Try again!";

	return "Finished!";
}

function result (array, x, y) {
	var res;
	for (var i = x; i < y; i++) {
		res = array[i].every(function(val, i, arr) { return arr.indexOf(val) === i });
		if (!res) return false;
	}
	return true;
}

function regions (arr) {
	var res;
	var reg = [];
	for (var m = 0, n = 3; m < 9; m += 3, n += 3) {
		for (var k = 0; k < 9; k += 3) {
			for (var i = 0; i < 3; i++) {
				reg[i] = arr[k + i].filter(function (val, idx) {	return idx >= m && idx < n });
			}
			res = result(reg, 0, 3);
			if (!res) return false;
		}
	}
	return true;
}*/

/*
function doneOrNot(bd){
	var o=[0,1,2,3,4,5,6,7,8], p=[[0,1,2],[3,4,5],[6,7,8]],
		a = o.map(i=>bd[i].slice().sort().join("")),
		b = o.map(i=>o.map(j=>bd[j][i]).sort().join("")),
		c = p.map(x=>p.map(y=>y.reduce((m,n)=>m.concat(x.map(z=>bd[z][n])),[]))).reduce((m,n)=>m.concat(n.map(x=>x.sort().join(""))),[]);
	return a.concat(b,c).every(x=>x=="123456789") ? "Finished!" : "Try again!";
}*/

/*
function doneOrNot(board){
	var set1Array = new Set(),
		set2Array = new Set(),
		set3Array = new Set();

	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++){
			set1Array.add(board[i][j]);
			set2Array.add(board[j][i]);
			set3Array.add(board[(i%3)*3+j%3][Math.floor(i/3)*3+Math.floor(j/3)]);
		}
		if (set1Array.size !== 9 || set2Array.size !== 9 || set3Array.size !== 9 )
			return "Try again!";
		set1Array.clear();
		set2Array.clear();
		set3Array.clear();
	}
	return "Finished!";
}*/

function doneOrNot(rows){
	var columns = [], blocks = [];
	for (var i = 0; i < 9; i++) {
		columns[i] = [];
		for (var j = 0; j < 9; j++) {
			var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
			blocks[k] = blocks[k] || [];
			blocks[k].push(rows[i][j]);
			columns[i].push(rows[j][i]);
		}
	}

	var is_valid_row = (row) => row.slice(0).sort().join('') === '123456789';

	var is_valid = rows.every(is_valid_row) && columns.every(is_valid_row) && blocks.every(is_valid_row);

	return is_valid ? 'Finished!' : 'Try again!';
}

console.log(doneOrNot([
	[5, 3, 4, 6, 7, 8, 9, 1, 2],
	[6, 7, 2, 1, 9, 5, 3, 4, 8],
	[1, 9, 8, 3, 4, 2, 5, 6, 7],
	[8, 5, 9, 7, 6, 1, 4, 2, 3],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 6, 1, 5, 3, 7, 2, 8, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 4, 5, 2, 8, 6, 1, 7, 9]
]));
console.log(doneOrNot([
	[5, 3, 4, 6, 7, 8, 9, 1, 2],
	[6, 7, 2, 1, 9, 8, 3, 4, 5],
	[1, 8, 7, 3, 4, 2, 5, 6, 9],
	[8, 5, 9, 7, 6, 1, 3, 2, 4],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 6, 1, 5, 3, 7, 2, 8, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 2, 5, 4, 8, 6, 1, 7, 9]
]));