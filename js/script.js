function getMoveName(randomNumber) {
  if (randomNumber == 1) {
    return "kamień";
  } else if (randomNumber == 2) {
    return "papier";
  } else if (randomNumber == 3) {
    return "nożyce";
  }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else if (randomNumber == 3) {
  computerMove = "nożyce";
}*/

printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(randomNumber);

/*if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else if (playerInput == "3") {
  playerMove = "nożyce";
}*/

printMessage("Twój ruch to: " + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
  console.log("moves:", argComputerMove, argPlayerMove);
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  if (argComputerMove == "kamień" && argPlayerMove == "papier") {
    printMessage("Ty wygrywasz!");
  }
  if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
    printMessage("Komputer wygrywa!");
  }
  if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
    printMessage("Remis!");
  }
  if (argComputerMove == "papier" && argPlayerMove == "kamień") {
    printMessage("Komputer wygrywa!");
  }
  if (argComputerMove == "papier" && argPlayerMove == "papier") {
    printMessage("Remis!");
  }
  if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
    printMessage("Ty wygrywasz!");
  }
  if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
    printMessage("Ty wygrywasz!");
  }
  if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
    printMessage("Komputer wygrywa!");
  }
  if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
    printMessage("Remis!");
  }
  if (argComputerMove == "kamień" && argPlayerMove == "nieznany ruch") {
    printMessage("Nieznany ruch!");
  }
  if (argComputerMove == "papier" && argPlayerMove == "nieznany ruch") {
    printMessage("Nieznany ruch!");
  }
  if (argComputerMove == "nożyce" && argPlayerMove == "nieznany ruch") {
    printMessage("Nieznany ruch!");
  }
}

/*if (computerMove == "kamień" && playerMove == "papier") {
  printMessage("Ty wygrywasz!");
}
if (computerMove == "kamień" && playerMove == "nożyce") {
  printMessage("Komputer wygrywa!");
}
if (computerMove == "kamień" && playerMove == "kamień") {
  printMessage("Remis!");
}
if (computerMove == "papier" && playerMove == "kamień") {
  printMessage("Komputer wygrywa!");
}
if (computerMove == "papier" && playerMove == "papier") {
  printMessage("Remis!");
}
if (computerMove == "papier" && playerMove == "nożyce") {
  printMessage("Ty wygrywasz!");
}
if (computerMove == "nożyce" && playerMove == "kamień") {
  printMessage("Ty wygrywasz!");
}
if (computerMove == "nożyce" && playerMove == "papier") {
  printMessage("Komputer wygrywa!");
}
if (computerMove == "nożyce" && playerMove == "nożyce") {
  printMessage("Remis!");
}
if (computerMove == "kamień" && playerMove == "nieznany ruch") {
  printMessage("Nieznany ruch!");
}
if (computerMove == "papier" && playerMove == "nieznany ruch") {
  printMessage("Nieznany ruch!");
}
if (computerMove == "nożyce" && playerMove == "nieznany ruch") {
  printMessage("Nieznany ruch!");
}*/
