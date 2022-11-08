let homeNum = document.getElementById("home-num")
let guestNum = document.getElementById("guest-num")

let homeScore = 0
let guestScore = 0

function plusOne(){
    homeScore+=1
    homeNum.textContent = homeScore
}

function plusTwo(){
    homeScore+= 2
    homeNum.textContent = homeScore
}

function plusThree(){
    homeScore+= 3
    homeNum.textContent = homeScore
}

function plusOneG(){
    guestScore+= 1
    guestNum.textContent = guestScore
}

function plusTwoG(){
    guestScore+=2
    guestNum.textContent = guestScore
}

function plusThreeG(){
    guestScore+= 3
    guestNum.textContent = guestScore
}

function reset(){
    guestNum.textContent = 0
    homeNum.textContent = 0
}