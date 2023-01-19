const shelf = document.getElementById('shelf')
const addButton = document.getElementById('add')

function openTheForm() {
    document.getElementById
    ('popupForm').style.display = "block"
}

function closeTheForm() {
    document.getElementById
    ('popupForm').style.display = "none"
}

let library = []

class Book {
    constructor(title, author, page) {
        this.title = title;
        this.author = author;
        this.page = page
        this.status = 'Un-read'
    }

    putOnShelf() {
        const newDiv = document.createElement("div");
        const name = document.createTextNode(Book)
        newDiv.innerHTML = 'Title: ' + this.title +
            '<br> Author: ' +  this.author + '<br>Pages: ' +
            this.page + '<br>Status: ' + this.status
        shelf.appendChild(newDiv)
    }

}


// add the methods to the prototype so that 
//methods are shared by all "instances" of Book.
Book.prototype.toString = function(){
    return this.title + ' by ' + this.author + 
    ', is '+ this.page + ' pages long.'
}

Book.prototype.print = function(){
    console.log(this.toString());
}


var mobyDick = new Book 
('Moby Dick' , 'That dude' , 82 );

library.push(mobyDick)

function addBookToLibrary(book) {
    library.push(book)
}



function display() {
    while (shelf.firstChild) {
        shelf.removeChild(shelf.lastChild)
    }

    library.forEach(book => {
        book.putOnShelf(book.title)
    })
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    let body = document.querySelector('body')
    console.log(event.target == body)

    if (event.target == body) {
      closeTheForm();
    }
  }
  
  
