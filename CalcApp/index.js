let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let res = document.getElementById("res-el")
function add(){
    res.textContent = "Sum: " + (num1 + num2)
}

function substract(){
    res.textContent = "Difference: " + (num1 - num2)
}

function divide(){
    res.textContent = "Quotient: " + (num1 / num2)
}

function multiply(){
    res.textContent = "Product: " + (num1 * num2)
}