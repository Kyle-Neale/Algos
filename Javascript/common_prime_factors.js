/***********************************************************************
Write a function `commonPrimeFactors` that takes in two numbers as
arguments and returns an array of all prime factors that are common
between the two numbers. A factor is a number that divides another
number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50); // => [ 2 ]
commonPrimeFactors(6, 24); // => [ 2, 3 ]
commonPrimeFactors(11,22); // => [ 11 ]
commonPrimeFactors(45, 60); // => [ 3, 5 ]
***********************************************************************/
function isPrime(number) {
	if (number < 2) {
		return false;
	}
	for (var i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

function commonPrimeFactors(num1, num2) {
	var arr = [];
	for (var i = 0; i < num2; i++) {
		if (num1 % i === 0 && num2 % i === 0) {
			if (isPrime(i)) {
				arr.push(i);
			}
		}
	}
	return arr;
}
