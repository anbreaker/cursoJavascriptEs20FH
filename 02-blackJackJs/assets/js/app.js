let deck = [];
const types = ['C', 'D', 'H', 'S'];
const bigCards = ['A', 'J', 'Q', 'K'];

let pointGamer = 0;
let pointComputer = 0;

// HTML References
const btnNewGame = document.querySelector('#newGame');
const btnOrderCard = document.querySelector('#orderCard');
const btnStop = document.querySelector('#stop');

const divGamerDeck = document.querySelector('#gamer-deck');
const divComputerDeck = document.querySelector('#computer-deck');

const smallPointer = document.querySelectorAll('small');

// New Deck
const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (const type of types) {
      deck.push(i + type);
    }
  }

  for (const type of types) {
    for (const bigCard of bigCards) {
      deck.push(bigCard + type);
    }
  }

  // console.log(deck);
  deck = _.shuffle(deck);
  // console.log(deck);

  return deck;
};

createDeck();

const getCard = () => {
  if (deck.length === 0) throw 'Deck Empty!';

  const card = deck.pop();

  return card;
};

// getCard();

const getValueCard = (card) => {
  const value = card.substring(0, card.length - 1);

  // CDSH --> 10; A --> 11
  return isNaN(value) ? (value === 'A' ? 11 : 10) : Number(value);
};

// Computer Turn
const computerTurn = (pointMin) => {
  do {
    const card = getCard();

    pointComputer += getValueCard(card);

    smallPointer[1].innerText = pointComputer;

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('deck');
    divComputerDeck.append(imgCard);

    if (pointMin > 21) break;
  } while (pointComputer < pointMin && pointMin <= 21);

  setTimeout(() => {
    if (pointComputer === pointMin) {
      alert('Nobody Win! :(');
    } else if (pointMin > 21) {
      alert('Computer Win!');
    } else if (pointComputer > 21) {
      alert('Gamer Win!');
    } else {
      alert('Computer Win!');
    }
  }, 100);
};

// Events JsVanilla
btnOrderCard.addEventListener('click', () => {
  const card = getCard();

  pointGamer += getValueCard(card);

  smallPointer[0].innerText = pointGamer;

  const imgCard = document.createElement('img');
  imgCard.src = `assets/cartas/${card}.png`;
  imgCard.classList.add('deck');
  divGamerDeck.append(imgCard);

  if (pointGamer > 21) {
    console.warn('You Lose!');
    alert('Computer Win!');

    btnOrderCard.disabled = true;
    btnStop.disabled = true;
  } else if (pointGamer === 21) {
    console.warn('You Win!');

    btnOrderCard.disabled = true;
    btnStop.disabled = true;
  }
});

btnStop.addEventListener('click', () => {
  btnOrderCard.disabled = true;
  btnStop.disabled = true;
  computerTurn(pointGamer);
});

btnNewGame.addEventListener('click', () => {
  deck = [];
  deck = createDeck();

  pointGamer = 0;
  pointComputer = 0;
  smallPointer[0].innerHTML = 0;
  smallPointer[1].innerHTML = 0;

  divGamerDeck.innerHTML = '';
  divComputerDeck.innerHTML = '';

  btnOrderCard.disabled = false;
  btnStop.disabled = false;
});
