let count = 0;
let gamesWon = 0;
let gamesLost = 0;
let gamesTied = 0;

let getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
  case 0: return 'Rock';
  case 1: return 'Paper';
  default: return 'Scissors';
  }
}

let game = (computerChoice,userChoice) => {
  if (!['Rock','Paper','Scissors'].includes(computerChoice)) return 'Error';
  if (!['Rock','Paper','Scissors'].includes(userChoice)) return 'Cheater';
  if (computerChoice == userChoice) return 'Tie';
  if (computerChoice == 'Rock' && userChoice == 'Paper') return 'Win';
  if (computerChoice == 'Paper' && userChoice == 'Scissors') return 'Win';
  if (computerChoice == 'Scissors' && userChoice == 'Rock') return 'Win';
  return 'Loose';
}

let play = (userChoice) => {
  count++;
  let computerChoice = getComputerChoice();
  let results = game(computerChoice,userChoice);

  // add results to result table
  let myHtmlContent = "<tr><td>"+count+"</td><td>"+results+"</td><td>"+computerChoice+"</td><td>"+userChoice+"</td></tr>";
  let tableRef = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];

  var newRow = tableRef.insertRow(0);
  newRow.innerHTML = myHtmlContent;

  // accumulate game totals
  if (results == 'Win') {gamesWon++;}
  if (results == 'Loose') {gamesLost++;}
  if (results == 'Tie') {gamesTied++;}

  refreshTotalsTable();
  if (gamesWon >= 5 || gamesLost >= 5) {endGame()}
}

let refreshTotalsTable = () => {
  document.querySelector('#totalsTable').innerHTML = 
  `<table>
    <tr><td>Games Played</td><td>${count}</td></tr>
    <tr><td>Games Won</td><td>${gamesWon}</td></tr>
    <tr><td>Games Games Lost</td><td>${gamesLost}</td></tr>
    <tr><td>Games Tied</td><td>${gamesTied}</td></tr>
  </table>`;

}

let newGame = () => {
  count = 0;
  gamesWon = 0;
  gamesLost = 0;
  gamesTied = 0;
  refreshTotalsTable();
  document.querySelector('#pregame').classList.add('hidden');  
  document.querySelector('#selection').classList.remove('hidden');  
  document.querySelector('#results').classList.remove('hidden'); 
  document.querySelector("#resultsTable > tbody").innerHTML = "<tbody></tbody>";
}

let endGame = () => {
  if (gamesWon >= 5) {document.querySelector('#header').textContent = 'You Won.';}
  else {document.querySelector('#header').textContent = 'You Lost.';}
  document.querySelector('#selection').classList.add('hidden');  
  document.querySelector('#pregame').classList.remove('hidden');  
}


window.addEventListener('load', function () {
  // document.querySelector('#header').textContent = 'The game is played until some wins 5 times.';
  // document.querySelector('#startNewGame').addEventListener('click', function() { newGame() });
  // document.getElementById('rock').addEventListener('click', function() { play('Rock') });
  // document.getElementById('paper').addEventListener('click', function() { play('Paper') });
  // document.getElementById('scissors').addEventListener('click', function() { play('Scissors') });
  
})