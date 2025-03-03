let boxs=document.querySelectorAll(".box");
let reset=document.querySelector("#re-set");
let msgcontainar=document.querySelector(".msgcontainar");
let re_setbutton=document.querySelector("#re_setbutton");
let msg=document.querySelector("#msg");

let turnO=true;

const patterns=
[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

boxs.forEach((box)=>{
   box.addEventListener("click" ,()=>{
console.log("box was clicked");
if(turnO===true){
   box.innerText="O";
   turnO=false;
}else{
   box.innerText="X";
   turnO=true;
} 
box.disabled=true;
checkWinner();
   })
})

const resetGame=()=>{
turnO=true;
enable();
msgcontainar.classList.add("hide");

}
const disable=()=>{
   for(let box of boxs){
      box.disabled=true;

   }
}
const enable=()=>{
   for(let box of boxs){
box.disabled=false
   box.innerText="";
   }
}

const checkWinner = () => {
   for (let pattern of patterns) {
      let pos1 = boxs[pattern[0]].innerText;  // Access box at pattern[0]
      let pos2 = boxs[pattern[1]].innerText;  // Access box at pattern[1]
      let pos3 = boxs[pattern[2]].innerText;  // Access box at pattern[2]
      
      if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
         if (pos1 === pos2 && pos2 === pos3) {
            console.log("Winner", pos1);
            disable();
            showWinner(pos1);
         }
      }
   }
}

const showWinner=(Winner)=>{
msg.innerText=`Congretulation,Winner is ${Winner}`;
msgcontainar.classList.remove("hide");
};

re_setbutton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);






