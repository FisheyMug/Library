const shelf = document.getElementById('shelf')
const addButton = document.getElementById('add')
const title = document.getElementById('title')
const author = document.getElementById('author')
const page = document.getElementById('page')
const delButton = document.getElementById('delete')

let numOfBooks = 0;

function clearForm () {
    title.value = ''
     author.value = ''
     page.value = ''
    
    
}

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
    constructor(title, author, page, status) {
        this.title = title;
        this.author = author;
        this.page = page
        this.status = status
        this.location = ""
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

Book.prototype.putOnShelf = function() {
    for (i = 0; i < library.length; i++) {
        library[i].location = i;
    }
    const newDiv = document.createElement("div");
    newDiv.id = this.title;
    newDiv.dataLocation = this.location;
    newDiv.dataStatus = this.status;

    const readButton = document.createElement("button")
    readButton.innerHTML="Read/Unread"
    readButton.id="read/unread"
    readButton.onclick = function() {
        library.forEach(book => {
            book.readCheck()
        })
        display()
    }

    const button = document.createElement("button")
    button.id = "delete"
    button.innerHTML= "Delete"
    button.onclick = function() {
        library.splice(newDiv.dataLocation, 1)
        for (i = 0; i < library.length; i++) {
            library[i].location = i;
        }
        display()
    }


    newDiv.innerHTML = 'Title: ' + this.title +
        '<br> Author: ' +  this.author + '<br>Pages: ' +
        this.page + '<br>Status: ' + this.status;

    newDiv.appendChild(readButton)
    newDiv.appendChild(button)
    
    shelf.appendChild(newDiv)
}

Book.prototype.readCheck = function() {
        console.log(this.status)
        if (this.status === "Read") {
            this.status= "Un-read"
        } else if (this.status==="Un-read") {
            this.status = "Read"
        }
        display()
}

let mobyDick = new Book 
('Moby Dick' , 'That dude' , 82, 'Un-read' );

library.push(mobyDick)

function addBookToLibrary(book) {
    library.push(book)
}

function input() {
        while (shelf.firstChild) {
        shelf.removeChild(shelf.lastChild)
    }
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let page = document.getElementById("page").value
    let status = document.getElementById("status").value
    addBookToLibrary(new Book(title, author, page, status))
    closeTheForm()
    display()
    clearForm()
}




function display() {
    for (i = 0; i < library.length; i++) {
        library[i].location = i;
    }
    if (library.length !==0) {
        while (shelf.firstChild) {
            shelf.removeChild(shelf.lastChild)
        }
        library.forEach(book => {
            book.putOnShelf(book.title)
        })
    } else shelf.innerHTML = "";
    
}

// let body = document.querySelector('body')
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
   
//     console.log(event.target === body)

//     if (event.target !=form && document.getElementById
//     ('popupForm').style.display === "none") {
//       closeTheForm();
//     }
// }

let form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 


display()
