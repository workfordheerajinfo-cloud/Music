const ratings=document.querySelectorAll(".rating");
const ratingsContainer=document.querySelector(".ratings-container");
const sendBtn=document.querySelector("#send");
const panel=document.querySelector("#panel");

let selectRating="Satisfied"

ratingsContainer.addEventListener("click",e=>{
    if(e.target.parentNode.classList.contains("rating")){
        // console.log(e.target.parentNode.classList.contains("rating"))

        // e.target
    
        
        removeActive();
        e.target.parentNode.classList.add("active");
        selectRating=e.target.nextElementSibling.innerHTML;
    }
})

sendBtn.addEventListener("click",()=>{
    panel.innerHTML= `
    <p class="heart"></p>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback:${selectRating}</strong>

    `
})

function removeActive(){
    for(let i=0;i<ratings.length;i++){
        ratings[i].classList.remove("active");
    }
}