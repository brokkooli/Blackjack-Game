let hasBlackJack = false;
let isAlive = false;
let message;
let cards = [];
let sum = 0;
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

let player = {
  name: "Pascal",
  chips: 16,
};

let playerEl = document.getElementById("player-el");
playerEl.innerText = player.name + ": $" + player.chips;

deactivate();

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  activate();
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();

  if (sum === 21) {
    deactivate();
  }
}

function renderGame() {
  cardsEl.innerText = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.innerText = "Sum: " + sum;

  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum > 21) {
    message = "You're out of the game!";
    isAlive = false;
  } else {
    message = "You've got blackjack!";
    hasBlackJack = true;
  }

  messageEl.innerText = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
  deactivate();
}

function activate() {
  if (isAlive === true && hasBlackJack === false) {
    document.getElementById("new-card").classList.remove("deactivated");
  }
}

function deactivate() {
  if (isAlive === false || hasBlackJack === true) {
    document.getElementById("new-card").classList.add("deactivated");
  }
}
