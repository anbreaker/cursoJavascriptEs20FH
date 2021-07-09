// Primitivos por Valor
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Objets por referencia
let juan = { nombre: 'Juan' };
let ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
};

let peter = { nombre: 'peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutasSlice = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas, otrasFrutasSlice });
