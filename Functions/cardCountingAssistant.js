let count = 0;

const cardCounter = (card) => {
    if (card >= 2 && card <= 6) {
        ++count;
    } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
        --count;
    }

    if (count >= 1) {
        return `${count} Bet`;
    } else if (count <= 0) {
        return `${count} Hold`;
    }
}

console.log(cardCounter(4));
console.log(cardCounter(10));
console.log(cardCounter("K"));
console.log(cardCounter(2));
console.log(cardCounter("A"));