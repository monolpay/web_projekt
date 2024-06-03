const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const car = document.getElementById("car")
const track = document.getElementById("track")

let posX = 630
let posY = 455


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
    cenX = posX + 40
    cenY = posY + 40
    ctx.translate(cenX, cenY); // Posun na střed auta
    ctx.rotate((Math.PI/180)*direction)
    ctx.translate(-cenX, -cenY);
    ctx.drawImage(car, posX, posY, 65, 65)
    ctx.translate(cenX, cenY);
    ctx.rotate((Math.PI/180)*-direction)
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
    }
}, true)


function collision(){
    if(posX <= 0){
        stop()
        posX ++
    }

    if(posX >= canvas.width - 80){
        stop()
        posX --
    }

    if(posY <= 0){
        stop()
        posY ++
    }

    if(posY >= canvas.height - 80){
        stop()
        posY --
    }
}

function update(){
    draw()
    collision()
}

setInterval(update, 1000/60)
    

console.log(canvas.width, canvas.height)