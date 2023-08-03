import axios from "axios";

// Using fetch inside an asyncronous function to get one idea of activity
async function getAnActivityIdea1() {
  const response = await fetch(`https://www.boredapi.com/api/activity`);
  const data = await response.json();

  const activityIdea = data.activity;
  const type = data.type;
  const numberOfParticipants = data.participants;

  console.log(`Activity idea: ${activityIdea}`);
  console.log(`Type: ${type}`);
  console.log(`numberOfParticipants: ${numberOfParticipants}`);
}

getAnActivityIdea1();

// Using axios inside an asyncronous function to get one idea of activity
async function getAnActivityIdea2() {
  const response = await axios.get(`https://www.boredapi.com/api/activity`);

  const activityIdea = response.data.activity;
  const type = response.data.type;
  const numberOfParticipants = response.data.participants;

  console.log(`Activity idea: ${activityIdea}`);
  console.log(`Type: ${type}`);
  console.log(`numberOfParticipants: ${numberOfParticipants}`);
}

getAnActivityIdea2();

//Now, I will use axios again in a function that accepts type and participants as inputs
// That way, it should return an activity idea filtered by those criteria.

async function getActivityIdeaWithParameters(type, numberOfParticipants) {
  type = type.toLowerCase();

  const response = await axios.get(
    `https://www.boredapi.com/api/activity?type=${type}&participants=${numberOfParticipants}`
  );

  const activityIdea = response.data.activity;

  console.log(`Activity idea: ${activityIdea}`);
  console.log(`Type: ${type}`);
  console.log(`numberOfParticipants: ${numberOfParticipants}`);
}

getActivityIdeaWithParameters("recreational", 1);

// Read the API docs here: https://www.boredapi.com/documentation
