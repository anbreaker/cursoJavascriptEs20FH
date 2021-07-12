const iam = {
  name: 'anbreaker',
  age: 35,
  print() {
    console.log(`Name: ${this.name} - Age: ${this.age}`);
  },
};

const jeje = {
  name: 'jeje',
  age: 28,
  print() {
    console.log(`Name: ${this.name} - Age: ${this.age}`);
  },
};

const curro = {
  name: 'curro',
  age: 3,
};

// ...etc

// iam.print();

// JsVanilla Class
function Person(name, age) {
  console.log('Exec this line!');
  this.name = name;
  this.age = age;

  this.print = function () {
    console.log(`Name: ${this.name} - Age: ${this.age}`);
  };
}

const maria = new Person('María', 28);

console.log(maria);
maria.print();

const magali = new Person('Magalí', 1);
console.log(magali);
magali.print();
