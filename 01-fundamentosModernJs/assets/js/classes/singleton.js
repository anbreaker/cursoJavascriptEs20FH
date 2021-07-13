class Singleton {
  static instance; // undefined
  name = '';

  constructor(name = '') {
    // Only a single instance is executed
    if (!!Singleton.instance) return Singleton.instance;

    Singleton.instance = this;

    this.name = name;

    // return this;
  }
}

const instance1 = new Singleton('Ironman');
console.log(`Name in instace1 is: ${instance1.name}`);

const instance2 = new Singleton('Spiderman');
console.log(`Name in instace2 is: ${instance2.name}`);
