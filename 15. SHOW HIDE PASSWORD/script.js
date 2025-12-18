const input=document.querySelector("input")
const EyeIcon=document.querySelector("#eye-icon")
console.log(input)
console.log(EyeIcon)

EyeIcon.addEventListener("click",()=>{
    // if(input.type==="password"){
    //     input.type="text"
    // }
    // else{
    //     input.type="password"
    // }

    input.type==="password"?(input.type="text"):(input.type="password");
})