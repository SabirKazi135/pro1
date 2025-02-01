fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    return response.json(); // parse the JSON response
  })
  .then((data) => {
    console.log(data); // Access the 'name' property of the Pokémon
  })
  .catch((error) => {
    console.log(error);
  });
