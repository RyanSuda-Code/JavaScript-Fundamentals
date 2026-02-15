const maskEmail = (email) => {
  const emailFinder = email.indexOf("@"); /*marks the @ to have a reference where to slice the email*/
  const emailSlicer = email.slice(0, emailFinder); /*slices the email from the start until before the @ symbol*/ 
  const emailDomain = email.slice(emailFinder); /*slices the email from the @ symbol to the end*/
  const emailFirstLetter = emailSlicer[0]; /*using the bracket notation to get the first letter of the email*/
  const emailLastLetter = emailSlicer[emailSlicer.length - 1]; /*using the bracket notation to get the last letter of the email. using the emailSlicer.length to acquire the length of the emailSlicer and subtracting 1 to get the last index*/
  const maskRemaining = "*".repeat(emailSlicer.length - 2); /*using the repeat method to create a string of asterisks that is the same length as the emailSlicer minus 2 (to account for the first and last letters that are stored in emailFirstLetter and emailLastLetter respectively)*/
  return emailFirstLetter + maskRemaining + emailLastLetter + emailDomain; /*concatenating the first letter, the masked remaining letters, the last letter, and the email domain to create the masked email*/
}

const email = "amazinggrace@email.com"; 
console.log(maskEmail(email)); 