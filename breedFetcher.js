// IMPORTS ////////////////
const request = require('request');

// BAD URL TEST
// const url = `https://api.theatapi.com/v1/breeds/search?q=${breed}`;

// MAIN THREAD ////////////

const fetchBreedDescription = (breed, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(`${url}`, (error, response, body) => {
    const bodyJSON = JSON.parse(body);

    //Test edge cases
    if (bodyJSON.length === 0) {
      error = 'Error - No breed found.';
    }
    if (bodyJSON.length > 1) {
      error = 'Error - Multiple breeds found.';
    }

    if (error) {
      callback(error, null);
    } else {
      callback(null, bodyJSON[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };