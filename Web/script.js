let currImg = 0
function slide(){
    document.getElementsByTagName("header")[0].style.backgroundImage="url('./img/img"+currImg+".jpg')"
    currImg ++
    console.log(currImg)
    if(currImg > 1){
        currImg = 0
    }
    
}

setInterval(slide, 1000)