const allLables = document.querySelectorAll(".form-control label");

allLables.forEach((label) => {
    // why assign something to itself, isn't it useless...take the current label text(email) transform it and put it back...
  label.innerHTML = label.innerHTML  //the word email became now string "Email".
    .split("")  // this split words into letters..
    // "Email" = ["E","m","a","i","l"]
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});



