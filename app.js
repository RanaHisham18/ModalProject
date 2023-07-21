//buttons and containers
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

//function on btn open modal
modalBtn.addEventListener("click", function(){
modal.classList.add("open-modal");
});

//function on close btn to close modal
closeBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal");
    
});