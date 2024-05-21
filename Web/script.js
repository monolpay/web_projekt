let images = 2
let currImg = Math.floor(Math.random()*images)
function slide(){
    document.getElementsByTagName("header")[0].style.backgroundImage="url('./img/img"+currImg+".jpg')"
    currImg ++
    console.log(currImg)
    if(currImg > images - 1){
        currImg = 0
    }
    
}
slide()
setInterval(slide, 1000)