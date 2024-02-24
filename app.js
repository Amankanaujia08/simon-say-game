let seq=[];
let seq1=[];

let btns=["red","green","yellow","purple"];

let started=false;
let level=0;
let h3=document.querySelector("h3");
let highest=0;
let h2= document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function userflash(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user")
    },250)
}

function levelup(){
seq1=[];
    level++;
    highest++;
h3.innerText=`level ${level}`;

let randColor=Math.floor(Math.random()*3);
let randIdx=btns[randColor];
let randBtn=document.querySelector(`.${randIdx}`);
//console.log(randColor);
//console.log(randIdx);
//console.log(randBtn);

seq.push(randIdx)
console.log(seq);

 btnflash(randBtn);
};


function userBtn(idx){
    //console.log("curr level:",level);
    //let idx= level - 1;
    if(seq1[idx]===seq[idx]){
        //console.log("same value");
        if(seq1.length==seq.length){
             setTimeout(levelup(),1000);
        }
    }else{
      h3.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

 function highestup(){
    // if(highest==level){
        //console.log("same value")
        if(highest>=level){
            //console.log("same value")
            h2.innerText=`highest score:${highest}`;
        }
    // }
    else{
        console.log("error")
    }
}

function pressBtn(){
//    console.log(this);
    let btn=this;
    userflash(btn);
    
    userColor=btn.getAttribute("id");
    //console.log(userColor);
    
    seq1.push(userColor);
    userBtn(seq1.length-1);
}

let allBtn=document.querySelectorAll(".two");
for(two of allBtn){
    two.addEventListener("click", pressBtn);

    
}


function reset(){
    
    level=0,
    seq=[],
    seq1=[],
    started=false,
highestup(),
highest=0
} 