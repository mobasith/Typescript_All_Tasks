var books = /** @class */ (function () {
    function books(bookId, bookName, author, price, publicationYear) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.author = author;
        this.price = price;
        this.publicationYear = publicationYear;
    }
    return books;
}());
var authors = /** @class */ (function () {
    function authors(authorName, age, phone) {
        this.authorName = authorName;
        this.age = age;
        this.phone = phone;
    }
    return authors;
}());
var member = /** @class */ (function () {
    function member(memberId, memberName, memeberAge, phone, booksRead) {
        this.memberId = memberId;
        this.memberName = memberName;
        this.memeberAge = memeberAge;
        this.phone = phone;
        this.booksRead = booksRead.map(function (book) { return book.bookName; });
    }
    return member;
}());
var allbooks = [
    new books(101, "Book 1", "Author 1", 100, 2001),
    new books(102, "Book 2", "Author 2", 200, 2005),
    new books(103, "Book 3", "Author 3", 300, 2001),
    new books(104, "Book 4", "Author 1", 400, 2015),
    new books(105, "Book 5", "Author 1", 500, 2001),
    new books(106, "Book 6", "Author 2", 600, 2024),
];
var allAuthors = [
    new authors("Author 1", 30, "9876543210"),
    new authors("Author 2", 40, "9876543211"),
    new authors("Author 3", 50, "9876543212"),
];
var allMembers = [
    new member(1, "Member 1", 25, "9876543210", allbooks.slice(0, 2)),
    new member(2, "Member 2", 30, "9876543211", allbooks.slice(1, 3)),
    new member(3, "Member 3", 35, "98787977687", allbooks.slice(2, 5))
];
function getBookByAuthor(author) {
    var booksByAuthor = allbooks.filter(function (book) { return book.author === author; });
    return booksByAuthor;
}
function getBooksbypublicationYear(year) {
    var booksByYear = allbooks.filter(function (b) { return b.publicationYear == year; });
    return booksByYear;
}
function getBooksByBookId(bookId) {
    var bookbyId = allbooks.filter(function (b) { return b.bookId == bookId; });
    return bookbyId;
}
function getBooksByBookName(bookName) {
    var booksByName = allbooks.filter(function (b) { return b.bookName == bookName; });
    return booksByName;
}
function getmemebersByBooksRead(bookName) {
    var tempbooks = getBooksByBookName(bookName);
    var memberbybook = allMembers.filter(function (m) { return m.booksRead.includes(bookName); });
    return memberbybook;
}
//console.log(getBookByAuthor("Author 1"));
//console.log(getBooksbypublicationYear(2001));
console.log(getmemebersByBooksRead("Book 2"));
