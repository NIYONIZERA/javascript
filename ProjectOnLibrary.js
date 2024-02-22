class Book {
  constructor(title, author,) {
    this.title = title;
    this.author = author;
    this.available = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
  }

  displayAvailableBooks() {
    const availableBooks = this.books.filter((book) => book.available);
    if (availableBooks.length > 0) {
      console.log("Available Books:");
      availableBooks.forEach((book) =>
        console.log(`Title: ${book.title}, Author: ${book.author}`)
      );
    } else {
      console.log("No books available.");
    }
  }

  borrowBook(title) {
    const book = this.books.find((book) => book.title === title);
    if (book) {
      if (book.available) {
        book.available = false;
        console.log(`You have borrowed '${book.title}' by ${book.author}.`);
      } else {
        console.log("Sorry, this book is not available for borrowing.");
      }
    } else {
      console.log("Book not found in the library.");
    }
  }

  returnBook(title) {
    const book = this.books.find((book) => book.title === title);
    if (book) {
      if (!book.available) {
        book.available = true;
        console.log(`You have returned '${book.title}' by ${book.author}.`);
      } else {
        console.log("This book is already in the library.");
      }
    } else {
      console.log("Book not found in the library.");
    }
  }
}


const library = new Library();

// Adding books
library.addBook("Think and Grow Rich", "Napoleon Hill");
library.addBook("Atomic Habits", "James Clair");
library.addBook("The Digital Fortress", "Dan Brown");
library.addBook("Long Eagle", "Anonymous");
// Display available books
library.displayAvailableBooks();

// Borrowing a book
library.borrowBook("Atomic Habits");

// Trying to borrow an unavailable book
library.borrowBook("Atomic Habits");

// Returning a book
library.returnBook("Atomic Habits");

// Display available books after returning
library.displayAvailableBooks();
