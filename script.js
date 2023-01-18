
let libraryArray = [];

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


function addToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    libraryArray.push(book);
}

function showLibrary() {

    libraryTotals();
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
            removeIMG.classList.add('remove-book');
        bookDelete.appendChild(removeIMG);
        bookRow.appendChild(bookDelete);
    }
}

function formValidation(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const checkbox = document.getElementById('switch');
    
    if (checkbox.checked) {
        addToLibrary(title.value, author.value, pages.value, true);
    } else {
        addToLibrary(title.value, author.value, pages.value, false);
    }
    form.reset();
}

function clickListen() {
    document.addEventListener('click', (event) => {
        const { target } = event;
        const tr = target.parentNode.parentNode.rowIndex - 1;
        if (target.id === 'submit') {
            formValidation(event);
        }else if (target.id === 'remove-all'){
            libraryArray = [];
        }else if (target.classList.contains('remove-book')) {
            libraryArray.splice(tr, 1);
        }
        showLibrary();
        
    })
}

showLibrary();
clickListen();

