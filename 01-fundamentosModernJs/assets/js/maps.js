const map = new Map()

map.set('name', 'anbreaker')
map.set('age','35')

console.log(map)
console.log(map.size)
console.log(map.get('name'))
console.log(map.has('age'))

map.delete('name')
console.log(map.has('name'))
console.log(map.get('name'))

map.set('age')
console.log(map)

map.clear()
console.log(map)

const map2 = new Map([ [ 'name', 'anbreaker' ], [ 'age','35' ] ])
console.log(map2)

map2.forEach((value, key, mapOrigin) => {
  console.log(`Key: ${key} - Value: ${value}`)
  console.log(mapOrigin)
})

