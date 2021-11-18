let firstName = Symbol('First Name')
let secondName = Symbol('Second Name')

let person = {
  [secondName]:'Magalí'
} 

person[firstName] = 'anbreaker'

console.log(person[firstName])

console.log(person[secondName])

console.log('\t', firstName,'\n \t' ,secondName, '\n')

let symbol1 = Symbol('symbol')
let symbol2 = Symbol('symbol')

console.log(symbol1 == symbol2)
console.log(Object.is(symbol1, symbol2))
console.log(typeof symbol1)