// 1. Deposit some money

const prompt = require("prompt-sync")();

function deposit() {
  while (true) {
    const depositAmount = prompt("Enter deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid input. Try again.");
    } else {
      return numberDepositAmount;
    }
  }
}


// 2. Determine number of lines to bet on

function numOfLines(){
  while (true){
    const lines = prompt("How many lines to bet on : ");
    const numLines = parseFloat(lines);

    if(isNaN(numLines ) || numLines <= 0 || numLines > 3){
      console.log("Invalid line count, try again.");
    } else {
      return numLines
    }
  }
}

// 3. Collect the bet amount

function getBet(balance, lines){
  while (true){
    const bet = prompt("Enter bet per line: ");
    const numBet = parseFloat(bet);

    if (isNaN(numBet) || numBet <= 0 || balance <= (numBet * lines)){
      console.log("Invalid input, try again.");
    } else {
      return numBet;
    }
  }
}

// 4. Spin the slot machine
// 5. Check if the player won
// 6. Give the player's winnings
// 7. Play again

let balance = deposit();
const lines = numOfLines();
const bet = getBet(balance, lines);
console.log(balance);
console.log(lines);
console.log(bet);