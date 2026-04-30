function isPrime(num) {
  if (num < 2) return false;// 0 and 1 are not prime numbers
  for (let i = 2; i < num; i++) {// Check for factors from 2 to num-1
    if (num % i === 0) {// If num is divisible by any of these numbers, it is not prime
      return false
    }
  }
  return true;
}

function sumPrimes(num) {
  if (num < 2) return 0;// If the input number is less than 2, return 0 since there are no prime numbers to sum
  
  let total = 0;
  
  for (let i = 2; i <= num; i++) {// Loop through numbers from 2 to num
    if (isPrime(i)) {// If the current number is prime, add it to the total
      total += i;
    }
  }
  
  return total;
}


/** Build a Prime Number Sum Calculator
In this lab, you will build a calculator that takes a number and returns the sum of all prime numbers that are less than or equal to that number.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a sumPrimes function that accepts a number as an argument.
The sumPrimes function should return the sum of all prime numbers less than or equal to the provided number.
If the input number is less than 2, the function should return 0. */