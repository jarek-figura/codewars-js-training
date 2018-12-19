/* squareDigits.js

  Square every digit of a number.
  For example, if we run 9119 through the function, 811181 will come out,
  because 9^2 is 81 and 1^2 is 1.

  Note: The function accepts an integer and returns an integer
 */

/*
function squareDigits (num) {
	num = Math.abs(num);
	var digits = num.toString().split('').map(Number);
	var str = "";
	for (var i = 0; i < digits.length; i++) {
		str += String(digits[i] * digits[i]);
	}
	return Number(str);
}
*/

const squareDigits = num => parseInt(('' + Math.abs(num)).split('').map(d => d * d).join(''));

console.log(squareDigits(9119));
console.log(squareDigits(0));
console.log(squareDigits(1));
console.log(squareDigits(00));
console.log(squareDigits(-0));
console.log(squareDigits(-00));
console.log(squareDigits(-02));
console.log(squareDigits(04));
console.log(squareDigits(204507));
