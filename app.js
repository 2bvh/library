let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if(read){
            readString = "read";
        } else {
            readString = "not read";
        }
      return this.title+" by "+this.author+", "+this.pages+" pages, "+this.readString;
    }
}

function addBookToLibrary() {
    let title = prompt("Book Title:", "The Hobbit");
    let author = prompt("Author:", "JRR Tolkien");
    let pages = prompt("Number of Page:", 298);
    let read = prompt("Have you read it?", true);

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    render();
}

function changeReadStatus(index){
    myLibrary[index].read = !myLibrary[index].read;
    render();
}

function removeBook(index){
    myLibrary.pop(index);
    render();
}

function render() {
    let table = document.getElementById('table-body');
    table.innerHTML = "";
    for(let i=0; myLibrary.length; i++){
        let row = table.insertRow();
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let read = row.insertCell(3);
        let delButton = row.insertCell(4);
        let readButton = row.insertCell(5);

        title.innerHTML = myLibrary[i].title;
        author.innerHTML = myLibrary[i].author;
        pages.innerHTML = myLibrary[i].pages;
        read.innerHTML = myLibrary[i].read;
        delButton.innerHTML = "<button class='delButton'>Delete</button>";
        readButton.innerHTML = "<button class='readButton'>Read</button>";
    };
};