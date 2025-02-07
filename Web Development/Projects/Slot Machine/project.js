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

const depAmt = deposit();
console.log(depAmt);

// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
