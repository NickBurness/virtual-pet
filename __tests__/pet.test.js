const Pet = require('../src/pet');

describe('constructor', () => {
    
    it('returns an object', () => {
      expect(new Pet('Luigi')).toBeInstanceOf(Object);
    });
  })

describe('constructor', () => {

    it('has a initial age of 0', () => {
      const pet = new Pet('Luigi');
      expect(pet.age).toEqual(0);
    });
  });

describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Luigi');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });

describe('hunger', () => {
    it('decreases hunger by 5', () => {
        const pet = new Pet('Luigi');
        pet.hunger();
        expect(pet.hunger).toEqual(0);
      });
    });

describe('fitness', () => {
    it('decreases fitness by 3', () => {
        const pet = new Pet('Luigi');
        pet.fitness();
        expect(pet.fitness).toEqual(10);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('Luigi');
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });
  });

  describe('walk', () => {
    it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('fido');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
    });
  });