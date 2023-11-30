let score={
    wins:0,
    losses:0,
    ties:0
}

updateScoreElement();

document.querySelector('.js-rock-button')
    .addEventListener('click',()=>{ 
        playGame('rock');
    });

document.querySelector('.js-paper-button')
    .addEventListener('click',()=>{
        playGame('paper');
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click',()=>{
        playGame('scissors');
    });

function playGame(playerMove){
    const computerMove=ComputerMove();

    let result='';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
        result = 'You lose.';
        } else if (computerMove === 'paper') {
        result = 'You win.';
        } else if (computerMove === 'scissors') {
        result = 'Tie.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
        result = 'You win.';
        } else if (computerMove === 'paper') {
        result = 'Tie.';
        } else if (computerMove === 'scissors') {
        result = 'You lose.';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
        result = 'Tie.';
        } else if (computerMove === 'paper') {
        result = 'You lose.';
        } else if (computerMove === 'scissors') {
        result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    updateScoreElement();
}

function ComputerMove(){
    const randomNumber = Math.random();

    let computerMove = '';

    if(randomNumber>=0 && randomNumber<1/3){
        computerMove='rock';
    }else if(randomNumber>=1/3 &&randomNumber<2/3){
        computerMove='paper';
    } else{
        computerMove='scissors';
    }
    return computerMove;
}

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}