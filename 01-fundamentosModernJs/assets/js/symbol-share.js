const userID = Symbol.for("userID")
const obj = {}

obj[userID] = '12345'
console.log(obj[userID])
console.log('\t', userID)

const userID2 = Symbol.for("userID")

console.log(userID == userID2)
console.log(userID === userID2)
console.log(Object.is(userID, userID2))

console.log(obj[userID2])
console.log(userID2)

let id = Symbol.for('unique id')
console.log(Symbol.keyFor(id))

let id2 = Symbol.for('unique id')
console.log(Symbol.keyFor(id2))

let id3 = Symbol('unique id')
console.log(Symbol.keyFor(id3))
