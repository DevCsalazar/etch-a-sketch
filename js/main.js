let color = "blue";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Start drawing"
            }else {
                draw.innerHTML = "Not allowed to draw"
            }
        }
    })
    
    let popUp = document.querySelector("#pop-up");
    popUp.addEventListener("click", function(){
        let size = setSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board = document.querySelector(".board-container");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDIvs = size * size;

    for(let i = 0; i < numDIvs; i++){
        let div = document.createElement("div");
        div.style.border = ".5px dotted";
        div.addEventListener("mouseover", colorDIv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function setSize(){
    let input = prompt("What will be the size?");
    let message = document.querySelector("#message");
    if(input === ""){
        message.innerHTML = "Not valid option, please provide a number";
    }else if(input <= 0 || input > 100){
        message.innerHTML = "Not valid option, please select a number between 1 and 100";
    }else {
        message.innerHTML = "You can draw";
    }
    return input;
}

function colorDIv(){
    if(click){
        if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else {
        this.style.backgroundColor = "black";
        }
    }
}

function setColor(colorOption){
    color = colorOption;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}