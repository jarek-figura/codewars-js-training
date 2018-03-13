function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}

// ES6
let rowSumOddNumbers2 = n => Math.pow(n, 3);
let rowSumOddNumbers3 = n => n ** 3;

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(6));

console.log(rowSumOddNumbers(42));
