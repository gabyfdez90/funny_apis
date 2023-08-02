import axios from "axios";

// Using fetch inside an asyncronous function to get one random fact

async function getRandomUselessFact1() {
  const response = await fetch(
    `https://uselessfacts.jsph.pl/api/v2/facts/random?language=en`
  );
  const data = await response.json();
  const randomFact = data.text;
  console.log(randomFact);
}

getRandomUselessFact1();

// Using axios inside an asyncronous function to get one random fact
// Step 1: Install accions with 'npn install axios'

async function getRandomUselessFact2() {
  const response = await axios.get(
    `https://uselessfacts.jsph.pl/api/v2/facts/random?language=en`
  );
  const randomFact = response.data.text;
  console.log(randomFact);
}

getRandomUselessFact2();

// API documentation available here: https://uselessfacts.jsph.pl/
