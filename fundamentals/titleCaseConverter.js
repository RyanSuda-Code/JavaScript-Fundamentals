const titleCase = (str) => {
  let words = str.split(" ");// split the string into an array of words
  let result = [];// create an empty array to store the title-cased words

  for (let i = 0; i < words.length; i++) {// loop through each word in the array
    result.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase());// capitalize the first letter and make the rest lowercase, then push it to the result array
  }
  return result.join(" ");// join the array of title-cased words back into a string and return it
}