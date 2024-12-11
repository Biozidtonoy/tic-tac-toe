let buttons = document.querySelectorAll(".btn-box");
let restartBtn = document.querySelector("#restart-btn");
let winContainer = document.querySelector(".win-container");
let winMsg = document.querySelector(".winner");

let turnO = true ;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

buttons.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log('box was clicked'); 
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        } else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const rstBtn =()=>{
    turnO = true;
    winContainer.classList.add("hide");
    enableBtns();
}

const enableBtns = ()=>{
    for(let btn of buttons){
        btn.innerText = "";
        btn.disabled=false;
    }
}

const disabledBtns = ()=>{
    for(let btn of buttons){
        btn.disabled=true;
    }
}

const showWinner = (winner) =>{
    winMsg.innerText =` "Congatulations, Winner is ${winner}"`;
    winContainer.classList.remove('hide');
    disabledBtns();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(pattern);       
        // console.log(pattern[0],pattern[1],pattern[2]);  
        // console.log(
        //     buttons[pattern[0]].innerText,
        //     buttons[pattern[1]].innerText,
        //     buttons[pattern[2]].innerText);  
        let pos1Val = buttons[pattern[0]].innerText ;
        let pos2Val = buttons[pattern[1]].innerText ;
        let pos3Val = buttons[pattern[2]].innerText ;
        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('winner',pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

restartBtn.addEventListener("click", rstBtn)
