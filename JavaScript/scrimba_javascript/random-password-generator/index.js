const characters = [
  // Uppercase letters
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

  // Lowercase letters
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",

  // Numbers
  "0","1","2","3","4","5","6","7","8","9",

  // Symbols
  "~","`","!","@","#","$","%","^","&","*",
  "(",")","-","_","=","+","[","]","{","}",
  "|",";",":","'","\"","<",">",",",".","?",
  "/","\\"
];

let myLeads = ["www.awesomelead.com","www.epiclead.com","www.greatlead.com"]

const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

saveBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
 
})
 for (let i = 0 ; i < myLeads.length; i++){
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
