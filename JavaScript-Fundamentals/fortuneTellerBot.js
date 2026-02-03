const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It will be wise to avoid the color red today.";

const randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune = "";
if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune); 


/*
LESSONS LEARNED – Fortune Generator

WHERE I GOT STUCK
- The program was printing the correct fortune
- But FCC tests failed because `selectedFortune` held a NUMBER, not a fortune string
- I mistakenly assigned `selectedFortune = randomNumber`
- I also used console.log() inside the if blocks instead of storing the value

HOW I SOLVED IT
- Realized console.log() only displays values and does not store them
- Changed selectedFortune to `let` and initialized it as an empty string
- Assigned the correct fortune inside the if / else if blocks
- Logged selectedFortune only AFTER the decision logic finished

CORE CONCEPTS LEARNED

1) console.log() vs assignment
- console.log() only displays a value
- It does NOT store the value in a variable
- If a value must be reused, it must be ASSIGNED

2) Store the result, not the cause
- randomNumber = decision input (cause)
- selectedFortune = final result (fortune string)
- selectedFortune should never store the random number

3) const vs let
- const → value never changes
- let → value can change
- selectedFortune must be let because it depends on conditions

4) Proper control flow
- Generate random number
- Use if / else if / else to decide which fortune matches
- Assign the fortune inside the condition
- Display the result after the decision is complete

5) Separation of responsibilities
- if / else blocks → decide and assign
- console.log → display only
- Do not mix assignment and logging

DEBUGGING INSIGHT
- If logic looks correct but tests fail:
  check what values variables actually hold
- Many bugs are data-flow issues, not syntax errors

NOTE TO FUTURE ME
- Feeling stuck usually means I’m close to understanding
- Ask for hints, not answers
- Understanding the fix matters more than passing the test
*/
