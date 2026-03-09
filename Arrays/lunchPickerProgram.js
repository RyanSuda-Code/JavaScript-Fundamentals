const lunches = [];

const addLunchToEnd = (arr, str) => {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger");

const addLunchToStart = (arr, str) => {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

addLunchToStart(lunches, "Sushi");
addLunchToStart(["Burger", "Sushi"], "Pizza");

const removeLastLunch = (arr) => {
  let rmv = arr.pop();
  if (rmv !== undefined) {
    console.log(`${rmv} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

removeLastLunch(["Stew", "Soup", "Toast"])

const removeFirstLunch = (arr) => {
  let rmf = arr.shift();
  if (rmf !== undefined) {
    console.log(`${rmf} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr
}

const getRandomLunch = (arr) => {
  let random = Math.floor(Math.random() * arr.length);
  let lunchNum = arr[random]
  if (lunchNum !== undefined) {
    console.log(`Randomly selected lunch: ${lunchNum}`);
  } else {
    console.log("No lunches available.")
  }
}

const showLunchMenu = (arr) => {
  if (arr.length > 0 ) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

