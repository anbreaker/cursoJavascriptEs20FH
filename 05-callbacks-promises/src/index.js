import { searchHeroe as searchHeroeCB } from './js/callbacks';
import { searchHeroe as searchHeroePR } from './js/promises';
import './styles.css';

// callback.js
const heroeId = 'capi';
searchHeroeCB(heroeId, (error, heroe) => {
  if (error) {
    console.error(error);
  } else {
    console.log(heroe);
  }
});

// promises.js
const heroeId1 = 'capi1';
// const heroeId1 = 'capi';
const heroeId2 = 'spider';

// searchHeroePR(heroeId1).then((heroe) =>
//   // console.log(`Sending to the mission ${heroeId1}`)
//   searchHeroePR(heroeId2).then((heroe) => {
//     console.log(`Sending to the mission ${heroeId1} & ${heroeId2}`);
//   })
// );

Promise.all([searchHeroePR(heroeId1), searchHeroePR(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`Sending to the mission ${heroe1.name} & ${heroe2.name}`);
  })
  .catch((error) => console.error(error))
  .finally(() => {
    console.log('Finally Promise.');
  });

// promises race...
import { slowPromise, mediumPromise, fastPromise } from './js/promises';

slowPromise.then(console.log);
mediumPromise.then(console.log);
fastPromise.then(console.log);

// Only resolve the most fastly promise
Promise.race([slowPromise, mediumPromise, fastPromise])
  .then(console.log)
  .catch(console.warn);
