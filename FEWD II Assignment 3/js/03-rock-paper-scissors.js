/*eslint-env browser*/

window.alert("Let's play Rock, Paper, Scissors!");

function getRandomElement(arr) {
    "use strict";
    if (arr && arr.length) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}
getRandomElement();

function playGame() {
    "use strict";
    var player1 = window.promt("Choose one: Rock, Paper or Scissors.");
    var player2 = getRandomElement(["Rock", "Paper", "Scissors"]);
    if (player1 === "Rock" && player2 === "Rock") {
        window.alert("It's a tie! We both chose Rock.");
    } else if (player1 === "Rock" && player2 === "Paper") {
        window.alert("You win! You chose Rock, and I chose Paper.");
    } else if (player1 === "Rock" && player2 === "Scissors") {
        window.alert("You lose. You chose Rock, and I chose Scissors!");
    } else if (player1 === "Paper" && player2 === "Paper") {
        window.alert("It's a tie! We both chose Paper.");
    } else if (player1 === "Paper" && player2 === "Rock") {
        window.alert("You win! You chose Paper, and I chose Rock.");
    } else if (player1 === "Paper" && player2 === "Scissors") {
        window.alert("You lose. You chose Paper, and I chose Scissors.");
    } else if (player1 === "Scissors" && player2 === "Scissors") {
        window.alert("It's a tie! We both chose Scissors.");
    } else if (player1 === "Scissors" && player2 === "Rock") {
        window.alert("You lose. You chose Scissors, and I chose Rock.");
    } else if (player1 === "Scissors" && player2 === "Paper") {
        window.alert("You win! You chose Scissors, and I chose Paper.");
    } else {
        window.alert("Oops! You chose something else. Please try again.");
    }
}
playGame();


