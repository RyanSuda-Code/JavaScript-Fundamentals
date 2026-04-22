const sumAll = (arr) => {// Find the minimum and maximum numbers in the array
  let min = Math.min(...arr);// Find the minimum number in the array using the Math.min function and the spread operator
  let max = Math.max(...arr);// Find the maximum number in the array using the Math.max function and the spread operator
  let total = 0;

  for (let i = min; i <= max; i++) {// Loop from the minimum number to the maximum number, inclusive
    total += i;// Add each number in the range to the total variable
  }
  return total;
}