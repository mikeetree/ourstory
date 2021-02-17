const express = require('express');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const Story = require('../../database/story');

const api = express.Router();

const adjectives = [];
const nouns = [];
const plots = [];
const verbs = [];

async function readAndPush(file, array) {
  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    line !== '' && array.push(line);
  }
}

readAndPush(path.join(__dirname, 'temp_adjectives.txt'), adjectives);
readAndPush(path.join(__dirname, 'temp_nouns.txt'), nouns);
readAndPush(path.join(__dirname, 'temp_plot.txt'), plots);
readAndPush(path.join(__dirname, 'temp_verbs.txt'), verbs);

function getRandomInArray (array) {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];

}

api.get('/random', async (req, res) => {
  let rand = Math.random();
  let prompt;

  if (rand > 0.2) {
    prompt = (
      getRandomInArray(nouns) + ' ' +
      getRandomInArray(adjectives) + ' ' +
      getRandomInArray(verbs)
    );
  } else {
    prompt = getRandomInArray(plots);
  }

  res.send(prompt);
});

module.exports = api;
