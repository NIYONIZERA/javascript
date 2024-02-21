class Book {
  constructor(title, author) {
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

// Example usage:
const library = new Library();

// Adding books
library.addBook("1984", "George Orwell");
library.addBook("To Kill a Mockingbird", "Harper Lee");
library.addBook("The Great Gatsby", "F. Scott Fitzgerald");

// Display available books
library.displayAvailableBooks();

// Borrowing a book
library.borrowBook("1984");

// Trying to borrow an unavailable book
library.borrowBook("1984");

// Returning a book
library.returnBook("1984");

// Display available books after returning
library.displayAvailableBooks();
