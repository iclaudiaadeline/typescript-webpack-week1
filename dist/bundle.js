/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

// Task 2: Book class with typed properties
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return Book;
}());
// Task 5: Typed reviews array
var reviews = [];
// Task 4 & 5: addReview function with type annotations
function addReview(bookId, rating, comment) {
    var review = {
        bookId: bookId,
        rating: rating,
        comment: comment,
    };
    reviews.push(review);
}
// Task 1: Type annotations on displayBook parameters and return type
function displayBook(book) {
    var bookList = document.getElementById("book-list");
    if (!bookList)
        return;
    var bookDiv = document.createElement("div");
    bookDiv.innerHTML = "\n    <h2>".concat(book.title, "</h2>\n    <p>By ").concat(book.author, ", ").concat(book.year, "</p>\n  ");
    bookList.appendChild(bookDiv);
}
// Create some book objects
var book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
var book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
// Add a sample review
addReview(1, 5, "A timeless classic!");
addReview(2, 4, "An epic tale of adventure and friendship.");
// Display the books on the webpage
displayBook(book1);
displayBook(book2);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2std2VlazEvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIFRhc2sgMjogQm9vayBjbGFzcyB3aXRoIHR5cGVkIHByb3BlcnRpZXNcbnZhciBCb29rID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgeWVhcikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIH1cbiAgICByZXR1cm4gQm9vaztcbn0oKSk7XG4vLyBUYXNrIDU6IFR5cGVkIHJldmlld3MgYXJyYXlcbnZhciByZXZpZXdzID0gW107XG4vLyBUYXNrIDQgJiA1OiBhZGRSZXZpZXcgZnVuY3Rpb24gd2l0aCB0eXBlIGFubm90YXRpb25zXG5mdW5jdGlvbiBhZGRSZXZpZXcoYm9va0lkLCByYXRpbmcsIGNvbW1lbnQpIHtcbiAgICB2YXIgcmV2aWV3ID0ge1xuICAgICAgICBib29rSWQ6IGJvb2tJZCxcbiAgICAgICAgcmF0aW5nOiByYXRpbmcsXG4gICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQsXG4gICAgfTtcbiAgICByZXZpZXdzLnB1c2gocmV2aWV3KTtcbn1cbi8vIFRhc2sgMTogVHlwZSBhbm5vdGF0aW9ucyBvbiBkaXNwbGF5Qm9vayBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZVxuZnVuY3Rpb24gZGlzcGxheUJvb2soYm9vaykge1xuICAgIHZhciBib29rTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vay1saXN0XCIpO1xuICAgIGlmICghYm9va0xpc3QpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgYm9va0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9va0Rpdi5pbm5lckhUTUwgPSBcIlxcbiAgICA8aDI+XCIuY29uY2F0KGJvb2sudGl0bGUsIFwiPC9oMj5cXG4gICAgPHA+QnkgXCIpLmNvbmNhdChib29rLmF1dGhvciwgXCIsIFwiKS5jb25jYXQoYm9vay55ZWFyLCBcIjwvcD5cXG4gIFwiKTtcbiAgICBib29rTGlzdC5hcHBlbmRDaGlsZChib29rRGl2KTtcbn1cbi8vIENyZWF0ZSBzb21lIGJvb2sgb2JqZWN0c1xudmFyIGJvb2sxID0gbmV3IEJvb2soXCJUaGUgSG9iYml0XCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTkzNyk7XG52YXIgYm9vazIgPSBuZXcgQm9vayhcIlRoZSBMb3JkIG9mIHRoZSBSaW5nc1wiLCBcIkouUi5SLiBUb2xraWVuXCIsIDE5NTQpO1xuLy8gQWRkIGEgc2FtcGxlIHJldmlld1xuYWRkUmV2aWV3KDEsIDUsIFwiQSB0aW1lbGVzcyBjbGFzc2ljIVwiKTtcbmFkZFJldmlldygyLCA0LCBcIkFuIGVwaWMgdGFsZSBvZiBhZHZlbnR1cmUgYW5kIGZyaWVuZHNoaXAuXCIpO1xuLy8gRGlzcGxheSB0aGUgYm9va3Mgb24gdGhlIHdlYnBhZ2VcbmRpc3BsYXlCb29rKGJvb2sxKTtcbmRpc3BsYXlCb29rKGJvb2syKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==