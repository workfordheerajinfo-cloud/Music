const inputbox=document.getElementById("inputBox");

inputbox.addEventListener("keydown", validate);

function validate(){
    // console.log("Hello world")
    let form = document.querySelector(".mainForm");
    let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if(inputbox.value.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");


    }
    else{
        form.classList.add("invalid");
        form.classList.remove("valid");
    }
    

}