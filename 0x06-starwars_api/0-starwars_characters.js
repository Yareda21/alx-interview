#!/usr/bin/node

const request = require('request');

const movieURL = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request(movieURL, function (err, res, body) {
  if (err) throw err;
  const characters = JSON.parse(body).characters;
  logCharacter(characters, 0);
});

const logCharacter = (characters, x) => {
  if (x === characters.length) return;
  request(characters[x], function (err, res, body) {
    if (err) throw err;
    console.log(JSON.parse(body).name);
    logCharacter(characters, x + 1);
  });
};
