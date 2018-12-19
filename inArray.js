/* inArray.js

   Given two arrays of strings a1 and a2 return a sorted array r in lexicographical
   order of the strings of a1 which are substrings of strings of a2.

   #Example 1: a1 = ["arp", "live", "strong"]
               a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
            returns ["arp", "live", "strong"]

   #Example 2: a1 = ["tarp", "mice", "bull"]
               a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
            returns []

   Notes:
   Arrays are written in "general" notation. See "Your Test Cases" for examples
   in your language. In Shell bash a1 and a2 are strings.
   The return is a string where words are separated by commas.

   Beware: r must be without duplicates.
 */

function inArray (arr1, arr2) {
	return arr1.filter(function (x) {
		return arr2.some(function (y) {
      if (y.includes(x)) return x;
		});
	}).sort();
}

//var inArray = (arr1, arr2) => (arr1.filter(x =>	arr2.some(y => y.includes(x) ? x : undefined))).sort();

var a1, a2;
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["arp", "live", "strong"];
console.log(inArray(a1, a2));   // ["arp", "live", "strong"]
a1 = ["tarp", "mice", "bull"];
console.log(inArray(a1, a2));   // []
a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2));   // ["live", "strong"]
