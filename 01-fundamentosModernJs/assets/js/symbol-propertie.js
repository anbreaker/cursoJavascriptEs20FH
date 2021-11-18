const id = Symbol.for('id')
const active = Symbol.for('active')

const person = {
  [id]:'123',
  [active]: true,
  ['code']: 'XYZ',
  name:'anbreaker',
  surname:'antúnez',
  age:35
}

console.log(Object.keys(person)) 

for (key in person){
  console.log(`${key}: ${person[key]}`) 
}

const symbols = Object.getOwnPropertySymbols(person)

for (i in symbols){
  console.log(symbols[i], Symbol.keyFor(symbols[i])) 
}
