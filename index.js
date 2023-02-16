// IMPORTS //////////
const {fetchBreedDescription} = require('./breedFetcher');

// HARDCODE TEST /////////
// const breed  = 'siberian';

// COMMAND LINE TEST ////////
// const breed = process.argv[2];


//MAIN THREAD //////////

fetchBreedDescription(breed, (error, body) => {
  if (error) {
    console.log('ERROR: ', error);
    process.exit();
  }
  console.log(body);
});
