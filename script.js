document.getElementById('win').style.display = 'none';
document.getElementById('lose').style.display = 'none';
const Choices = ['Rock', 'Paper', 'Scissors'];
let computerChoice;
function randomChoice() {
    let randomNumber = Math.floor(Math.random() * Choices.length);
    computerChoice = Choices[randomNumber];
};
let newString = '';
const btns = document.querySelectorAll('#btn');
function pcPick(id){
        btns.forEach(function(btn){
            btn.addEventListener('click', (e) =>{
                randomChoice();
                const clicked = e.currentTarget.classList;
                if(clicked.contains(id)){
                    newString = `${computerChoice}`;
                    document.querySelector('#pcPick').innerHTML = newString;
                    myPick(clicked);
                    
                }
                document.getElementById('start').style.visibility = 'hidden';
            })
        })
    }
   
function myPick(clicked){
    if(clicked.contains('rock-color')){
        document.querySelector('#myPick').innerHTML = `Rock`;
    }
    if(clicked.contains('paper-color')){
        document.querySelector('#myPick').innerHTML = `Paper`;
    }
    if(clicked.contains('scissor-color')){
        document.querySelector('#myPick').innerHTML = `Scissors`;
    }
}
    pcPick('rock-color');
    pcPick('paper-color');
    pcPick('scissor-color');


btns.forEach(function(btn){
    btn.addEventListener('click', ()=>{
        pcWin('Rock', 'Paper');
        pcWin('Paper', 'Scissors');
        pcWin('Scissors', 'Rock');
        playerWin('Paper', 'Rock');
        playerWin('Rock', 'Scissors');
        playerWin('Scissors', 'Paper');
    })
})
function pcWin(id1, id2){
    const myPick = document.querySelector('#myPick').innerHTML;
    let value2 = document.querySelector('#pcScore').innerHTML;
    const pcPick = document.querySelector('#pcPick').innerHTML;
    if(myPick == id1 && pcPick == id2){
        value2++;
        document.querySelector('#pcScore').innerHTML = value2;
        document.getElementById('lose').style.display = 'block';
        document.getElementById('win').style.display = 'none';
    }
}
function playerWin(id1,id2){
    const myPick = document.querySelector('#myPick').innerHTML;
    let value1 = document.querySelector('#myScore').innerHTML;
    const pcPick = document.querySelector('#pcPick').innerHTML;
    if(myPick == id1 && pcPick == id2){
        value1++;
        document.querySelector('#myScore').innerHTML = value1;
        document.getElementById('win').style.display = 'block';
        document.getElementById('lose').style.display = 'none';
    }
}
    document.getElementById('reset').addEventListener('click', ()=>{
        document.location.reload();
    })







// if I am rock and PC is paper,PC wins
// if I am paper and PC is scissors,PC wins
// if I am scissors and PC is rock,PC wins
// if I am paper and PC is rock,I win
// if I am rock and PC is scissors,I win
// if I am scissors and PC is paper,I win








