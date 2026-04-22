function sumFibs(num) {// Initialize variables to keep track of the previous two Fibonacci numbers and the total sum of odd Fibonacci numbers.
  let prev = 0;
  let curr = 1;
  let total = 0;

  while (curr <= num) {// Check if the current Fibonacci number is odd. If it is, add it to the total sum.
    if (curr % 2 !== 0) {
      total += curr;
    }
    let next = prev + curr;// Update the previous and current Fibonacci numbers for the next iteration.
    prev = curr;
    curr = next;
  }

  return total;// Return the total sum of odd Fibonacci numbers that are less than or equal to the given number.
}