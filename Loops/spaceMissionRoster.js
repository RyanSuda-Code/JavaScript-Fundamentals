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
 
  return updatedCrew;
}

const updatedSquad = swapCrewMembers(squad, 2, 5);

const sortByPriorityDescending = (crew) => { //bubble sort to sort crew by priority in descending order. The outer loop iterates through each element in the crew array, while the inner loop compares adjacent elements and swaps them if they are in the wrong order (if the current astronaut has a lower priority than the next one). This process is repeated until the entire array is sorted.
  for (let i = 0; i < crew.length - 1; i++) {// Loop through each element in the crew array, except the last one. Repeat the whole sorting process again and again until the entire array is sorted. The number of iterations needed is one less than the length of the array, because after n-1 iterations, the last element will already be in place.
    for (let j = 0; j < crew.length - i - 1; j++) {// Loop through the crew array up to the last unsorted element. Go through the array and compare neighbors, but stop before the last i elements, which are already sorted.
      if (crew[j].priority < crew[j + 1].priority) { // Compare the priority of the current astronaut with the next one. If the current astronaut has a lower priority than the next one, swap them.
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

const getEVAReadyCrew = (crew) => {
  const eligible = [];
  for (const astronaut of crew) {
    if (astronaut.isEVAEligible) eligible.push(astronaut); // Check if the astronaut is eligible for EVA. If the astronaut's isEVAEligible property is true, add them to the eligible array.
  }
  sortByPriorityDescending(eligible); // Sort the eligible crew by priority in descending order.

  return eligible;
}

const EVAReadySquad = getEVAReadyCrew(updatedSquad);

const chunkCrew = (crew, size) => {
  if (size > 1) {
    console.log("Chunk size must be >= 1");
    return;
  }

  const chunks = [];
  for (let i = 0; i < crew.length; i += size) {
    chunks.crew(crew.slice(i, i + size));
  }
  return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);

for (let i = 0; i < EVAChunks.length; i++) {
  console.log(`Chunk ${i+1}:`);
  for (let j = 0; j < EVAChunks[i].length; j++) {
    console.log(EVAChunks[i][j].name);
  }
}

const printCrewSummary = (crew) => {
  const sorted = crew.slice();
  sortByPriorityDescending(sorted);
  for (const astronaut of sorted) {
    console.log(astronaut.name);
  }
}

printCrewSummary(updatedSquad);