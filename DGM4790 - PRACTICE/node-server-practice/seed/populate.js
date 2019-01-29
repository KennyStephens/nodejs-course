const fetch = require('node-fetch');


fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    // console.log(myJson.results);
    const pokeArray = myJson.results;
  });

  