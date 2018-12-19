/* rowSumOddNumbers.js

 Given the triangle of consecutive odd numbers:
              1
           3     5
        7     9    11
    13    15    17    19
 21    23    25    27    29
 ...
 Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

 rowSumOddNumbers(1); // 1
 rowSumOddNumbers(2); // 3 + 5 = 8
 */

/*
function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}
*/

//ES6
//const rowSumOddNumbers = n => Math.pow(n, 3);
const rowSumOddNumbers = n => n ** 3;

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(6));
console.log(rowSumOddNumbers(7));
console.log(rowSumOddNumbers(8));

console.log(rowSumOddNumbers(42));
