const responseBox = document.getElementById("responseTextBox")
responseBox.textContent = "Chose your move!"
const yourPlay = document.getElementById("yourPlay")
const computerPlay = document.getElementById("computerPlay")

const rockImg = new Image()
rockImg.src = "rock.png"
let rockValue = 0

const paperImg = new Image()
paperImg.src = "paper.png"
let paperValue = 1

const scissorsImg = new Image()
scissorsImg.src = "scissors.png"
let scissorsValue = 2

const rockImg2 = new Image()
rockImg2.src = "rock.png"

const paperImg2 = new Image()
paperImg2.src = "paper.png"

const scissorsImg2 = new Image()
scissorsImg2.src = "scissors.png"

let beenClicked = false

document.getElementById("rockBtn").onclick = function () {
    if (beenClicked === false) {
    yourPlay.appendChild(rockImg)
    computerMove()
    responseBox.textContent = ""
    winner()
    beenClicked = true
    } else {
        return
    }
}

document.getElementById("paperBtn").onclick = function () {
    if (beenClicked === false) {
    yourPlay.appendChild(paperImg)
    computerMove()
    responseBox.textContent = ""
    winner()
    beenClicked = true
    } else {
        return
    }
}

document.getElementById("scissorsBtn").onclick = function () {
    if (beenClicked === false) {
        yourPlay.appendChild(scissorsImg)
        computerMove()
        responseBox.textContent = ""
        winner()
        beenClicked = true
    } else {
        return
    }
}


function computerMove() {
    let randomMove = Math.floor(Math.random() * 3);
    if (randomMove === rockValue) {
        computerPlay.appendChild(rockImg2)
    } else if (randomMove === paperValue) {
        computerPlay.appendChild(paperImg2)
    } else if (randomMove === scissorsValue) {
        computerPlay.appendChild(scissorsImg2)
    }
}

function winner () {
    if (yourPlay.firstElementChild === rockImg) {
        if (computerPlay.firstChild === rockImg2) {
            responseBox.textContent = "Draw"
        }
        else if (computerPlay.firstChild === paperImg2) {
            responseBox.textContent = "Lose"
        } else if (computerPlay.firstChild === scissorsImg2) {
            responseBox.textContent = "Win"
        }
    } else if (yourPlay.firstElementChild === paperImg) {
        if (computerPlay.firstChild === rockImg2) {
            responseBox.textContent = "Win"
        }
        else if (computerPlay.firstChild === paperImg2) {
            responseBox.textContent = "Draw"
        } else if (computerPlay.firstChild === scissorsImg2) {
            responseBox.textContent = "Lose"
        }
    } else if (yourPlay.firstElementChild === scissorsImg) {
        if (computerPlay.firstChild === rockImg2) {
            responseBox.textContent = "Lose"
        }
        else if (computerPlay.firstChild === paperImg2) {
            responseBox.textContent = "Win"
        } else if (computerPlay.firstChild === scissorsImg2) {
            responseBox.textContent = "Draw"
        }
    }
}



document.getElementById("resetBtn").onclick = function () {
    yourPlay.firstElementChild.remove()
    computerPlay.firstElementChild.remove()
    beenClicked = false
    responseBox.textContent = "Chose your move!"
}