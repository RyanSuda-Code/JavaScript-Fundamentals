const largestOfAll = (arr) => {
  let largestNum = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let max = current[0];
    for (let j = 0; j < current.length; j++){
      if (current[j] > max) {
        max = current[j];
        
      }
    }
    largestNum.push(max);
  } 
  return largestNum;
}