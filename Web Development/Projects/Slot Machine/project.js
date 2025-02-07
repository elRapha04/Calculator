// 1. Deposit some money

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUE = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

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

function numOfLines() {
  while (true) {
    const lines = prompt("How many lines to bet on: ");
    const numLines = parseFloat(lines);

    if (isNaN(numLines) || numLines <= 0 || numLines > 3) {
      console.log("Invalid line count, try again.");
    } else {
      return numLines;
    }
  }
}

// 3. Collect the bet amount

function getBet(balance, lines) {
  while (true) {
    const bet = prompt("Enter bet per line: ");
    const numBet = parseFloat(bet);

    if (isNaN(numBet) || numBet <= 0 || balance < numBet * lines) {
      console.log("Invalid bet, try again.");
    } else {
      return numBet;
    }
  }
}

// 4. Spin the slot machine

function spin() {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const availSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const idx = Math.floor(Math.random() * availSymbols.length);
      reels[i].push(availSymbols[idx]);
      availSymbols.splice(idx, 1);
    }
  }
  return reels;
}

function transpose(reels) {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < ROWS; j++) {
      rows[i][j] = reels[j][i];
    }
  }
  return rows;
}

function printRows(rows){
  for (const row of rows){
    let rowString = "";
    for (const [i, symbol] of row.entries()){
      rowString += symbol;
      if (i < rows.length - 1){
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
}

// 5. Check if the player won

function getWinnings(rows, bet, lines){
  let winnings = 0;
  
  for (let row = 0; row < lines; row++){
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols){
      if (symbol != symbols[0]){
        allSame = false;
        break;
      }
    }
    
    if (allSame){
      winnings += bet * SYMBOL_VALUE[symbols[0]]; 
    }
  }
  return winnings;
}

// 6. Give the player's winnings
// 7. Play again

function game(){
  let balance = deposit();
  
  while (true) {
    console.log("BALANCE: ", balance);
    const lines = numOfLines();
    const bet = getBet(balance, lines);
    balance -= bet * lines;
    const reels = spin();
    const transposed = transpose(reels);
    printRows(transposed);
    const winnings = getWinnings(transposed, bet, lines);
    balance += winnings;
    console.log("WINNINGS: $", winnings);

    if (balance === 0){
      console.log("You have no money left. BYE");
      break;
    }
  }
}
  
game();