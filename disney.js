import axios from "axios";

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

getCharacterByName1("mulan");

// Using axios

async function getCharacterByName2(inputName) {
  const formattedName = inputName.toLowerCase();

  if (formattedName.includes(" ")) {
    formattedName.replace(" ", "%20");
  }

  const response = await axios.get(
    `https://api.disneyapi.dev/character?name=${formattedName}`
  );

  const name = response.data.data.name;
  const films = response.data.data.films;
  const videoGames = response.data.data.videoGames;

  console.log(`Character name: ${name} `);
  console.log(`Movie appareances: ${films}`);
  console.log(`Videogame appareances: ${videoGames}`);
}

getCharacterByName2("mulan");

// Access the full docs on the API here: https://disneyapi.dev/docs/
