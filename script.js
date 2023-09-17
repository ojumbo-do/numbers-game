"use strict";

//all the selectors and assigning them a variable
const score0Element = document.querySelector("#score--0");
let score1Element = document.querySelector("#score--1");
let diceElement = document.querySelector(".dice");

//players Sores
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

// player divs
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

//Buttons
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

//initializing the elements (scores) to zero
score0Element.textContent = 0;
score1Element.textContent = 0;

//hiding the dice
diceElement.classList.add("hidden");

// set current score
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};

//rolling the dice
btnRoll.addEventListener("click", function () {
  //generating a random number - display dice
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);

  //show the dice element
  diceElement.classList.remove("hidden");

  //show dice according to the rolled dice numbder
  if (diceRoll !== 1) {
    //display the dice rolled in a pictorial manner
    diceElement.src = `dice-${diceRoll}.png`;

    // add roll to the current score
    currentScore += diceRoll;

    // current0Element.textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //move to the next player
    switchPlayer();
  }

  btnHold.addEventListener("click", function () {
    //add current score to players score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check is players score is =< 100
    if (scores[activePlayer] >= 100) {
      document
        .getElementById(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .getElementById(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }
    //switch to the next player
    switchPlayer();
  });

  //   if (diceRoll === 1) {
  //     diceElement.src = `dice-${diceRoll}.png`;
  //     alert("Player 2's turn");
  //   } else if (diceRoll === 2) {
  //     diceElement.src = `dice-${diceRoll}.png`;
  //   } else if (diceRoll === 3) {
  //     diceElement.src = `dice-${diceRoll}.png`;
  //   } else if (diceRoll === 4) {
  //     diceElement.src = `dice-${diceRoll}.png`;
  //   } else if (diceRoll === 5) {
  //     diceElement.src = `dice-${diceRoll}.png`;
  //   } else if (diceRoll === 6) {
  //     diceElement.src = `dice-${diceRoll}.png`;
  //   }
});
