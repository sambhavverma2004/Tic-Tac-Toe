let button=document.querySelectorAll(".buttons");
let resetbtn=document.querySelector(".reset");
let msg_p=document.querySelector(".msg-p");
let msg=document.querySelector(".msg")
let newgamebtn=document.querySelector(".newgamebtn");
let turn0=true;;
let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let i=0;
button.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(turn0){
            turn0=false;
            button.innerText="0";
        }
        else{
            turn0=true;
            button.innerText="X";
        }
        button.disabled=true;
        checkWinner();
        i++;
if(i==9){
    gamedraw();
}
    });
});
let gamedraw=()=>{
    msg_p.innerText=`Game is draw, no one wins!`;
    msg.classList.remove("hide");
    disableboxes();
};
let checkWinner=()=>{
for(pattren of arr){
    let pos1val = button[pattren[0]].innerText;
    let pos2val = button[pattren[1]].innerText;
    let pos3val = button[pattren[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
        if (pos1val === pos2val && pos2val === pos3val) {
          showWinner(pos1val);
}
}}};
let showWinner=(winner)=>{
msg_p.innerText=`Congratulations! ${winner} is winner`;
msg.classList.remove("hide");
disableboxes();
}
const disableboxes=()=>{
    for(let box of button){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of button){
        box.disabled=false;
    }
}

const reset=()=>{
turn0=true;
enableboxes();
for(let box of button){
    box.innerText="";
}msg.classList.add("hide");
i=0;
};

resetbtn.addEventListener("click",reset);
newgamebtn.addEventListener("click",reset);







