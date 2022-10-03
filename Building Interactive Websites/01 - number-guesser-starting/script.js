let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, target) => {
    const userDiff = getAbsoluteDistance(userGuess, target);
    const computerDiff = getAbsoluteDistance(computerGuess, target);
    if (userDiff <= computerDiff){
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    if(winner === 'human'){
        humanScore++;
    } else if (winner === 'computer'){
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;
