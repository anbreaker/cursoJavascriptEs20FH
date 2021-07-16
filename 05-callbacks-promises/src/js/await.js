import { searchHeroeAsync, searchHeroe } from './promises';

export const heroesIds = ['capi', 'iron', 'spider'];
// const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );
const heroesPromises = heroesIds.map(searchHeroe);

export const getHeroesArr = async () => {
  return await Promise.all(heroesIds.map(searchHeroe));
};

export const getHeroeAwait = async (id) => {
  try {
    const heroe = await searchHeroeAsync(id);

    return heroe;
  } catch (err) {
    console.log('CATCH!!!');

    return {
      name: 'Sin nombre',
      power: 'Sin poder',
    };
  }
};

export const heroesCicle = async () => {
  console.time('HeroesCicle');

  // heroesPromesas.forEach( async(p) => console.log( await p ));

  for await (const heroe of heroesPromises) {
    console.log(heroe);
  }

  console.timeEnd('HeroesCicle');

  // const heroes = await Promise.all( heroesPromesas );
  // heroes.forEach( heroe => console.log(heroe) );
};

export const heroeIfAwait = async (id) => {
  if ((await searchHeroeAsync(id)).name === 'Ironman') {
    console.log('Is the best!');
  } else {
    console.log('Naaaa');
  }
};
