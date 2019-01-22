/******************************************************************************
Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 or 0.

Examples:
  addBinary("11", "1") // => "100"
  addBinary("1010", "1011") // => "10101"
******************************************************************************/


var addBinary = function(A, B) {
    let sum = '';
    let carry = 0;
    let i = A.length - 1;
    let j = B.length - 1;

    while (i >= 0 || j >= 0) {
        let a = A[i] ? A[i] : '0';
        let b = B[j] ? B[j] : '0';

        sum = String(a ^ b ^ carry) + sum;
        if (a === b && a !== String(carry)) {
            carry = Number(!carry);
        }
        i--
        j--
    }
    return carry ? (String(carry) + sum) : sum;
};
