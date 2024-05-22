let points = 0
let tracker = document.getElementById("tracker")
let camera = document.getElementById("camera")
let computer = document.getElementById("Computer")

function increaseMoney() {
    points = points + 2000

    tracker.innerText = points + " Dollars"
}

function buyCamera () {
     if(points >=4000) {
        points = points -4000
        tracker.innerText = points + 'Dollars'
        camera = camera + 1 
        cameraAmount.innerText = books + 'CameraOwned'
        let cameraAmount = 0
        } else {
            alert("You Broke My GUY GET A JOB")

     }
}

function buyComputer () {
    if(points >=4000) {
       points = points -4000
       tracker.innerText = points + 'Dollars'
       camera = camera + 1 
       booksAmount.innerText = books + 'Computer Owned'
       } else {
           alert("You Broke My GUY GET A JOB")

    }
}

function buyStorage () {
    if(points >=4000) {
       points = points -4000
       tracker.innerText = points + 'Dollars'
       camera = camera + 1 
       booksAmount.innerText = books + 'CameraOwned'
       } else {
           alert("You Broke My GUY GET A JOB")

    }
}

