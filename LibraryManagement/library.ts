class books{
    bookId:number;
    bookName:string;
    author:string;
    price:number;
    publicationYear:number;

    constructor(bookId:number, bookName:string, author:string, price:number, publicationYear:number){
        this.bookId=bookId;
        this.bookName=bookName;
        this.author=author;
        this.price=price;
        this.publicationYear=publicationYear;
    }
}

class authors{
        authorName:string;
        age:number;
        phone:string;

        constructor(authorName:string, age:number, phone:string){
            this.authorName=authorName;
            this.age=age;
            this.phone=phone;
        }
    }
class member{
    memberId:number;
    memberName:string;
    memeberAge:number;
    phone:string;
    booksRead:string[];

    constructor(memberId:number, memberName:string, memeberAge:number, phone:string, booksRead:books[]){
        this.memberId=memberId;
        this.memberName=memberName;
        this.memeberAge=memeberAge;
        this.phone=phone;
        this.booksRead=booksRead.map(book=>book.bookName);
    }
}

let allbooks:books[] = [
    new books(101, "Book 1", "Author 1", 100, 2001),
    new books(102, "Book 2", "Author 2", 200, 2005),
    new books(103, "Book 3", "Author 3", 300, 2001),
    new books(104, "Book 4", "Author 1", 400, 2015),
    new books(105, "Book 5", "Author 1", 500, 2001),
    new books(106, "Book 6", "Author 2", 600, 2024),

];

let allAuthors:authors[] = [
    new authors("Author 1", 30, "9876543210"),
    new authors("Author 2", 40, "9876543211"),
    new authors("Author 3", 50, "9876543212"),];

let allMembers:member[] = [
    new member(1, "Member 1", 25, "9876543210", allbooks.slice(0,2)),
    new member(2, "Member 2", 30, "9876543211", allbooks.slice(1,3)),
    new member(3, "Member 3", 35, "98787977687", allbooks.slice(2,5))];

function getBookByAuthor(author: string)
{
    let booksByAuthor: books[] = allbooks.filter(book => book.author === author);
    return booksByAuthor;
}

function getBooksbypublicationYear(year:number)
{
    let booksByYear:books[]=allbooks.filter(b =>b.publicationYear==year);
    return booksByYear;
}
function getBooksByBookId(bookId:number)
{
    let bookbyId:books[]=allbooks.filter(b =>b.bookId==bookId);
    return bookbyId;
}

function getBooksByBookName(bookName:string)
{
    let booksByName:books[]=allbooks.filter(b =>b.bookName==bookName);
    return booksByName;
}


//console.log(getBookByAuthor("Author 1"));
//console.log(getBooksbypublicationYear(2001));
//console.log(getmemebersByBooksRead("Book 2"));





