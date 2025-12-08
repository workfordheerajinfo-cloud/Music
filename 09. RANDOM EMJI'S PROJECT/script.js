let emoji=document.getElementById("emoji");


let emojis=["😊","😂","❤️","😍","😒","😘","😁","😏","😫","🤐","😌","😝", "🤤", "😒","🤑","😲","☹️","🙁", "😖","😞","😟","😤","😦", "😭", "😧", "😦", "😨", "😬", "🤡", "🥸","🥳", "🥹", "🤢"]

emoji.addEventListener("click", ()=>{
    emoji.textContent=emojis[Math.floor(Math.random()*emojis.length)]

})

