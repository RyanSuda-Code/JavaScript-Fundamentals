const chunkArrayInGroups = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i += num){
    let chunk = arr.slice(i, i+ num);
    result.push(chunk);
  }
  return result;
}

//Instruction: Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.