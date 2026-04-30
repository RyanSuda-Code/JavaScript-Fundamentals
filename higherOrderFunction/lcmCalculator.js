function gcd(a, b) {// Greatest Common Divisor using Euclidean algorithm
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);// Least Common Multiple using GCD
}

function smallestCommons(arr) {// Main function to calculate the smallest common multiple
  let min = Math.min(...arr);// Find the minimum and maximum values in the array
  let max = Math.max(...arr);
  
  let result = lcm(min, min + 1);// Start with the LCM of the first two numbers
  
  for (let i = min + 2; i <= max; i++) {// Iterate through the range and calculate the LCM with the current result
    result = lcm(result, i);
  }
  
  return result;
}