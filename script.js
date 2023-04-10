const Choices = ['Rock', 'Paper', 'Scissors'];
let computerChoice;
let myChoice = document.querySelector('#myChoice').innerHTML;
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
                newString = `Computer Picked : ${computerChoice}`;
                document.querySelector('#pcChoice').innerHTML = newString;
                myPick(clicked);
            }
        })
    })
}
function myPick(clicked){
    if(clicked.contains('rock-color')){
        document.querySelector('#myChoice').innerHTML = `You Picked : Rock`;
    }
    if(clicked.contains('paper-color')){
        document.querySelector('#myChoice').innerHTML = `You Picked : Paper`;
    }
    if(clicked.contains('scissor-color')){
        document.querySelector('#myChoice').innerHTML = `You Picked : Scissors`;
    }
    
}

const rock = pcPick('rock-color');
const paper = pcPick('paper-color');
const scissor = pcPick('scissor-color');




