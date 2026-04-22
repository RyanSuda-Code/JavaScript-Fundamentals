const convertHTML = (str) => {
  let result = "";

  for (let char of str) {// Loop through each character in the input string
    if (char === "&") {// If the character is an ampersand, replace it with the corresponding HTML entity
      result += "&amp;";
    } else if (char === "<") {// If the character is a less-than sign, replace it with the corresponding HTML entity
      result += "&lt;";
    } else if (char === ">") {// If the character is a greater-than sign, replace it with the corresponding HTML entity
      result += "&gt;";
    } else if (char === '"') {
      result += "&quot;";
    } else if (char === "'") {
      result += "&apos;";
    } else {
      result += char;
    }
  }

  return result;
}