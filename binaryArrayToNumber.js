/* binaryArrayToNumber.js =>
   Given an array of one's and zero's convert the equivalent binary value to an integer.
   Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1
   Note: you shouldn't mutate the input
 */

const binaryArrayToNumber = arr => {
	var len = arr.length;
	var sum = 0;
	for (i = 0; i < len; i++) {
		sum += arr[i] * Math.pow(2, len - i - 1);
	}
	return sum;
};

//const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
/*
const binaryArrayToNumber = arr => {
	return arr.reduce( (a, b) => a << 1 | b );
}*/

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // 5
console.log(binaryArrayToNumber([1, 0, 0, 1])); // 9
console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6
console.log(binaryArrayToNumber([0, 0, 1, 1])); // 3
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
console.log(binaryArrayToNumber([1, 0, 1, 1])); // 11
