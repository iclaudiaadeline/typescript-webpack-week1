/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

// A  Book class 
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return Book;
}());
var reviews = [];
function addReview(bookId, rating, comment) {
    var review = {
        bookId: bookId,
        rating: rating,
        comment: comment,
    };
    reviews.push(review);
}
// Function to display book information
function displayBook(book) {
    var bookList = document.getElementById("book-list");
    var bookDiv = document.createElement("div");
    bookDiv.innerHTML = "\n    <h2>".concat(book.title, "</h2>\n    <p>By ").concat(book.author, ", ").concat(book.year, "</p>\n  ");
    bookList.appendChild(bookDiv);
}
// Create some book objects
var book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
var book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
addReview(1, 5, "A timeless classic!");
addReview(2, 4, "An epic tale of adventure and friendship.");
// Display the books on the webpage
displayBook(book1);
displayBook(book2);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay13ZWVrMS8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQSAgQm9vayBjbGFzcyBcbnZhciBCb29rID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgeWVhcikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIH1cbiAgICByZXR1cm4gQm9vaztcbn0oKSk7XG52YXIgcmV2aWV3cyA9IFtdO1xuZnVuY3Rpb24gYWRkUmV2aWV3KGJvb2tJZCwgcmF0aW5nLCBjb21tZW50KSB7XG4gICAgdmFyIHJldmlldyA9IHtcbiAgICAgICAgYm9va0lkOiBib29rSWQsXG4gICAgICAgIHJhdGluZzogcmF0aW5nLFxuICAgICAgICBjb21tZW50OiBjb21tZW50LFxuICAgIH07XG4gICAgcmV2aWV3cy5wdXNoKHJldmlldyk7XG59XG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IGJvb2sgaW5mb3JtYXRpb25cbmZ1bmN0aW9uIGRpc3BsYXlCb29rKGJvb2spIHtcbiAgICB2YXIgYm9va0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2stbGlzdFwiKTtcbiAgICB2YXIgYm9va0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9va0Rpdi5pbm5lckhUTUwgPSBcIlxcbiAgICA8aDI+XCIuY29uY2F0KGJvb2sudGl0bGUsIFwiPC9oMj5cXG4gICAgPHA+QnkgXCIpLmNvbmNhdChib29rLmF1dGhvciwgXCIsIFwiKS5jb25jYXQoYm9vay55ZWFyLCBcIjwvcD5cXG4gIFwiKTtcbiAgICBib29rTGlzdC5hcHBlbmRDaGlsZChib29rRGl2KTtcbn1cbi8vIENyZWF0ZSBzb21lIGJvb2sgb2JqZWN0c1xudmFyIGJvb2sxID0gbmV3IEJvb2soXCJUaGUgSG9iYml0XCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTkzNyk7XG52YXIgYm9vazIgPSBuZXcgQm9vayhcIlRoZSBMb3JkIG9mIHRoZSBSaW5nc1wiLCBcIkouUi5SLiBUb2xraWVuXCIsIDE5NTQpO1xuYWRkUmV2aWV3KDEsIDUsIFwiQSB0aW1lbGVzcyBjbGFzc2ljIVwiKTtcbmFkZFJldmlldygyLCA0LCBcIkFuIGVwaWMgdGFsZSBvZiBhZHZlbnR1cmUgYW5kIGZyaWVuZHNoaXAuXCIpO1xuLy8gRGlzcGxheSB0aGUgYm9va3Mgb24gdGhlIHdlYnBhZ2VcbmRpc3BsYXlCb29rKGJvb2sxKTtcbmRpc3BsYXlCb29rKGJvb2syKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==