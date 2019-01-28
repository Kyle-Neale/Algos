/******************************************************************************
Count the number of prime numbers less than a non-negative number, n.

Example:
  countPrimes(10) // => 4
    Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
******************************************************************************/

const countPrimes = (n) => {
  const sieve = new Array(n).fill(true);
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (sieve[i]) {
      for (let j = Math.pow(i, 2); j < n; j+=i){
          sieve[j] = false
      }
    }
  }

  return sieve.filter((e, i) => e && i > 1).length
};
