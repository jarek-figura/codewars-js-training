/* sumDigPow.js

   Take a number and sum its digits raised to the consecutive powers.

   The number 89 is the first integer with more than one digit that fulfills
   the property partially introduced in the title of this kata.
   What's the use of saying "Eureka"? Because this sum gives the same number.

   In effect: 89 = 8^1 + 9^2

   The next number in having this property is 135.
   See this property again: 135 = 1^1 + 3^2 + 5^3

   We need a function to collect these numbers, that may receive two integers
   a, b that defines the range [a, b] (inclusive) and outputs a list
   of the sorted numbers in the range that fulfills the property described above.

   Let's see some cases:
   sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
   sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

   If there are no numbers of this kind in the range [a, b] the function
   should output an empty list.
   sumDigPow(90, 100) == []
*/
/*
function sumDigPow(a, b) {
	var arr = [];
	var digits = [];
	while (a <= b) {
		digits = a.toString().split('').map(Number);
		var sum = 0;
		for (var i = 0; i < digits.length; i++) {
			sum += Math.pow(digits[i], i + 1);
		}
		if (sum === a) arr.push(a);
		a++;
	}
	return arr;
}
*/

function sumDigPow(a, b) {
  var arr = [];
  while(a <= b){
    if(('' + a).split('').reduce((x, y, i) => x + y ** (i + 1), 0) === a)
      arr.push(a);
    a++;
  }
  return arr;
}

console.log(sumDigPow(1, 10));     //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100));    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100));   //[89]
console.log(sumDigPow(90, 100));   //[]
console.log(sumDigPow(90, 150));   //[135]
console.log(sumDigPow(50, 150));   //[89, 135]
console.log(sumDigPow(353, 2427));	 //[518, 598, 1306, 1676, 2427]
