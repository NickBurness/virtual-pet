const Pet = require('../src/pet.js');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Luigi')).toBeInstanceOf(Object);
    });
  });