const items = new Set()

items.add(10)
items.add(7)
items.add(1)
items.add(11)
items.add(11)
items.add("11")

console.log(items.size)
console.log(items)
console.log(items.has('11'))

const items2 = new Set([1,2,3,4,4,4])
console.log(items2)

// Remove elements
items2.delete(4)
console.log(items2, items2.size)

items2.clear()
console.log(items2)

const persons = new Set(['anbreaker', 'jeje', 'Magalí'])
persons.forEach((value, key, setOriginal) => {
  console.log(value, key, setOriginal)
  console.log(persons === setOriginal)
})

// Set to Array
const nums = [1,2,3,4,5,6,7]
const setNums = new Set(nums)
console.log(setNums)

const arrayNums = [...setNums]
console.log(arrayNums)

const deleteDuplicates = (elements)=>{
  const setElements = new Set(elements)
  return [...setElements]
}

console.log(deleteDuplicates(items)) 

