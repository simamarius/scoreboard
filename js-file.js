let homeScore = document.getElementById("home-score")
let homebtnOne = document.getElementById("home-btn-one")
let count = 0


function homebtn1()
{
    count += 1
    homeScore.textContent = count
}

function homebtn2()
{
    count += 2
    homeScore.textContent = count
}

function homebtn3()
{
    count += 3
    homeScore.textContent = count
}

function newGame()
{
    count = 0
    homeScore.textContent = count 
    guest = 0
    guestScore.textContent = count
}

let guestScore = document.getElementById("guest-score")
let guestbtnOne = document.getElementById("guest-btn-one")
let guest = 0

function add1()
{
    guest += 1
    guestScore.textContent = guest
}

function add2()
{
    guest += 2
    guestScore.textContent = guest
}

function add3()
{
    guest += 3
    guestScore.textContent = guest
}