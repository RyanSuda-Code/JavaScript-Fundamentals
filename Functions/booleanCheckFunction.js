function booWho(argument) {
  return argument === true || argument === false;
}

console.log(booWho(null)); 
console.log(booWho([1, 2, 3]));
console.log(booWho({ "a": 1 }));
console.log(booWho(1));
console.log(booWho("true"));
console.log(booWho(false)); 
console.log(booWho(true));