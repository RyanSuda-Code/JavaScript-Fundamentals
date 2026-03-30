// My code
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) { // Loop through each character in the sentence
    if (vowels.includes(char)) { // Check if it's a vowel
      count++;
    }
  }
  return count;
}

function getConsonantCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (/^[a-z]$/.test(char) && !vowels.includes(char)) { // Check if it's a consonant
      count++;
    }
  }
  return count;
}

function getPunctuationCount(sentence) {
  const punctuation = /[.,!?;:'"()-]/; // regex to match common punctuation characters
  let count = 0;

  for (const char of sentence) {
    if (punctuation.test(char)) {
      count++;
    }
  }
  return count;
}

const getWordCount = (sentence) => {
  const clean = sentence.trim();
  if (clean === "") {
    return 0;
  }
  const words = clean.split(" ");
  return words.length;
};



//fcc code
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(' ');
  let count = 0;

  for (const word of words) {
    if (word !== '') {
      count++;
    }
  }

  return count;
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);