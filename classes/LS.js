class LS {
    // help functions to get and set data at LS
    getData(name) {
        // console.log(book);
        let data;
        if (localStorage.getItem(name) === null) {
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem(name));
        }
        return data
    }
    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data));
    }
    addBook(book) {
        let books = this.getData('books')
        books.push(book);
        // console.log(books);
        this.setData('books', books)
    }
    delBook(book){
        let books = this.getData('books')
        books.forEach(function (bookInLS, index) {
            if(bookInLS.title === book.title && bookInLS.author === book.author && bookInLS.isbn === book.isbn){
                books.splice(index, 1);
            }
        })

        this.setData('books', books)
    }
}