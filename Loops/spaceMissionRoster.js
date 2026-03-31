const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3 
};

function addCrewMember(crew, astronaut) { // Check for duplicate ID
  for (const member of crew) { 
    if (member.id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  crew.push(astronaut);// Add astronaut to the crew
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
]; 

for (const astronaut of remainingCrew) {// Loop through remaining crew and add them to the squad
  addCrewMember(squad, astronaut);
}

const swapCrewMembers = (crew, fromIndex, toIndex) => {
  if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) { // Check for valid indices. < 0 can be used to check if negative, it also automatically converts the value to a number before comparing.
    console.log("Invalid crew indices");
    return;
  }
  const updatedCrew = crew.slice();// Create a shallow copy of the crew array
  updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];// Take the item from toIndex out, put the item from fromIndex in its place, then take the removed item and put it back into fromIndex—so the two items switch places.
}