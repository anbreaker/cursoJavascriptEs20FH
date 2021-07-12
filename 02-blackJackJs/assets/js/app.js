// Module Design Pattern.
(() => {
  ('use strict');

  let deck = [];
  const types = ['C', 'D', 'H', 'S'];
  const bigCards = ['A', 'J', 'Q', 'K'];

  let pointsPlayers = [];

  // HTML References
  const btnNewGame = document.querySelector('#newGame');
  const btnOrderCard = document.querySelector('#orderCard');
  const btnStop = document.querySelector('#stop');

  const divCardsPlayers = document.querySelectorAll('.divCards');
  const smallPointer = document.querySelectorAll('small');

  // main
  const initGame = (numPlayers = 2) => {
    deck = createDeck();

    pointsPlayers = [];
    for (let i = 0; i < numPlayers; i++) {
      pointsPlayers.push(0);
    }

    smallPointer.forEach((element) => (element.innerText = 0));

    divCardsPlayers.forEach((element) => (element.innerHTML = ''));

    btnOrderCard.disabled = false;
    btnStop.disabled = false;
  };

  // New Deck
  const createDeck = () => {
    deck = []; // Reset deck

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

    return _.shuffle(deck);
  };

  const getCard = () => {
    if (deck.length === 0) throw 'Deck Empty!';

    return deck.pop();
  };

  const getValueCard = (card) => {
    const value = card.substring(0, card.length - 1);

    // CDSH --> 10; A --> 11
    return isNaN(value) ? (value === 'A' ? 11 : 10) : Number(value);
  };

  // Turn -1 Last player is Computer
  const counterPoint = (card, turn) => {
    pointsPlayers[turn] += getValueCard(card);

    smallPointer[turn].innerText = pointsPlayers[turn];

    return pointsPlayers[turn];
  };

  const createdCard = (card, turn) => {
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('deck');

    divCardsPlayers[turn].append(imgCard);
  };

  const whoWin = () => {
    const [pointMin, pointComputer] = pointsPlayers;

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

  // Computer Turn
  const computerTurn = (pointMin) => {
    let pointComputer = 0;
    const turn = pointsPlayers.length - 1;

    do {
      const card = getCard();

      pointComputer = counterPoint(card, turn);

      createdCard(card, turn);
    } while (pointComputer < pointMin && pointMin <= 21);

    whoWin();
  };

  // <------------ Events JsVanilla ------------>
  btnOrderCard.addEventListener('click', () => {
    const card = getCard();

    const pointGamer = counterPoint(card, 0);

    createdCard(card, 0);

    if (pointGamer > 21) {
      console.warn('You Lose!');

      btnOrderCard.disabled = true;
      btnStop.disabled = true;

      computerTurn(pointGamer);
    } else if (pointGamer === 21) {
      console.warn('You Win!');

      btnOrderCard.disabled = true;
      btnStop.disabled = true;
    }
  });

  btnStop.addEventListener('click', () => {
    btnOrderCard.disabled = true;
    btnStop.disabled = true;

    computerTurn(pointsPlayers[0]);
  });

  btnNewGame.addEventListener('click', () => {
    initGame();
  });
})();
