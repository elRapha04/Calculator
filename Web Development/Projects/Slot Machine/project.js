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
// 4. Spin the slot machine
// 5. Check if the player won
// 6. Give the player's winnings
// 7. Play again

const depAmt = deposit();
const lines = numOfLines();
console.log(depAmt);
console.log(lines);