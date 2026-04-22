const pairElement = (str) => {// Create an empty array to store the pairs
  let result = [];
  for (let char of str) {// Loop through each character in the input string
    let pair;// Initialize a variable to hold the pair for the current character
    if (char === "A") {// If the character is "A", the pair is "T"
      pair = "T";
    } else if (char === "T") {// If the character is "T", the pair is "A"
      pair = "A";
    } else if (char === "C") {// If the character is "C", the pair is "G"
      pair = "G";
    } else {// If the character is "G", the pair is "C"
      pair = "C";
    }
    result.push([char, pair]);// Add the original character and its pair as an array to the result array
  }
  return result;
}