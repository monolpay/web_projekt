let images = 6

let currImg = Math.floor(Math.random()*images)
function slide(){
    document.getElementsByTagName("header")[0].style.backgroundImage="url('./img/img"+currImg+".jpg')"
    currImg ++
    if(currImg > images - 1){
        currImg = 0
    }
    
}

function timeDisplay(){
    let now = new Date
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()
    document.getElementById("time").textContent = hours+":"+minutes+":"+seconds
}
slide()
setInterval(slide, 5000)
setInterval(timeDisplay, 1000)