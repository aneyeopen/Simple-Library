const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, true);
const theGobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);

let libraryArray = [theHobbit, theGobbit];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function libraryTotals() {
    const booksRead = document.querySelector('#books-read');
    const booksTotal = document.querySelector('#books-total');
    let readCount = 0;
    let totalCount = 0;
    booksRead.textContent = `Books Read: ${readCount}`;
    booksTotal.textContent = `Total Books ${totalCount}`;
    for (let i = 0; i <libraryArray.length; i += 1) {
        if (libraryArray[i].read === true) {
            readCount += 1;
            booksRead.textContent = `Books Read: ${readCount}`;
        }
    }
    booksTotal.textContent = `Total Books: ${libraryArray.length}`;
}

var form = document.querySelector("form");
form.onsubmit = function(){
    author = document.getElementById("author").value;
}

function addToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

}

function showLibrary() {


    const bookList = document.querySelector('#table-body');
    bookList.textContent = '';
    for (let i = 0; i < libraryArray.length; i += 1) {
        const bookRow = document.createElement('tr');
        bookList.appendChild(bookRow);
        // book title //
        const bookTitle = document.createElement('td');
        bookTitle.textContent = libraryArray[i].title;
        bookRow.appendChild(bookTitle);
        // book author //
        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = libraryArray[i].author;
        bookRow.appendChild(bookAuthor);
        // book pages //
        const bookPages = document.createElement('td');
        bookPages.textContent = libraryArray[i].pages;
        bookRow.appendChild(bookPages);
        // read checkbox //
        const bookRead = document.createElement('td');
        
        if (libraryArray[i].read === false) {
            var statusIMG  = document.createElement('img');
            statusIMG.src = './resources/close-circle.png';
        } else {
            var statusIMG  = document.createElement('img');
            statusIMG.src = './resources/checkbox-marked-circle.png';
        }
        bookRead.appendChild(statusIMG);
        bookRow.appendChild(bookRead);

        const bookDelete = document.createElement('td');
        var removeIMG  = document.createElement('img');
            removeIMG.src = './resources/trash-can.png';
        bookDelete.appendChild(removeIMG);
        bookRow.appendChild(bookDelete);
    }
}



libraryTotals();
showLibrary();

