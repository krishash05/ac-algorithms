/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/



/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/



function isBigger(a, b) {
	//input two numbers

	//check to see if number is bigger, equal etc
	//conditional statement if a>b
	var result = '';
	if (typeof a === 'number' && typeof b === "number"){
		if (a > b){
			result = true;
		} else if (a < b){
			result = false;
		} else if (a == b){
			result = 0;
		}
	} else {
		result = -1;
	}
	return result;
};

	

	//result
