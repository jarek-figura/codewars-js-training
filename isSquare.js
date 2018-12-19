/* isSquare.js

 Given an integral number, determine if it's a square number:

 In mathematics, a square number or perfect square is an integer that is
 the square of an integer; in other words, it is the product of some integer
 with itself.  The tests will always use some integral number, so don't worry
 about that in dynamic typed languages.

 Examples

 isSquare(-1) // => false
 isSquare( 3) // => false
 isSquare( 4) // => true
 isSquare(25) // => true
 isSquare(26) // => false
 */

var isSquare = function(n){
	var nsqrt = Math.sqrt(n);
	return (n >= 0 && Math.floor(nsqrt) === nsqrt);

//	return Math.sqrt(n) % 1 === 0;
//	return n = Math.sqrt(n), n === ~~n;
};

//ES6
//const isSquare = n => Number.isInteger(Math.sqrt(n));
//const isSquare = n => Math.sqrt(n) % 1 === 0

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
/*
var r, i;
for(i = 0; i < 100; ++i){
	r = (Math.random() * 0xfff0) | 0;
	console.log(isSquare(r * r) + " - " + (r * r) + " is a square number");
}*/