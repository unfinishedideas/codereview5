import { Person } from './../src/person.js';

describe('Person', () => {
  let newPerson;
  // MercuryRatio is only a let here for testing purposes so that it can be changed
  let mercuryRatio;
  const jupiterRatio = 11.86;

  beforeEach(function() {
    newPerson = new Person(90, [5,5,5]);
    mercuryRatio = .24;
  });

  // Calc Planet Age
  test('calcPlanetAge() should take an age and planetRatio and return the correct age rounded down as an int', () => {
    expect(newPerson.calcPlanetAge(newPerson.age, mercuryRatio)).toEqual(375);
  });
  test('calcPlanetAge() should recognize negative numbers if passed into age and return Err: Negative Number', () => {
    newPerson.age = -55;
    expect(newPerson.calcPlanetAge(newPerson.age, mercuryRatio)).toEqual("Err: Negative Number");
  });
  test('calcPlanetAge() should recognize NaN if passed into age and return Err: NaN', () => {
    newPerson.age = NaN;
    expect(newPerson.calcPlanetAge(newPerson.age, mercuryRatio)).toEqual("Err: NaN");
  });
  test('calcPlanetAge() should recognize NaN if passed into planetRatio and return Err: NaN', () => {
    mercuryRatio = NaN;
    expect(newPerson.calcPlanetAge(newPerson.age, mercuryRatio)).toEqual("Err: NaN");
  });

  // CalcHealth
  test('calcHealth() should recognize NaN if found in HealthInput array and return Err: NaN', () => {
    newPerson.healthInput = [5, NaN, 5]
    expect(newPerson.calcHealth(mercuryRatio)).toEqual("Err: NaN");
  });
  test('calcHealth() should add up all the values in HealthInput, add 80 to them and then return the result divided by the planetRatio value', () => {
    expect(newPerson.calcHealth(mercuryRatio)).toEqual(395);
  });

  // Get Difference
  test('getDifference() should simply return the planetaryAge subtracted by the Expected Age', () => {
    let planetaryAge = 100;
    let expectedAge = 90;
    expect(newPerson.getDifference(planetaryAge, expectedAge)).toEqual(10);
  });
});
