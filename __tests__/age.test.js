import Age from '../src/js/age.js';

describe('Age', () => {
  let age;
  beforeEach(() => {
    age = new Age(30, 76);
  });

  test('should correctly create an Age object', () => {
    expect(age.earthAge).toEqual(30);
    expect(age.lifeExpectancy).toEqual(76);
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


});