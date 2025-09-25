const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container")
 function addTask(){
    // if the input box is empty then it should give the message you must write something.. now if we write anything in the search box then it will go to the else container...
    if(inputBox.value==''){
        alert("You must write Something");
    }
    else{
        
        let li=document.createElement("li"); // in this line it is creating one Html element with with the tag name Li document...it is storing this element in this li variable..
        li.innerHTML=inputBox.value;// now in this li we have to add the text also so what will be detect the text that we have added in the input field so in this one we're adding li.innerhtml that is the text inside li here we are adding inputBox.value so whatever text we will add in the input field that will be added in this li..now we have to display this li...so where this li should display..
        listcontainer.appendChild(li); // so this li should be display under this list container... so we are adding the listcontainer.appendchild so this li will be displaced under this list container...



        let span=document.createElement ("span");  // next we've to add one more thing we have to one cross icon at the end of this list that can be used to delete this particular task...
        span.innerHTML="\u00d7"
        li.appendChild(span);  // to display the span tag...
    }
    // right now you can see this hello is still displaying in this field so we have to clear this input field after adding the text..
    inputBox.value = '';
    saveData();


   
 }

 // so here we've added addEventListner clicks so whenever we will click in the container where we have stored all the tasks , first it will check where we've clicked

 listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){  // if we have clicked on Li then it should add the checked class name and if the checked class name is already there it will remove that because we've added classList.toggle from the targetelement... if the clicked target element is Li...
        e.target.classList.toggle("checked");
        // saveData will be called here also when we check or uncheck the task then also we'll call this saveData...
        saveData();
    }
    else if(e.target.tagName==="SPAN"){   //   now if the click target element is a span if we've clicked on a span then it will delete the parentElement , here we're adding parentElement remove , so the parent element is the Li element so it will remove that Li so the task will be deleted..

        e.target.parentElement.remove();
        // we'll call saveData here also when we delete the data..
        saveData();
    }
 },false);

 // so whenever we refresh or close the browser and open the browser again it will be disappeared so we've to store these task in our browser so that whenever we'll open the browser again our task list or to-do-list will be displayed as it is.. so let's here we'll create one function and let's add the function name saveData.. 

 function saveData(){
    // In this one we'll add localstorage.setItem and in this setitem we've to add the name so let's add the name data after that we've to add the value that we want to save in our browser so  we have to save the entire content which is here in this listcontainer so let's add listcontainer , so whatever content is there in the listcontainer that will be stored in our browser with the name of data and we can display this one using the getitem data local storage get item data, next we have to call this saveData every time we will add any changes , so whenever we'll add any new task it should call this save data to save the new data in hte browser.. so whenever we'll add new task saveData will be called and it will save the data...
    localStorage.setItem("data", listcontainer.innerHTML);

 }

 // next we've to display this data whenever we'll open the website again.. so to do that let's create one function here that is showtask .. in that one we'll add the list container.innerhtml equal to localstorage.getitem and the getitem is data... so it will give  all the content stored in the browser with the name of data.. next we have to call simply call this function...

 function showtask(){
     listcontainer.innerHTML=localStorage.getItem("data")
 }

 showtask();