let year;

const isLeapYear = (num) => {
    if (num % 400 === 0) {
        return `${num} is a leap year.`;
    } else if (num % 100 === 0) {
        return `${num} is not a leap year.`;
    } else if (num % 4 === 0) {
        return `${num} is a leap year.`;
    } else {
        return `${num} is not a leap year.`;
    }
}

year = 2024;
let result = isLeapYear(year);
console.log(result);