// IMPORTS ////////////////
const request = require('request');


// HARDCODE TEST /////////
const breed  = 'russian';

// COMMAND LINE TEST ////////
// const breed = process.argv[2];

// BAD URL TEST
// const url = `https://api.theatapi.com/v1/breeds/search?q=${breed}`;




// MAIN THREAD ////////////
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(`${url}`, (error, response, body) => {
  if (error) {
    console.log('ERROR: ', error.message);
    process.exit();
  }
  console.log('statusCode:', response && response.statusCode);
  const bodyJSON = JSON.parse(body);
  console.log(bodyJSON);
});