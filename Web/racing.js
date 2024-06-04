// Creates variables for sprites and canvas
const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const car = document.getElementById("car")
const track = document.getElementById("track")
const burnout = document.getElementById("burnout")


// Important starting parameters
let posX = 630
let posY = 470

let carSize = 65
let burnouted = false

let speed = 3
let speedX = 0
let speedY = 0

let cenX = posX + 40
let cenY = posY + 40
let direction = 0


carRotate(-90)


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(track, 0, 0, canvas.width, canvas.height)
    cenX = posX + carSize / 2
    cenY = posY + carSize / 2
    ctx.translate(cenX, cenY); // Moves canvas center to car center
    ctx.rotate((Math.PI/180)*direction) // Rotates canvas around that point
    ctx.translate(-cenX, -cenY); // Moves canvas center to original position
    if(burnouted){
        ctx.drawImage(burnout, posX - 25, posY - 25, carSize + 50, carSize + 50)
    }
    else {
        ctx.drawImage(car, posX, posY, carSize, carSize)
    }
    
    ctx.translate(cenX, cenY); 
    ctx.rotate((Math.PI/180)*-direction) // Rotates everything back to original
    ctx.translate(-cenX, -cenY);
    posX += speedX
    posY += speedY
    
}


function carRotate(rotation){
    direction = rotation
}


function move(x, y){
    speedX = x
    speedY = y
}

function stop(){
    move(0, 0)
}

// Gets user input
window.addEventListener("keydown", function (event){
    if (event.defaultPrevented) {
        return;
    }
    
    switch(event.key){
        case "ArrowRight":
            move(speed, 0)
            carRotate(90)
            break
        case "d":
            move(speed, 0)
            carRotate(90)
            break
        case "ArrowLeft":
            move(-speed, 0)
            carRotate(-90)
            break
        case "a":
            move(-speed, 0)
            carRotate(-90)
            break
        case "ArrowUp":
            move(0, -speed)
            carRotate(0)
            break
        case "w":
            move(0, -speed)
            carRotate(0)
            break
        case "ArrowDown":
            move(0, speed)
            carRotate(180)
            break
        case "s":
            move(0, speed)
            carRotate(180)
            break
        case " ":
            speed = 1
            burnouted = true
            stop()
    }
}, true)

window.addEventListener("keyup", function (event){
    if (event.defaultPrevented) {
        return;
    }
    
    switch(event.key){
        case " ":
            speed = 3
            burnouted = false
    }
}, true)

// Stops car from leaving the canvas area
function collision(){
    if(posX <= 0){
        stop()
        posX ++
    }

    if(posX >= canvas.width - carSize){
        stop()
        posX --
    }

    if(posY <= 0){
        stop()
        posY ++
    }

    if(posY >= canvas.height - carSize){
        stop()
        posY --
    }
}

// Updates everything on the screen
function update(){
    draw()
    collision()
}

// Sets game tick rate to 60tps
setInterval(update, 1000/60)