// UI and LS objects
const ui = new UI()
const ls = new LS()

// event elements
const form = document.querySelector('form');
const table = document.querySelector("table");


// events
form.addEventListener('submit', addBook);


document.addEventListener('DOMContentLoaded', getBooks);

table.addEventListener('click', deleteBook);



function getBooks(){
    let books = ls.getData('books');
    books.forEach(book =>{
        ui.addBook(book);
    })
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



function deleteBook(event){
    console.log("delbook sees")
    if(event.target.textContent === "X"){
        if(confirm("Do you want to delete this book?")){
            // deletes the book from UI
            ui.deleteBook(event);

            // loll lahendus aga hetkel aju ei suuda moelda kuidas teisiti teha
            let deletedBookISBN = event.target.parentElement.previousElementSibling.textContent;
            let deletedBookAuthor = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;
            let deletedBookTitle = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            ls.deleteBook(deletedBookTitle, deletedBookAuthor, deletedBookISBN);
        }
    }
}


/*
function deleteBook(book){
    let books;
    if(localStorage.getItem(books) === null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem(book."isbn"));
    }
    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
}
}
function deleteBookFromLS(ISBN){

}

function deleteBook(event){
    const tbody = document.querySelector("tbody");
    if(event.target.textContent === "X"){
        if(confirm("Do you want to delete this book?")){
            event.target.parentElement.parentElement.remove()
            let bookISBN = event.target.parentElement.previousElementSibling.textContent;
            deleteBookFromLocalStorage(bookISBN);
            //tbody.removeChild(event.target.parentElement.parentElement);

        }
    }
}


function deleteBookFromLocalStorage(bookISBN){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }

    books.forEach(function (book, index){
        if(book[2] === bookISBN){
            books.splice(index, 1);
        }
    });

    localStorage.setItem('books', JSON.stringify(books));
}

 */