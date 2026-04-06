let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (name, property) => {
  for (let contact of contacts) {
    if (contact.firstName === name) {
      if (contact[property] !== undefined) {
        return contact[property];
      } else {
        return "No such property"
      }
    }
  }
  return "No such contact"
}


// Instructions:

/**
 * In this lab, you will build a profile lookup that looks up information about people in a contacts list.

For this example imagine there is a contact named Akira Laine, the lookUpProfile("Akira", "lastName") should return Laine.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named lookUpProfile that takes a name and a property as arguments.
You should retrieve contact information from the provided contacts array.
If the function receives a contact name and the property exists on the related contact, then the property's value should be returned.
If the name passed to the function does not match any contacts in the contacts array, then the function should return "No such contact".
If the property does not exist on a found contact, then the function should return "No such property".
 */