let count = 0 //initialize variable count
let countEl = document.getElementById("count-el") //pass reference of this element to countEl
let saveEl = document.getElementById("save-el")
function increment(){
    count++
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 //reset count
}