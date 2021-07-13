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

const ironman = new Person('Tony Stark', 'Ironman', 'I am Ironman');
// console.log(ironman);
// ironman.whoIAm();

const spiderman = new Person('Peter Parkar', 'Spiderman', 'I am Spiderman!');
console.log(spiderman);
spiderman.whoIAm();
spiderman.myPhrase();
// spiderman.nemesis = 'Green Goblin'; ---> Acept, but not is good practise, in the future private var JS...
spiderman.setFavouriteFood = 'Aunt May is Cherry Pie Spider Man Ice Cream';

console.log(`Favourite Food --> ${spiderman.getFavouriteFood}`);

console.log(spiderman);

// Person._count = 2; --> Can be posible change but not good practices

console.log('Static Count', Person._count);
console.log(Person.getCount);
Person.message();

// Create Static Methods outside the instance: (Not is a good practice)
Person.outsideProperty = 'Outside Property';

console.log(Person.outsideProperty);
console.log(Person);
