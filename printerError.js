/* printerError.js

 In a factory a printer prints labels for boxes. For one kind of boxes the printer
 has to use colors which, for the sake of simplicity, are named with letters
 from a to m.

 The colors used by the printer are recorded in a control string.
 For example a "good" control string would be aaabbbbhaijjjm
 meaning that the printer used three times color a, four times color b,
 one time color h then one time color a...

 Sometimes there are problems: lack of colors, technical malfunction
 and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

 You have to write a function printer_error which given a string will output
 the error rate of the printer as a string representing a rational
 whose numerator is the number of errors and the denominator
 the length of the control string.
 Don't reduce this fraction to a simpler expression.

 The string has a length greater or equal to one and
 contains only letters from a to z.

 #Examples:
 s="aaabbbbhaijjjm";         error_printer(s) => "0/14"
 s="aaaxbbbbyyhwawiwjjjwwm"; error_printer(s) => "8/22"
 */

/*
function printerError (s) {
	var res = s.match(/[n-z]/g);
	return (res === null ? [] : res).length + "/" + s.length;
}
*/

const printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

console.log(printerError(""));
console.log(printerError("x"));
console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
