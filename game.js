let points = 0
let tracker = document.getElementById("tracker")
let camera = document.getElementById("camera")
let cameraCost = document.getElementById("cameraCost")
let cameraOwned = document.getElementById("cameraOwned")
let computer = 0
let computerOwned = document.getElementById("computerOwned")
let computerCost = document.getElementById("computerCost")
let storage  =0
let strorge = document.getElementById("storage")
let storageCost = document.getElementById("storageCost")
let Headphones = 0
let headphones = document.getElementById("headphones")
let headphonesOwned = document.getElementById("headphonesOwned")
let headphonesCost = document.getElementById("headphonesCost")






function increaseMoney() {
    points = points + 200

    tracker.innerText = points.toFixed(2) + "$ Dollars"
}


function buyCamera () {
    let cost = 400 + camera ** 5  
     if(points >=cost) {
        points = points - cost
        tracker.innerText = points.toFixed(2) + '$ Dollars'
        camera = camera + 1 
        cameraOwned.innerText = 'Cameras Owned: ' + camera
        cost = 400 + camera ** 5
        cameraCost.innerText = cost.toFixed(0) + "$ Dollars"
        } else {
            alert("You Broke My GUY GET A JOB")

     }
}

function buycomputer () {
    let cost = 1500 + computer ** 5  
    if(points >=cost) {
       points = points - cost
       tracker.innerText = points.toFixed(2) + '$ Dollars'
       tracker.innerText = points + ' Dollars'
       computer = computer + 1 
       computerOwned.innerText = 'Computers Owned: ' + computer
       cost = 1500 + computer ** 5
       computerCost.innerText = cost.toFixed(0) + "$ Dollars"
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
    if ( points >=120){
        points = points - 120
        tracker.innerText = points + 'Dollars'
        headphones = headphones +  1
        headphonesOwned.innerText = 'headphones Owned;  ' + headphones
        } else {
         alert("You Broke My GUY GET A JOB")    
    }
}

function gameloop() {
    points = points + (5 * camera)
    points = points + (20 * computer)
    points = points + (20 * storage)
    points = points + (2 * headphones)
    tracker.innerText = points.toFixed(2) + '$ Dollars'
}
setInterval (gameloop, 1000)

