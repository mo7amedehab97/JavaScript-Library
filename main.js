let showAddSection = document.querySelector("#book-btn");
let addBookSection = document.querySelector(".add-book");
let addBookInfo = document.querySelector("#add-book-info");
let contentSec = document.querySelector("#structure")
let bookName = document.getElementById("book-name");
let bookUrl = document.getElementById("book-image");
let bookAuthor = document.getElementById("book-author");
let cancelBtn = document.getElementById("cancel")


// add event to show add book section 
showAddSection.addEventListener('click',()=>{
 addBookSection.style.display = 'flex'
});

// add event to add book 
addBookInfo.addEventListener('click', ()=>{
    addNewBook(bookName,bookAuthor,bookUrl)
    contentSec.textContent =""
    book.forEach((e,i)=>createStructure(book,i))
    addBookSection.style.display = 'none'
    bookAuthor.value = "";
    bookName.value= "";
    bookUrl.value= "";
})

// Add some real books to show them in the main page 
let book = [
    {
        title: "Song of Solomon",
        url:"https://m.media-amazon.com/images/P/B000RMT40I.01._SCLZZZZZZZ_SX500_.jpg",
        autors: "Toni Morrison"
    },
    {
        title: "War and Peace",
        url:"https://m.media-amazon.com/images/P/B00K2J7EQM.01._SCLZZZZZZZ_SX500_.jpg",
        autors: "leo tolstoy"
    },
    {
        title: "Ulysses",
        url:"https://images4.penguinrandomhouse.com/cover/700jpg/9780679722762",
        autors: "James Joyce"
    },
    {
        title: "The Shadow of the Wind",
        url:"https://images3.penguinrandomhouse.com/cover/700jpg/9780143126393",
        autors: "Carlos Ruiz Zafon"
    },
    {
        title: "The Lord of the Rings",
        url:"https://images4.penguinrandomhouse.com/cover/700jpg/9780345339706",
        autors: "J.R.R. Tolkien"
    },
    {
        title: "Don Quixote",
        url:"https://images3.penguinrandomhouse.com/cover/700jpg/9780679407584",
        autors: "Miguel de Cervantes"
    }
]

// create structure function 
function createStructure(arr, index){

    let titleSpan = arr[index].title;
    let authorsSpan = arr[index].autors;

// create the holder div 
let holder = document.createElement("div");
holder.className = "container";

// create the parent div (cards)
let parentDiv = document.createElement("div");
parentDiv.className = "card";

// create image div 
let imageDiv = document.createElement("div");
imageDiv.className = "image-box";

// create image 
let newImg = document.createElement("img")
newImg.src = arr[index].url;

// create content div 
let contentDiv = document.createElement("div");
contentDiv.className= "content";


// create h1 
let createH1 = document.createElement("h1");
createH1.textContent =`Title : ${titleSpan}`

// create h2 
let createH2 = document.createElement("h2");
createH2.textContent =`Author : ${authorsSpan}`

//  make the structure 

holder.appendChild(parentDiv);
parentDiv.appendChild(imageDiv);
parentDiv.appendChild(contentDiv);
imageDiv.appendChild(newImg)
contentDiv.appendChild(createH1);
contentDiv.appendChild(createH2);
console.log(contentDiv)
contentSec.appendChild(holder)
}

// function add book 
function addNewBook(name,author,url){
    let newObj ={
        title: name.value,
        url: url.value,
        autors:author.value
    }
    return book.push(newObj)
}

// loop over the array books and foreach obj create card 
book.forEach((e,i)=>createStructure(book,i))

// add event to cancel button 
cancelBtn.addEventListener('click', ()=>{
    addBookSection.style.display = 'none'
    bookAuthor.value = "";
    bookName.value= "";
    bookUrl.value= "";

})