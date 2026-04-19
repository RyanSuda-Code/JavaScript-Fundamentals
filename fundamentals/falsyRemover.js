const bouncer = (arr) => {
  let result = [];// create an empty array to store the truthy values
  for (let value of arr) {// loop through each value in the input array
    if (Boolean(value)) {// check if the value is truthy
      result.push(value);// if it is truthy, push it to the result array
    }
  }
  return result;// return the array of truthy values
}