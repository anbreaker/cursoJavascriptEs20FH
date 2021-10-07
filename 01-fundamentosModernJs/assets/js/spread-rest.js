const numbers = [1, 2, 3, 4, 5, 6]

const max = Math.max(...numbers)

console.log(max)

// break the reference
let person1 = {
  name: "anbreaker",
  age: 35,
}

const person2 = { ...person1 }
person2.name = "jeje"

console.log(person1, person2)

// Add properties
const person3 = {
  name: "Magalí",
  age: 35,
  direction: "Calle Gabino",
  drive: true,
  car: true,
  married: false,
}

person1 = { ...person3, ...person1 }

console.log(person1)

// differences between Spread & Rest

const greetingsRest = (greeting, ...names) => {
  for (const i in names) {
    console.log(`${greeting} ${names[i]}`)
  }
}

const greetingsSpread = (greeting, ...names) => {
  console.log(`${greeting} ${names}`)
}

greetingsRest("hello", "anbreaker", "jeje", "Magalí")

const persons = ["anbreaker", "jeje", "Magalí"]
greetingsSpread("Hi!", persons)

const nums = [10, 12]
const nums2 = [2, 3, ...nums, 4, 1]

console.log(nums2)

console.log(typeof (() => {}))
