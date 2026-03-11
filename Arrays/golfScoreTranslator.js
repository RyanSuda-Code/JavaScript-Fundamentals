const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

const golfScore = (par, strk) => {
  if (strk === 1) {
    return names[0];
  } else if (par - strk >= 2) {
    return names[1];
  } else if (par - strk === 1) {
    return names[2];
  } else if (par === strk) {
    return names[3];
  } else if (strk - par === 1) {
    return names[4];
  } else if (strk - par === 2) {
    return names[5];
  } else if (strk - par === 4) {
    return names[6];
  }
}