let points = 0
let tracker = document.getElementById("tracker")
let camera = document.getElementById("camera")
let cameraCost = document.getElementById("cameraCost")
let cameraOwned = document.getElementById("cameraOwned")
let cameraButton = document.getElementById("cameraButton")
let computer = 0
let computerOwned = document.getElementById("computerOwned")
let computerCost = document.getElementById("computerCost")
let computerButton = document.getElementById("computerButton")
let storage  =0
let strorge = document.getElementById("storage")
let storageCost = document.getElementById("storageCost")
let storageButton = document.getElementById("storageButton")
let Headphones = 0
let headphones = document.getElementById("headphones")
let headphonesOwned = document.getElementById("headphonesOwned")
let headphonesCost = document.getElementById("headphonesCost")
let headphonesButton = document.getElementById("headphonesButton")

function increasePoints() {
    points = points + 1
    sound1.play() 
}
let bgMusic = new Howl({
    src: ['Cyberpunk.mp3'],
    autoplay: true, 
    volume: 0.03,
    loop: true, 
})
let computer1 = new Howl({
    src: ["Computersound.wav"],
    volume: 0.15
})
let storage1 = new Howl({
    src: ["printer03.wav"],
    volume: 0.15
})
let headphones1 = new Howl({
    src:  ["shake.wav"],
    volume: 0.15
})
let photo = new Howl({
    src: ["photo.ogg"],
    volume: 0.15
})

function muteMusic() {
    bgMusic.pause()
}

function playMusic() {
    bgMusic.play()
}

function increaseMoney() {
    points = points + 5

    tracker.innerText = points.toFixed(2) + "$ Dollars"
}


function buyCamera () {
    let costCamera = 400 + camera ** 5  
     if(points >= costCamera) {
        points = points - costCamera
        tracker.innerText = points.toFixed(2) + '$ Dollars'
        camera = camera + 1 
        cameraOwned.innerText = 'Cameras Owned: ' + camera
        costCamera = 400 + camera ** 5
        cameraCost.innerText = costCamera.toFixed(0) + "$ Dollars"
        photo.play()
        } else {
            alert("You Broke My GUY GET A JOB")

     }
}

function buycomputer () {
    let costComputer = 1500 + computer ** 5  
    if(points >= costComputer) {
       points = points - costComputer
       tracker.innerText = points.toFixed(2) + '$ Dollars'
       tracker.innerText = points + ' Dollars'
       computer = computer + 1 
       computerOwned.innerText = 'Computers Owned: ' + computer
       costComputer = 1500 + computer ** 5
       computerCost.innerText = costComputer.toFixed(0) + "$ Dollars"
       computer1.play()
       } else {
           alert("You Broke My GUY GET A JOB")

    }
}

function buystorage () {
    let costStorage = 4000 + storage ** 5
    if ( points >= costStorage){
        points = points - costStorage
        tracker.innerText = points.toFixed(2) + 'Dollars'
        tracker.innerText = points + 'Dollars'
        storage = storage +  1
        storageOwned.innerText = 'storage Owned;  ' + storage
        costStorage = 4000 + storage ** 5
        storageCost.innerText = costStorage.toFixed(0) + "$ Dollars"
        storage1.play()
        } else {
         alert("You Broke My GUY GET A JOB")    
    }
}

function buyheadphones () {
    let costheadphones = 150 + headphones ** 5
    if ( points >= costheadphones){
        points = points - costheadphones
        tracker.innerText = points.toFixed(2) + 'Dollars'
        tracker.innerText = points + 'Dollars'
        headphones = headphones +  1
        headphonesOwned.innerText = 'headphones Owned;  ' + headphones
        costheadphones = 150 + headphones ** 5
        headphonesCost.innerText = costheadphones.toFixed(0) + "$ Dollars"
        headphones1.play()
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


function checkPrice() {
    if (points.toFixed(0) >= 400 + camera ** 5) {
        cameraButton.disabled = false
    }
    else {
        cameraButton.disabled = true
    }

    if (points.toFixed(0) >= 1500 + computer ** 5) {
        computerButton.disabled = false
    }
    else {
        computerButton.disabled = true
    }
    if (points.toFixed(0) >= 4000 + storage ** 5) {
        storageButton.disabled = false
    }
    else {
        storageButton.disabled = true
    }
    if (points.toFixed(0) >= 150 + headphones ** 5) {
        headphonesButton.disabled = false
    }
    else {
        headphonesButton.disabled = true
    }
}

setInterval (gameloop, 1000)

setInterval (checkPrice, 10)