let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#resetbutton");
let turnO = true; //playerO
let newGamebutton = document.querySelector("#newbutton");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count =0;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame =() =>
{
    turnO = true;
    count=0;
    enbleboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
       
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        count++;
        let iswinner = checkwinner();
        if ( count ===9 && !iswinner){
            drawgame();
        }
        if (turnO === true){
                
        }     
    })
});
const disableboxes = () =>
{
    for(box of boxes){
        box.disabled = true;
    }
}
const enbleboxes = () =>
{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const drawgame =() =>
{
    msg.innerText = 'Game was a draw.';
    msgcontainer.classList.remove('hide');
    disableboxes();
}
const showWinner= (winner) =>{
    msg.innerText = 'Congratulation, You are a Winner.';
    msgcontainer.classList.remove('hide');
    disableboxes();
}
const checkwinner = ()=>{
    for (pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val != ""){
            if(pos1val === pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
        

    }
}

newGamebutton.addEventListener("click" , resetGame);
resetbutton.addEventListener("click" , resetGame);