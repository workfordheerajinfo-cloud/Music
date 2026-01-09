const inputField = document.getElementById("input-field")
const outputField = document.getElementById("output-field")
const button = document.querySelectorAll("button")

inputField.addEventListener("keyup",()=>{
    outputField.textContent=inputField.value

})

button.forEach(btn=>{
    btn.addEventListener("click",()=>{
        if(btn.classList.contains("uppercase")){
            outputField.textContent = outputField.textContent.toUpperCase();
        }
        else if(btn.classList.contains("lowercase")){
            outputField.textContent=outputField.textContent.toLocaleLowerCase();
        }
        else if(btn.classList.contains("capitalize")){
            outputField.textContent=outputField.textContent.charAt(0).toUpperCase()+ outputField.textContent.slice(1).toLowerCase();
        }
        else if(btn.classList.contains("bold")){
            outputField.style.fontWeight="900";
        }
        else if(btn.classList.contains("italic")){
            outputField.style.fontStyle="italic";
        }
        else if(btn.classList.contains("underline")){
            outputField.style.textDecoration="underline"
        }
            
        
    })

})