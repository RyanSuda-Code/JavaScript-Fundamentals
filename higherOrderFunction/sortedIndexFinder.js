const getIndexToIns = (arr, num) => {//function that takes an array and a number as arguments and returns the lowest index at which the number can be inserted into the array in order to maintain its sorted order
  arr.sort((a, b) => a - b);//sorting the array in ascending order using the sort method and a comparison function that subtracts b from a
  let index = arr.findIndex(value => value >= num);//using the findIndex method to find the index of the first element in the sorted array that is greater than or equal to the given number

  if (index === -1) {//if the findIndex method returns -1, it means that all elements in the array are less than the given number, so we can insert the number at the end of the array
    return arr.length;//returning the length of the array as the index where the number can be inserted
  }
  return index
}