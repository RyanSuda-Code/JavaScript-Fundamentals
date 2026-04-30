const books = [
  {
    title: "The Lightning Thief",
    authorName: "Rick Riordan",
    releaseYear: 2005
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    authorName: "J.K. Rowling",
    releaseYear: 1997
  },
  {
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    releaseYear: 1937
  }
] 

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) { //using conditional statements to compare the release years of the books and return -1, 1, or 0 accordingly
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) { 
    return 1;
  } else {
    return 0
  }
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950); //using the filter method to create a new array of books that were released in or before 1950
filteredBooks.sort(sortByYear);//using the sort method to sort the filtered books by their release year in ascending order