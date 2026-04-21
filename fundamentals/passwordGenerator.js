const generatePassword = (length) => {// Define a string of characters to choose from for the password
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";// letter, number, and symbol characters to be included in the password.
  let password = "";// Empty string to hold the password generated
  for (let i = 0; i < length; i++) {//loop through the desired length of the password
    password += chars[Math.floor(Math.random() * chars.length)];// Randomly select a character from the chars string and add it to the password
  }
  return password;
}

const password = generatePassword(10);
console.log(`Generated password: ${password}`);