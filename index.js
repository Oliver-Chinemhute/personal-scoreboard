let homeCount = document.getElementById("home-score")
let guestCount = document.getElementById("guest-score")
let homeStarcount = 0
let guestStartCount = 0

function incrementHomeOne() {
    homeStarcount += 1
    homeCount.innerText = homeStarcount
}

function incrementHomeTwo(){
    homeStarcount += 2
    homeCount.innerText = homeStarcount
}

function incrementHomeThree(){
    homeStarcount += 3
    homeCount.innerText = homeStarcount

}
function incrementGuestOne(){
    guestStartCount += 1
    guestCount.innerText = guestStartCount
}
function incrementGuestTwo(){
    guestStartCount += 2
    guestCount.innerText = guestStartCount
}
function incrementGuestThree(){
    guestStartCount += 3
    guestCount.innerText = guestStartCount
}



