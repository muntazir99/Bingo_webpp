// const grid = document.getElementById("grid");
// const buttons = grid.getElementsByClassName("button");
// const numbers = [];
// let score = 0;

// while (numbers.length < 25) {
//   const num = Math.floor(Math.random() * 25) + 1;
//   if (!numbers.includes(num)) {
//     numbers.push(num);
//   }
// }

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].textContent = numbers[i];
//   buttons[i].addEventListener("click", function() {
//     this.style.backgroundColor = "red";
//     checkForWin();
//   });
// }

// function checkForWin() {
//   // Check rows
//   for (let i = 0; i < 5; i++) {
//     let count = 0;
//     for (let j = 0; j < 5; j++) {
//       if (grid.rows[i].cells[j].style.backgroundColor === "red") {
//         count++;
//       }
//     }
//     if (count === 5) {
//       score++;
//       console.log("Score: " + score);
//       updateScore();
//       return;
//     }
//   }

//   // Check columns
//   for (let i = 0; i < 5; i++) {
//     let count = 0;
//     for (let j = 0; j < 5; j++) {
//       if (grid.rows[j].cells[i].style.backgroundColor === "red") {
//         count++;
//       }
//     }
//     if (count === 5) {
//       score++;
//       console.log("Score: " + score);
//       updateScore();
//       return;
//     }
//   }

//   // Check diagonals
//   let count1 = 0;
//   for (let i = 0; i < 5; i++) {
//     if (grid.rows[i].cells[i].style.backgroundColor === "red") {
//       count1++;
//     }
//   }
//   if (count1 === 5) {
//     score++;
//     console.log("Score: " + score);
//     updateScore();
//     return;
//   }

//   let count2 = 0;
//   for (let i = 0; i < 5; i++) {
//     if (grid.rows[i].cells[4 - i].style.backgroundColor === "red") {
//       count2++;
//     }
//   }
//   if (count2 === 5) {
//     score++;
//     console.log("Score: " + score);
//     updateScore();
//     return;
//   }
// }

// function updateScore() {
//   const scoreDisplay = document.getElementById("score");
//   scoreDisplay.textContent = "Score: " + score;
// }


const grid = document.getElementById("grid");
const buttons = grid.getElementsByClassName("button");
const numbers = [];
let score = 0; // Initialize score variable

while (numbers.length < 25) {
  const num = Math.floor(Math.random() * 25) + 1;
  if (!numbers.includes(num)) {
    numbers.push(num);
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].textContent = numbers[i];
  buttons[i].addEventListener("click", function() {
    // Change background color to red
    this.style.backgroundColor = "red";
    checkForWin(); // Check for win after clicking
  });
}

function checkForWin() {
  // Check rows, columns, and diagonals
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < 5; i++) {
    let countRow = 0;
    let countCol = 0;

    for (let j = 0; j < 5; j++) {
      // Check rows
      if (grid.rows[i].cells[j].style.backgroundColor === "red") {
        countRow++;
      }
      // Check columns
      if (grid.rows[j].cells[i].style.backgroundColor === "red") {
        countCol++;
      }
    }

    // Check diagonals
    if (grid.rows[i].cells[i].style.backgroundColor === "red") {
      count1++;
    }
    if (grid.rows[i].cells[4 - i].style.backgroundColor === "red") {
      count2++;
    }

    // Update score if any row or column is completely red
    if (countRow === 5) {
      score++;
    }
    if (countCol === 5) {
      score++;
    }
  }

  // Update score if any diagonal is completely red
  if (count1 === 5 || count2 === 5) {
    score++;
  }

  updateScore(); // Update score display
}

function updateScore() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = "Score: " + score;
}
