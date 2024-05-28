const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const car = document.getElementById("car")

let posX = 10
let posY = 10

let speed = 3
let speedX = 0
let speedY = 0

let cenX = posX + 40
let cenY = posY + 40
let direction = 0
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    cenX = posX + 40
    cenY = posY + 40
    ctx.translate(cenX, cenY); // Posun na střed auta
    ctx.rotate((Math.PI/180)*direction)
    ctx.translate(-cenX, -cenY);
    ctx.drawImage(car, posX, posY, 80, 80)
    posX += speedX
    posY += speedY
    
}


function rotate(speed){
    direction = speed
}

function move(x, y){
    speedX = x
    speedY = y
}

function stop(){
    rotate(0)
    move(0, 0)
}

window.addEventListener("keydown", function (event){
    if (event.defaultPrevented) {
        return;
    }
    
    switch(event.key){
        case "ArrowRight":
            move(speed, 0)
            break
        case "ArrowLeft":
            move(-speed, 0)
            break
        case "ArrowUp":
            move(0, -speed)
            break
        case "ArrowDown":
            move(0, speed)
            break
    }
}, true)

setInterval(draw, 1000/60)
    

