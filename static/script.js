document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-btn");
  const board = document.getElementById("board");
  const scoreDisplay = document.getElementById("score");
  let score = 0;
  let rowWins = 0;
  let colWins = 0;
  let diagWins = 0;

  startButton.addEventListener("click", startGame);

  function startGame() {
    generateBoard();
    score = 0;
    updateScoreDisplay();
  }

  function generateBoard() {
    board.innerHTML = "";

    for (let i = 0; i < 5; i++) {
      let row = board.insertRow();
      for (let j = 0; j < 5; j++) {
        let cell = row.insertCell();
        let randomNumber = getRandomNumber();
        cell.textContent = randomNumber;
        cell.addEventListener("click", () => selectCell(cell));
      }
    }
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 15) + 1;
  }

  function selectCell(cell) {
    cell.classList.toggle("selected");
    checkForWin();
  }

  function checkForWin() {
    let rows = board.getElementsByTagName("tr");
    let cols = board.getElementsByTagName("td");

    for (let row of rows) {
      let rowRedCount = 0;
      for (let cell of row.cells) {
        if (cell.classList.contains("selected")) {
          rowRedCount++;
        }
      }
      if (rowRedCount === 5 && rowWins === 0) {
        rowWins = 1;
        increaseScore();
      }
    }

    for (let i = 0; i < 5; i++) {
      let colRedCount = 0;
      for (let j = 0; j < 5; j++) {
        if (cols[j * 5 + i].classList.contains("selected")) {
          colRedCount++;
        }
      }
      if (colRedCount === 5 && colWins === 0) {
        colWins = 1;
        increaseScore();
      }
    }

    if (
      cols[0].classList.contains("selected") &&
      cols[6].classList.contains("selected") &&
      cols[12].classList.contains("selected") &&
      cols[18].classList.contains("selected") &&
      cols[24].classList.contains("selected") &&
      diagWins === 0
    ) {
      diagWins = 1;
      increaseScore();
    }
    if (
      cols[4].classList.contains("selected") &&
      cols[8].classList.contains("selected") &&
      cols[12].classList.contains("selected") &&
      cols[16].classList.contains("selected") &&
      cols[20].classList.contains("selected") &&
      diagWins === 0
    ) {
      diagWins = 1;
      increaseScore();
    }
  }

  function increaseScore() {
    score++;
    updateScoreDisplay();
  }

  function updateScoreDisplay() {
    scoreDisplay.textContent = "Score: " + score;
  }
});
