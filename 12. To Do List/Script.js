// Getting Element from the Dom

let form=document.querySelector('form')
let input=document.querySelector('input')
let todos=document.querySelector('.todos')

function getTodo(value){
    //creating New Elements
    let todo=document.createElement("div")
    let textEI=document.createElement('span')

    // Setting values & styles
    textEI.innerHTML=value;

    //Append our element to the DOM
    todo.appendChild(textEI);

    let closeEI=document.createElement("span");
    closeEI.innerHTML="&times;"
    closeEI.classList.add("delete");

    //Attach Events
    closeEI.addEventListener("click", function(e){
        todos.removeChild(todo)
    })

    todo.appendChild(closeEI);
    todo.classList.add("todo");
    return todo;


    



}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let value=input.value;
    if(!value.trim()) return;
    todos.appendChild(getTodo(value));
    input.value="";
})