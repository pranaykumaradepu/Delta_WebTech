/**
 * Manages the game logic for a Simon-like memory game.
 * 
 * The game starts when the user presses any key. The game then flashes a random color,
 * and the user must click the corresponding button. As the game progresses, the sequence
 * of colors to remember gets longer. If the user makes a mistake, the game is over and
 * the user's score is displayed.
 */

let gameSeq = [];
let userSeq = [];

let h3 = document.querySelector('h3')

let btns = ['one', 'two', 'three', 'four']

let start = false;
let level = 0;

document.addEventListener('keypress',function() {
    if (start == false){

        start = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add('flash');

    setTimeout(function(){
        btn.classList.remove('flash');
    },300);
}

function userFlash(btn){
    btn.classList.add('userflash');

    setTimeout(function(){
        btn.classList.remove('userflash');
    },300);
}

function levelup(){
    userSeq = [];
    level++;

    h3.innerText = `level ${level}`

    let randInx = Math.floor(Math.random() * 4);
    let randcol = btns[randInx]
    let randBtn = document.querySelector(`.${randcol}`)
    gameSeq.push(randcol);
    gameFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h3.innerText = `game Over! your score was : ${level} \n\n press any key to restart`
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'rgba(174, 173, 173, 0.689)';
        },350);
        reset();
    }
}


function btnPress(){
    let box = this; 
    userSeq.push(this.id);    
    userFlash(box); // flash the button

    checkAns(userSeq.length-1);  // check the answer and move on to the next level
}

let allBtns = document.querySelectorAll('.box');

for(box of allBtns){
    box.addEventListener('click', btnPress); 
}

function reset(){
    start = false;
    level = 0;
    gameSeq = [];
    userSeq = [];

}