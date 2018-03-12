function validatePIN (pin) {
	var len = pin.length;
	if (len !== 4 && len !== 6)
		return false;
	var expr = new RegExp("[0-9]{" + len + "}");
	return expr.test(pin);
}

function validatePIN2 (pin) {
	return /^(\d{4}|\d{6})$/.test(pin);
}

// ES6
const validatePIN3 = pin => /^(\d{4}$|\d{6}$)/.test(pin);

function validatePIN4 (pin) {
	var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
	return reg.test(pin);
}

console.log("1 - " + validatePIN("1"));
console.log("12 - " + validatePIN("12"));
console.log("123 - " + validatePIN("123"));
console.log("12345 - " + validatePIN("12345"));
console.log("12345671 - " + validatePIN("1234567"));
console.log("-1.234 - " + validatePIN("-1.234"));
console.log("-1234 - " + validatePIN("-1234"));
console.log("1.234 - " + validatePIN("1.234"));
console.log("00000000 - " + validatePIN("00000000"));
console.log("a234 - " + validatePIN("a234"));
console.log(".234 - " + validatePIN(".234"));
console.log("1234 - " + validatePIN("1234"));
console.log("0000 - " + validatePIN("0000"));
console.log("1111 - " + validatePIN("1111"));
console.log("123456 - " + validatePIN("123456"));
console.log("098765 - " + validatePIN("098765"));
console.log("000000 - " + validatePIN("000000"));
console.log("090909 - " + validatePIN("090909"));