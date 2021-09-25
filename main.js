let showAddSection = document.querySelector("#book-btn");
let addBookSection = document.querySelector(".add-book");
let addBookInfo = document.querySelector("#add-book-info")


showAddSection.addEventListener('click',()=>{
 addBookSection.style.display = 'flex'
});

addBookInfo.addEventListener('click', ()=>{
    addBookSection.style.display = 'none'
})