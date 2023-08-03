import axios from "axios";

// These two functions requests Numbers API passing as parameters a number and
// a type of fact on it.

// The Numbers API allows to select among these four types of facts:
// trivia, math,year, date

// First function: uses fetch to request a trivia fact:

async function getTriviaFactOnNumber(number) {
  const response = await fetch(`http://numbersapi.com/${number}/trivia?json`);

  const data = await response.json();
  const fact = data.text;
  console.log(fact);
}

getTriviaFactOnNumber(25);

// Second function: uses axios library to request a math related fact

async function getMathFactOnNumber(number) {
  const response = await axios.get(`http://numbersapi.com/${number}/math?json`);

  const fact = response.data.text;
  console.log(fact);
}

getMathFactOnNumber(25);

// Get more information on Numbers API here: http://numbersapi.com/#42
