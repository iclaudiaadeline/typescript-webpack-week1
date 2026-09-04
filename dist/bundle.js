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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay13ZWVrMS8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gVGFzayAyOiBCb29rIGNsYXNzIHdpdGggdHlwZWQgcHJvcGVydGllc1xudmFyIEJvb2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCB5ZWFyKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgfVxuICAgIHJldHVybiBCb29rO1xufSgpKTtcbi8vIFRhc2sgNTogVHlwZWQgcmV2aWV3cyBhcnJheVxudmFyIHJldmlld3MgPSBbXTtcbi8vIFRhc2sgNCAmIDU6IGFkZFJldmlldyBmdW5jdGlvbiB3aXRoIHR5cGUgYW5ub3RhdGlvbnNcbmZ1bmN0aW9uIGFkZFJldmlldyhib29rSWQsIHJhdGluZywgY29tbWVudCkge1xuICAgIHZhciByZXZpZXcgPSB7XG4gICAgICAgIGJvb2tJZDogYm9va0lkLFxuICAgICAgICByYXRpbmc6IHJhdGluZyxcbiAgICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICB9O1xuICAgIHJldmlld3MucHVzaChyZXZpZXcpO1xufVxuLy8gVGFzayAxOiBUeXBlIGFubm90YXRpb25zIG9uIGRpc3BsYXlCb29rIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlXG5mdW5jdGlvbiBkaXNwbGF5Qm9vayhib29rKSB7XG4gICAgdmFyIGJvb2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rLWxpc3RcIik7XG4gICAgdmFyIGJvb2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvb2tEaXYuaW5uZXJIVE1MID0gXCJcXG4gICAgPGgyPlwiLmNvbmNhdChib29rLnRpdGxlLCBcIjwvaDI+XFxuICAgIDxwPkJ5IFwiKS5jb25jYXQoYm9vay5hdXRob3IsIFwiLCBcIikuY29uY2F0KGJvb2sueWVhciwgXCI8L3A+XFxuICBcIik7XG4gICAgYm9va0xpc3QuYXBwZW5kQ2hpbGQoYm9va0Rpdik7XG59XG4vLyBDcmVhdGUgc29tZSBib29rIG9iamVjdHNcbnZhciBib29rMSA9IG5ldyBCb29rKFwiVGhlIEhvYmJpdFwiLCBcIkouUi5SLiBUb2xraWVuXCIsIDE5MzcpO1xudmFyIGJvb2syID0gbmV3IEJvb2soXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3NcIiwgXCJKLlIuUi4gVG9sa2llblwiLCAxOTU0KTtcbi8vIEFkZCBhIHNhbXBsZSByZXZpZXdcbmFkZFJldmlldygxLCA1LCBcIkEgdGltZWxlc3MgY2xhc3NpYyFcIik7XG5hZGRSZXZpZXcoMiwgNCwgXCJBbiBlcGljIHRhbGUgb2YgYWR2ZW50dXJlIGFuZCBmcmllbmRzaGlwLlwiKTtcbi8vIERpc3BsYXkgdGhlIGJvb2tzIG9uIHRoZSB3ZWJwYWdlXG5kaXNwbGF5Qm9vayhib29rMSk7XG5kaXNwbGF5Qm9vayhib29rMik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=