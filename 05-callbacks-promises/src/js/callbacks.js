import { heroes } from '../data/heroe';

// callback return...
export const searchHeroe = (id, callback) => {
  const heroe = heroes[id];

  if (heroe) {
    callback(null, heroe);
  } else {
    // Un error
    callback(`There is no hero with the id ${id}`);
  }

  // callback( heroe );
};
