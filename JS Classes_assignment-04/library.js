"use strict";

/**
 * Q3: Library Management System
 * Manages books, issue/return procedures, and ISBN lookups using OOP principles.
 */

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`Book "${this.title}" is already issued.`);
            return false;
        }
        this.isIssued = true;
        console.log(`Success: "${this.title}" has been issued.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`Book "${this.title}" was not checked out.`);
            return false;
        }
        this.isIssued = false;
        console.log(`Success: "${this.title}" has been returned.`);
        return true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayAvailableBooks() {
        const available = this.books.filter(book => !book.isIssued);
        console.log("=== Available Books ===");
        if (available.length === 0) {
            console.log("No books currently available.");
        } else {
            available.forEach(b => console.log(`- "${b.title}" by ${b.author} [ISBN: ${b.ISBN}]`));
        }
    }

    issueBookByISBN(isbn) {
        const book = this.books.find(b => b.ISBN === isbn);
        if (!book) {
            console.log(`Error: Book with ISBN ${isbn} not found in library.`);
            return;
        }
        book.issueBook();
    }
}

const myLibrary = new Library();
myLibrary.addBook(new Book("The Alchemist", "Paulo Coelho", "978-0061122415"));
myLibrary.addBook(new Book("Clean Code", "Robert C. Martin", "978-0132350884"));
myLibrary.addBook(new Book("JavaScript: The Good Parts", "Douglas Crockford", "978-0596517748"));

myLibrary.displayAvailableBooks();

console.log("\n--- Issuing Book (ISBN: 978-0132350884) ---");
myLibrary.issueBookByISBN("978-0132350884");

console.log("\n--- Updated Available Books ---");
myLibrary.displayAvailableBooks();
