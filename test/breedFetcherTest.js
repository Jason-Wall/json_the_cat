
// IMPORTS //////////
const assert = require('chai').assert;
const { fetchBreedDescription } = require('../breedFetcher');

describe('fetchBreedDescription:', () => {
  
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('siberian', (error, body) => {
      assert.equal(error, null);
      const expect = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expect, body.trim());
      done();
    });
  });
  
  it('returns an error if an invalid breed is passed in (Lebron James)', (done) => {
    fetchBreedDescription('Lebron James', (error, body) => {
      assert.equal(error, 'Error - No breed found.');
      done();
    });
  });
  
  it('returns an error if an multiple breeds are available (a)', (done) => {
    fetchBreedDescription('a', (error, body) => {
      assert.equal(error, 'Error - Multiple breeds found.');
      done();
    });
  });

});
