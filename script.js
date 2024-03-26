let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset");
let msg=document.querySelector(".msg");
let winhide=document.querySelector("#win");
let ng=document.querySelector(".ng");
let turn0= true;//playerX, player0;
let count=0;

let a=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
];
const newgame= ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("redd");
        //winhide.classList.add("hide");
        resetButton.classList.remove("hide");
        winhide.classList.add("hide");
    }
}
ng.addEventListener("click",()=>{
    newgame();
    count=0;
    turn0=true;
});
const reset= ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("redd");
    }
}
resetButton.addEventListener("click",()=>{
    reset();
    count=0;
    turn0=true;
});
const winner = (win) => {
    if(win=="2") msg.innerText ="Draw";
    else  msg.innerText = `Congratulations Winner is ${win}`;
    winhide.classList.remove("hide");
    resetButton.classList.add("hide");
}
const check=() => {
    for(let A of a){
        if(boxes[A[0]].innerText== boxes[A[1]].innerText && boxes[A[1]].innerText== boxes[A[2]].innerText && (boxes[A[0]].innerText=="O" ||boxes[A[0]].innerText=="X")){
            for(let B of boxes){
                B.disabled=true;
            }
            let pos=boxes[A[0]].innerText;
            winner(pos);
            // boxes[A[0]].style.backgroundColor="red";
            // boxes[A[1]].style.backgroundColor="red";
            // boxes[A[2]].style.backgroundColor="red";
            boxes[A[0]].classList.add("redd");
            boxes[A[1]].classList.add("redd");
            boxes[A[2]].classList.add("redd");
        }
    }

};
const draw=()=>{
    winner("2");
    count=0;
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0==true){
            turn0=false;
            box.innerText="O";
        }
        else{
            turn0=true;
            box.innerText="X";
        }
        check();
        box.disabled=true;
        count++;
        if(count==9) draw();
    })
}
)


