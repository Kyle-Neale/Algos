/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
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

/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
	var nPrimes = [];
	var num = 2;
	for (var i = nPrimes.length; i <= n; num++) {
		if (isPrime(num)) {
			nPrimes.push(num);

		}
	}
	return nPrimes;
}

function firstNPrimes(n) {
	var primeArr = [];
	var num = 2;

	while (primeArr.length < n) {
		if (isPrime(num)) {
			primeArr.push(num);
		}
		num++;
	}
	return primeArr;
}

/***********************************************************************
Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/

function sumOfNPrimes(n) {
	var sum = 0;
	var arr = firstNPrimes(n)
	for (var i = 0; i < arr.length; i++) {
	  sum += arr[i];
	}
	return sum;
}
