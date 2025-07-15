let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset")
let newbtn = document.querySelector("#newbtn")
let msgContainer =document.querySelector(".msg_container");
let msg =  document.querySelector("#msg");
let Game = document.querySelector("main");

const win_patterns = [
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]];

let turnO =  true;


const enableGame = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerHTML = "";
    }
}
const resetGame = () => {
    console.log("reset button clicked");
    turnO = true;
    enableGame();
    msgContainer.classList.add("hide");
    Game.classList.remove("disabled");  // Re-enable the game area
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        }
        else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });

});
const disabledboxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}


const showWinner = (winner) =>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    Game.classList.add("disabled"); 
    disabledboxes();
}

const checkWinner = () =>{
    for(let pattern of win_patterns)
    {
        let pos1 = boxes[pattern[0]].innerHTML  ;
        let pos2 = boxes[pattern[1]].innerHTML  ;
        let pos3 = boxes[pattern[2]].innerHTML  ;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1 === pos2 && pos2 === pos3) 
                {
                    showWinner(pos1);
                }
        }
    }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);