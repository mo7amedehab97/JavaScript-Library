let showAddSection = document.querySelector("#book-btn");
let addBookSection = document.querySelector(".add-book");
let addBookInfo = document.querySelector("#add-book-info");
let contentSec = document.querySelector("#structure")


showAddSection.addEventListener('click',()=>{
 addBookSection.style.display = 'flex'
});

addBookInfo.addEventListener('click', ()=>{
    addBookSection.style.display = 'none'
})



let book = [
    {
        title: "eat pray love",
        url:"https://upload.wikimedia.org/wikipedia/en/c/c4/Eat%2C_Pray%2C_Love_%E2%80%93_Elizabeth_Gilbert%2C_2007.jpg",
        autors: "abo ehab"
    }
]

function createStructure(arr){
    let titleSpan = arr[0].title;
    let authorsSpan = arr[0].autors;

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
newImg.src = arr[0].url;

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
createStructure(book)
