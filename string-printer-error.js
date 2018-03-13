function printerError (s) {
	var res = s.match(/[n-z]/g);
	return (res === null ? [] : res).length + "/" + s.length;
}


console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
