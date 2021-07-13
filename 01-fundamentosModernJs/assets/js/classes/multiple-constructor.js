class Person {
  static byObject(person) {
    const { name, surname, country } = person;

    return new Person(name, surname, country);
  }

  constructor(name, surname, country) {
    this.name = name;
    this.surname = surname;
    this.country = country;
  }

  getInfo() {
    console.log(`Info: ${this.name}, ${this.surname}, Country: ${this.country}`);
  }
}

const name1 = 'Magalí';
const surname1 = 'Antúnez';
const country2 = 'Spain-Portugal';

const anbreaker = {
  name: 'anbreaker',
  surname: 'Antúnez',
  country: 'Spain',
};

const person1 = new Person(name1, surname1, country2);
const person2 = Person.byObject(anbreaker);

person1.getInfo();
person2.getInfo();
