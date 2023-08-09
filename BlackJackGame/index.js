let firstCard = 0
let secondCard = 0
let cards = [firstCard, secondCard] //ordered list
let sum = firstCard + secondCard
let hasBJ = false
let isAlive = true
let message = ""
let messageEl =  document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector(".sum-el") //when calling a class
let cardsEl = document.getElementById("cards-el")

function startGame(){
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBJ = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    cards.push(getRandomCard())
    sum += cards[cards.length -1]
    renderGame()
    cardsEl.textContent += " " + cards[cards.length -1]
}

function getRandomCard(){
    let num = Math.floor(Math.random() * 14) + 1
     if(num > 10){
        num = 10
    } else if(num === 1){
        num = 11
    }
    return num
}




