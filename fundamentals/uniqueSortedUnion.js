const uniteUnique = (...arrays) => {// Use the rest operator to gather all arguments into an array of arrays
  let result = [];
  for (let arr of arrays) {// Loop through each array in the arguments
    for (let value of arr) {// Loop through each value in the current array
      if (!result.includes(value)) {// Check if the value is not already in the result array
        result.push(value);// If the value is not already in the result array, add it
      }
    }
  }
  return result;
}