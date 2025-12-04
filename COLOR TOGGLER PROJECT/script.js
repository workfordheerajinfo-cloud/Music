let toggler = document.getElementById("switch")

console.log(toggler)

toggler.addEventListener("click",()=>{
    // console.log(toggler.checked)
    if(toggler.checked===true){
            document.body.style.backgroundColor = "black";

    }else{
        document.body.style.backgroundColor="white";
    }

})

