const getPoke = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    //console.log(data.results);
    
    const arrayName= data.results.map(poke => poke.name)
    const arrayName2= data.results.filter(poke => poke.name !== 'bulbasaur')
    console.log(arrayName2)
  } catch (error) {
    console.log(error);
  }
};

getPoke()