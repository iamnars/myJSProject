let cards = [] //ordered list
let sum = 0
let hasBJ = false
let isAlive = false
let message = ""
let messageEl =  document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector(".sum-el") //when calling a class
let cardsEl = document.getElementById("cards-el")

let player = {
     playerName: "Per",
     playerChips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.playerName + ": $" + player.playerChips

function startGame(){
    cards = []
    sum = 0
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    isAlive = true
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i< cards.length; i++){
        sum += cards[i]
        cardsEl.textContent += cards[i] + " "
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
   if(isAlive === true && hasBJ ===false){
    sum = 0
    cards.push(getRandomCard())
    renderGame()
   }
   
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




