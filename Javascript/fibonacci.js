/***********************************************************************
Write a function fibonacci(n) that takes in a number that represents the
length of a sequence. The function should should return the first `n`
numbers in the fibonacci sequence.

The first two numbers of the fibonacci sequence are 1 and 1. The next
number in the sequence can be found by adding the last two numbers in
the sequence.

Examples:

fibonacci(0); // => []
fibonacci(1); // => [ 1 ]
fibonacci(2); // => [ 1, 1 ]
fibonacci(3); // => [ 1, 1, 2 ]
fibonacci(5); // => [ 1, 1, 2, 3, 5 ]
fibonacci(10); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
***********************************************************************/

function fibonacci(n) {
	if (n === 0) {
		return [];
	} else if (n === 1) {
		return [1];
	} else if (n === 2) {
		return [1, 1];
	}
	let fibArr = [1, 1];
	while (fibArr.length < n) {
		let nextNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
		fibArr.push(nextNum);
	}
	return fibArr;
}

// Recursive Solution:

function fibonacci(n) {
	if (n === 0) {
		return [];
	} else if (n === 1) {
		return [1];
	} else if (n === 2) {
		return [1, 1];
	}

	let fibArr = [1, 1];
	while (fibArr.length < n) {
		let nextNum = fibonacci(n - 1) + fibonacci(n - 2);
		fibArr.push(nextNum);
	}
	fibonacci(n - 1);
}
