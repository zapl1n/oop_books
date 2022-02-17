// UI and LS object
const ui = new UI()
const ls = new LS()

// event elements
const form = document.querySelector('form');
const booksList = document.querySelector('#books-list');

// events
form.addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', getBooks);
booksList.addEventListener('click', delBook);

function delBook(event){
    if(event.target.textContent === 'X'){
        if(confirm('Do you want to delete this book?')){
            // console.log(event.target.parentElement.parentElement)
            let isbn = event.target.parentElement.previousElementSibling.textContent;
            // console.log(isbn);
            let author = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;
            // console.log(author);
            let title = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            // console.log(title);
            let book = new Book(title, author, isbn);
            // console.log('Book to delete: ', book);
            // ui has event to be able to use target
            ui.delBook(event);
            ls.delBook(book);
        }
    }
}

function getBooks(){
    let books = ls.getData('books')
    for(let i = 0; i < books.length; i++) {
        let book = books[i];
        ui.addBook(book)
    }
}

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // create book
    const book = new Book(title, author, isbn)
    // add book value to visual by UI object
    ui.addBook(book)
    // add book to LS
    ls.addBook(book)

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault();
}