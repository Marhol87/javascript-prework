const STONE = "kamień";
const PAPER = "papier";
const SCISSORS = "nożyce";
const UNKNOWN = "nieznany ruch";

function playGame(playerInput) {
  if (playerInput == 1) {
    return STONE;
  } else if (playerInput == 2) {
    return PAPER;
  } else if (playerInput == 3) {
    return SCISSORS;
  }

  function clearMessages();{}

  function getMoveName(randomNumber) {
    if (randomNumber == 1) {
      return STONE;
    } else if (randomNumber == 2) {
      return PAPER;
    } else if (randomNumber == 3) {
      return SCISSORS;
    }
    return UNKNOWN;
  }
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage("Mój ruch to: " + computerMove);

  /*let playerInput = prompt(
    "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  );*/

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage("Twój ruch to: " + playerMove);

  function displayResult(argComputerMove, argPlayerMove) {
    console.log("moves:", argComputerMove, argPlayerMove);
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
    if (argComputerMove == STONE && argPlayerMove == PAPER) {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == PAPER && argPlayerMove == SCISSORS) {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == SCISSORS && argPlayerMove == STONE) {
      printMessage("Ty wygrywasz!");
    }
    if (argComputerMove == STONE && argPlayerMove == SCISSORS) {
      printMessage("Komputer wygrywa!");
    } else if (argComputerMove == PAPER && argPlayerMove == STONE) {
      printMessage("Komputer wygrywa!");
    } else if (argComputerMove == SCISSORS && argPlayerMove == PAPER) {
      printMessage("Komputer wygrywa!");
    }
    if (argComputerMove == STONE && argPlayerMove == STONE) {
      printMessage("Remis!");
    } else if (argComputerMove == PAPER && argPlayerMove == PAPER) {
      printMessage("Remis!");
    } else if (argComputerMove == SCISSORS && argPlayerMove == SCISSORS) {
      printMessage("Remis!");
    }
    if (argComputerMove == STONE && argPlayerMove == UNKNOWN) {
      printMessage("Nieznany ruch!");
    } else if (argComputerMove == PAPER && argPlayerMove == UNKNOWN) {
      printMessage("Nieznany ruch!");
    } else if (argComputerMove == SCISSORS && argPlayerMove == UNKNOWN) {
      printMessage("Nieznany ruch!");
    }
  }

  displayResult(computerMove, playerMove);
}

