const truncateString = (str, num) => {
    if (str.length > num) {
        return `${str.slice(0, num)}...`
    } else {
        return str;
    }
}


console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));