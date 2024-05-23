let points = 0
let tracker = document.getElementById("tracker")
let camera = document.getElementById("camera")
let cameraOwned = document.getElementById("cameraOwned")
let computer = 0
let computerOwned = document.getElementById("computerOwned")
let strorge = document.getElementById("storage")


function increaseMoney() {
    points = points + 2000

    tracker.innerText = points.toFixed(2) + " Dollars"
}

function buyCamera () {
     if(points >=4000) {
        points = points - 4000
        tracker.innerText = points + ' Dollars'
        camera = camera + 1 
        cameraOwned.innerText = 'Cameras Owned: ' + camera
        } else {
            alert("You Broke My GUY GET A JOB")

     }
}




function buycomputer () {
    if(points >=4000) {
       points = points - 4000
       tracker.innerText = points + ' Dollars'
       computer = computer + 1 
       computerOwned.innerText = 'computers Owned: ' + computer
       } else {
           alert("You Broke My GUY GET A JOB")

    }
}


function gameloop() {
    points = points + (200 * camera)
    tracker.innerText = points.toFixed(2) + '$ Dollars'
}

setInterval (gameloop, 1000)