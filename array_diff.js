/* array_diff.js

   implement an difference function, which subtracts one list from another.

   It should remove all values from list a, which are present in list b.
   array_diff([1,2],[1]) = [2]

   If a value is present in b, all of its occurrences must be removed from the other:
   array_diff([1,2,2,2,3],[2]) = [1,3]
 */
/*
function array_diff(a, b) {
	var lena = a.length;
	while (lena--) {
		var taba = a[lena];
		var lenb = b.length;
		while (lenb--) {
			if (taba === b[lenb]) {
				a.splice(lena, 1);
			}
		}
	}
	return a;
}
*/
// ES6
//var array_diff = (a, b) => a.filter(item => b.indexOf(item) < 0);
const array_diff = (a, b) => a.filter(item => !b.includes(item));

/*
function array_diff(a, b) {
	return a.filter(function (value) {
		return b.indexOf(value) === -1;
	});
}*/

console.log(array_diff([1,2], [1]));
console.log(array_diff([1,2,2,2,3], [2]));
console.log(array_diff([], [4,5]));
console.log(array_diff([3,4], [3]));
console.log(array_diff([1,8,2], []));
