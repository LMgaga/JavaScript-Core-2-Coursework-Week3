
function readingList(books) {
   // Write your code here...
  let myElement = document.querySelector("#content");
  books.forEach((book) => {
  let paragraph = document.createElement("p");
  paragraph.innerText = book.title;
  myElement.appendChild(paragraph);


  let image = document.createElement("img");
  image.src = book.bookCoverImage;
  myElement.appendChild(image);
  

if (book.alreadyRead) {
  myElement.style.backgroundColor = "green";
}
  
 });
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

readingList(books);