// Use fetch and async function to get info on one Disney character

async function getCharacterByName1(inputName) {
  const formattedName = inputName.toLowerCase();

  if (formattedName.includes(" ")) {
    formattedName.replace(" ", "%20");
  }

  const response = await fetch(
    `https://api.disneyapi.dev/character?name=${formattedName}`
  );
  const data = await response.json();

  const name = data.data.name;
  const films = data.data.films;
  const videoGames = data.data.videoGames;
  const allies = data.data.allies;
  const enemies = data.data.enemies;

  console.log(`Character name: ${name} `);
  console.log(`Movie appareances: ${films}`);
  console.log(`Videogame appareances: ${videoGames}`);
  //   console.log(`Allies: ${allies}`);
  //   console.log(`Enemies: ${enemies}`);
}
getCharacterByName1("mickey mouse");
