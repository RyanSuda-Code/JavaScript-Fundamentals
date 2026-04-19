function pyramid(char, rows, inverted) {
  const maxWidth = 2 * rows - 1;
  let result = '\n';
  
  for (let i = 1; i <= rows; i++) {
    const row = inverted ? rows - i + 1 : i;
    const stars = 2 * row - 1;
    const spaces = (maxWidth - stars) / 2;
    result += ' '.repeat(spaces) + char.repeat(stars) + '\n';
  }
  
  return result;
}