/* stripComments.js

  Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
  Any whitespace at the end of the line should also be stripped out.

  Example:

  Given an input string of:
  apples, pears # and bananas
  grapes
  bananas !apples

  The output expected would be:
  apples, pears
  grapes
  bananas

  The code would be called like so:

  var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
  // result should == "apples, pears\ngrapes\nbananas"
*/

const stripComments = (input, markers) => {
  return input.split('\n').map(
   item => (item.slice(0, item.indexOf(markers[0])) || item.slice(0, item.indexOf(markers[1])))
  );
};

console.log(stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
// apples, pears\ngrapes/nbananas
console.log(stripComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
// apples, plums\npears\noranges
console.log(stripComments("Q @b\nu\ne -e f g", ["@", "-"]));
// Q\nu\ne
