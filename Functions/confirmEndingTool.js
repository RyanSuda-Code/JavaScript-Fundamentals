const confirmEnding = (str1, str2) => {
  return str1.slice(-str2.length).toLowerCase() === str2.toLowerCase();
};


/*endsWith() modernversion */

const confirmsEnding = (str1, str2) => {
  return str1.toLowerCase().endsWith(str2.toLowerCase());
};