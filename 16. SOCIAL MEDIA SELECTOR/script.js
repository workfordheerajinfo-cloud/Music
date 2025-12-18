const selectfield=document.querySelector("#selectField")
const selectText=document.querySelector("#selectText")

const arrowIcon=document.querySelector("#arrowIcon")
const list=document.querySelector("#list")
const options=document.querySelectorAll(".options")

console.log(selectfield)
console.log(selectText)
console.log(arrowIcon)
console.log(list)
console.log(options)

selectfield.addEventListener("click",()=>{
    list.classList.toggle("hide")
    arrowIcon.classList.toggle("rotate")
});

for (option of options){
    option.onclick=function(){
        selectText.innerHTML=this.textContent
    }
}




