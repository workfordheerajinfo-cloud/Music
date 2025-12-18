const close= document.getElementById("close")
const open = document.getElementById("open")
const modal = document.getElementById("modal")

console.log(close)
console.log(open)
console.log(modal)

open.addEventListener("click",()=>{
    modal.classList.add("show-modal")



})

close.addEventListener("click",()=>{
    modal.classList.remove("show-modal")
    
})

