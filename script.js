const about = ["developer","gamer","engineer","student"];
const color = ["aqua","red ","yellow","blue"]
const span = document.querySelector("span");

let index = -1;


function update(){
    index++
    if(index == about.length){
        index = 0
    }
    span.innerText=about[index]+ " .. ";
    span.style.color=color[index]

}

setInterval(update,5000)
