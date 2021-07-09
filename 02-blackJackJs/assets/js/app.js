let deck = [];
const types = ['C', 'D', 'H', 'S'];
const bigCards = ['A', 'J', 'Q', 'K'];

const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (const type of types) {
      deck.push(i + type);
    }
  }

  for (const type of types) {
    for (const bigCard of bigCards) {
      deck.push(type + bigCard);
    }
  }
  console.log(deck);
  deck = _.shuffle(deck);
  console.log(deck);
};

createDeck();
