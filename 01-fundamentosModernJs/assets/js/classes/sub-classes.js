// inheritance
class Person {
  // Statics Methods
  static _count = 0;

  static get getCount() {
    return Person._count + ' instances';
  }

  static message() {
    console.log(this.name, '<---'); // Shoul be undefined...
    console.log('Hello World I am a static Method');
  }

  // Definitions
  name = '';
  code = '';
  phrase = '';
  food = '';

  constructor(name, code, phrase) {
    this.name = name;
    this.code = code;
    this.phrase = phrase;

    Person._count++;
  }

  // Setters and getters
  set setFavouriteFood(food) {
    this.food = food.toUpperCase();
  }

  get getFavouriteFood() {
    return `Favourite food of ${this.name} is ${this.food}`;
  }

  whoIAm() {
    console.log(`I am ${this.name}, and my secret code is ${this.code}`);
  }

  myPhrase() {
    this.whoIAm();
    console.log(`${this.code} said ${this.phrase}`);
  }
}

// inheritance
class Heroe extends Person {
  // Definitions
  clan = 'Without Clan';

  constructor(name, code, phrase) {
    super(name, code, phrase);

    this.clan = 'The Avengers';
  }

  whoIAm() {
    console.log(`I am ${this.name} and my clan is ${this.clan}`);
    super.whoIAm();
  }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'I am Spiderman!');
console.log(spiderman);
spiderman.whoIAm();
