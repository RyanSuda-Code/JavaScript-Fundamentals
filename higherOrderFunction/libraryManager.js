const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

console.log("Books in the Library:\n");

function getBookInformation(catalog) {
  return catalog.map(book => `${book.title} by ${book.author}`).join("\n"); // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. In this case, it transforms each book object into a string that combines the title and author. The join("\n") method then concatenates all the strings in the resulting array into a single string, with each book's information separated by a newline character for better readability.
}

console.log(getBookInformation(library));

console.log("\nList of book summaries:\n");

function getBookSummaries(catalog) {
  return catalog.map((book) => book.about).join("\n");
}

console.log(getBookSummaries(library));

console.log("\nList of books by Arvid Kahl:\n");

function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);// The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, it filters the catalog to include only those book objects where the author property matches the specified author parameter. The result is an array of book objects written by the given author.
}

console.log(getBooksByAuthor(library, "Arvid Kahl"));

console.log("\nList of books by James Clear:\n");
console.log(getBooksByAuthor(library, "James Clear"));

console.log("\nTotal number of pages for all library books:\n");

function getTotalPages(arr) {
  const result = arr.map(book => book.pages);
  const total = result.reduce((acc, curr) => acc + curr, 0);// The map() method creates a new array containing the number of pages for each book in the library. The reduce() method then takes this array of page counts and sums them up to get the total number of pages across all books. The initial value for the accumulator (acc) is set to 0, and for each page count (curr), it adds it to the accumulator until it processes all elements in the array, resulting in the total page count.
  return total;
}

console.log(getTotalPages(library));