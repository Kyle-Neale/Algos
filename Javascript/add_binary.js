
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
