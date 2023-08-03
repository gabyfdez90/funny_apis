import axios from "axios";

// Use fetch and async functions to get a Chuck Norris's joke.

async function getRandomGeekJoke1() {
  const response = await fetch(
    `https://geek-jokes.sameerkumar.website/api?format=json`
  );
  const data = await response.json();
  const joke = data.joke;
  console.log(joke);
}

getRandomGeekJoke1();

// Using axios

async function getRandomGeekJoke2() {
  const response = await axios.get(
    `https://geek-jokes.sameerkumar.website/api?format=json`
  );
  const joke = response.data.joke;
  console.log(joke);
}

getRandomGeekJoke2();
