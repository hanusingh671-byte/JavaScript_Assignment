// Name: Shubhankar Singh | ID: BCS2025390 | Assignment 7 | Task 2
class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }

  summary() {
    return this.title + " has " + this.pages + " pages";
  }
}

const book = new Book("Algorithms", 320);
console.log(book.summary());
