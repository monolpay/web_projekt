const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const car = document.getElementById("car")

let posX = 10
let posY = 10

let cenX = posX + 40
let cenY = posY + 40
let direction = 0

function draw(){
    cenX = posX + 40
    cenY = posY + 40
    ctx.translate(cenX, cenY); // Posun na střed auta
    ctx.rotate((Math.PI/180)*direction)
    ctx.translate(0, 0);
    ctx.drawImage(car, posX, posY, 80, 80)
    ctx.fillRect(0, 0, 10, 10)
    
}


function rotate(){
    direction++
    posX = 0
    posY = 0
    draw()
}
setInterval(rotate, 200)