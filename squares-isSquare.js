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