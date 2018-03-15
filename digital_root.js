/* digital_root.js =>
   Create a digital root function.

   A digital root is the recursive sum of all the digits in a number.
   Given n, take the sum of the digits of n. If that value has two digits,
   continue reducing in this way until a single-digit number is produced.
   This is only applicable to the natural numbers.
 */

function digital_root(n) {
	n = n.toString().split('').map(Number).reduce((total, num) => total + num, 0);
	return n > 9 ? digital_root(n) : n;
}

/*
function digital_root(n) {
	var digs;
	while (n > 9) {
		digs = n.toString().split('').map(Number);
		n = digs.reduce(function (total, num) { return total + num;	}, 0);
	}
	return n;
}*/

/*
function digital_root(n) {
  return --n % 9 + 1;
}*/

/*
function digital_root(n){
	n = eval(n.toString().split('').join('+'));
  return n > 9 ? digital_root(n) : n;
}*/

console.log(digital_root(16));      // 7
console.log(digital_root(942));     // 6
console.log(digital_root(132189));  // 6
console.log(digital_root(493193));  // 2
