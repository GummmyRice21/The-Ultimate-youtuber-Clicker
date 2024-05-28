let points = 0
let tracker = document.getElementById("tracker")
let camera = document.getElementById("camera")
let cameraOwned = document.getElementById("cameraOwned")
let computer = 0
let computerOwned = document.getElementById("computerOwned")
let storage  =0
let strorge = document.getElementById("storage")
let Headphones = 0
let headphones = document.getElementById("headphones")
let headphonesOwned = document.getElementById("headphonesOwned")




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
       computerOwned.innerText = 'Computers Owned: ' + computer
       } else {
           alert("You Broke My GUY GET A JOB")

    }
}

function buystorage () {
    if ( points >=4000){
        points = points - 4000
        tracker.innerText = points + 'Dollars'
        storage = strorge +  1
        storageOwned.innerText = 'storage Owned;  ' + storage
        } else {
         alert("You Broke My GUY GET A JOB")    
    }
}

function buyheadphones () {
    if ( points >=4000){
        points = points - 4000
        tracker.innerText = points + 'Dollars'
        headphones = headphones +  1
        headphonesOwned.innerText = 'headphones Owned;  ' + headphones
        } else {
         alert("You Broke My GUY GET A JOB")    
    }
}

function gameloop() {
    points = points + (200 * camera)
    points = points + (200 * computer)
    points = points + (200 * storage)
    points = points + (200 * headphones)
    tracker.innerText = points.toFixed(2) + '$ Dollars'
}
// setInterval (gameloop, 1000)

// function gameloop() {
//     points = points + (200 * Computer)
//     tracker.innerText = points.toFixed(2) + '$ Dollars'
// }
// setInterval (gameloop, 1000)

// function gameloop() {
//     points = points + (200 * storage)
//     tracker.innerText = points.toFixed(2) + '$ Dollars'
// }
// setInterval (gameloop, 1000)

// function gameloop() {
//     points = points + (200 * Headphones)
//     tracker.innerText = points.toFixed(2) + '$ Dollars'
// }
setInterval (gameloop, 1000)