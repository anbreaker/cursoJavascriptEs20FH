import { heroes } from '../data/heroe';

export const searchHeroe = (id) => {
  const heroe = heroes[id];

  return new Promise((resolve, reject) => {
    if (heroe) {
      setTimeout(() => resolve(heroe), 1000);
    } else {
      reject(`There is no hero with the id ${id}`);
    }
  });
};

export const searchHeroeAsync = async (id) => {
  const heroe = heroes[id];

  if (heroe) return heroe;
  else throw Error(`There is no hero with the id ${id}`);
};

const slowPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Slow promise'), 2000);
});

const mediumPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Medium promise'), 1500);
});

const fastPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promesa Rápida'), 1000);
  // setTimeout(() => reject('Promesa Rápida'), 1000);
});

export { slowPromise, mediumPromise, fastPromise };
