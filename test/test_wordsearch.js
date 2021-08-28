const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });


  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'A', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'R', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'D', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'V', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'A', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'R', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'K', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'S', 'Q', 'U', 'A', 'L'],
    ], 'AARDVARKS')

    assert.isTrue(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'A', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'R', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'D', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'V', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'A', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'R', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'K', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'S', 'Q', 'U', 'A', 'L'],
    ], 'CRUCIVERBALIST')

    assert.isFalse(result);
  });

});