// Task 3: Review interface
interface Review {
  bookId: number;
  rating: number;
  comment: string;
}
// Task 2: Book class with typed properties
class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// Task 5: Typed reviews array
const reviews: Review[] = [];

// Task 4 & 5: addReview function with type annotations
function addReview(bookId: number, rating: number, comment: string): void {
  const review: Review = {
    bookId,
    rating,
    comment,
  };

  reviews.push(review);
}

// Task 1: Type annotations on displayBook parameters and return type
function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");
  const bookDiv = document.createElement("div");
  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
  bookList!.appendChild(bookDiv);
}

// Create some book objects
const book1: Book = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2: Book = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

// Add a sample review
addReview(1, 5, "A timeless classic!");
addReview(2, 4, "An epic tale of adventure and friendship.");

// Display the books on the webpage
displayBook(book1);
displayBook(book2);


