import Age from '../src/js/age.js';

describe('Age', () => {
  let age;
  let oldAge;
  beforeEach(() => {
    age = new Age(30, 85);
    oldAge = new Age(90, 85);
  });

  test('should correctly create an Age object', () => {
    expect(age.earthAge).toEqual(30);
    expect(age.lifeExpectancy).toEqual(85);
  });

  test('should correctly determine age of user in Mercury years', () => {
    expect(age.calcMercuryAge()).toEqual(124);
  });

  test('should correctly determine age of user in Venus years', () => {
    expect(age.calcVenusAge()).toEqual(48);
  });

  test('should correctly determine age of user in Mars years', () => {
    expect(age.calcMarsAge()).toEqual(15);
  });

  test('should correctly determine age of user in Jupiter years', () => {
    expect(age.calcJupiterAge()).toEqual(2);
  });

  test('should correctly determine years left to live on Mercury', () => {
    expect(age.mercuryYearsLeft()).toEqual(228);
  });

  test('should correctly determine years lived past life expectancy on Mercury', () => {
    expect(oldAge.mercuryYearsLeft()).toEqual();
  });


});