import { Person } from './../src/person.js';

describe('Person', () => {

  // Testing AgeCalc -----------------------------------------------------------
  test('should check if persons age is a number', () => {
    const newPerson = new Person(NaN, [5, 5, 5]);
    expect(newPerson.calcAge()).toEqual("Err: NaN");
  });
  test('should check a persons age and 0 or catch negative numbers', () => {
    const newPerson = new Person(-2000, [5, 5, 5]);
    expect(newPerson.calcAge()).toEqual("Err: Negative Number");
  });
  test('should take a person objects age and return "good" if everything checks out', () => {
    const newPerson = new Person(20, [5, 5, 5]);
    expect(newPerson.calcAge()).toEqual("good");
  });
  test('should take a person objects age and return mercury years', () => {
    const newPerson = new Person(20, [5, 5, 5]);
    newPerson.calcAge();
    expect(newPerson.mercuryAge).toEqual(83);
  });
  test('should take a person objects age and return Venus years', () => {
    const newPerson = new Person(20, [5, 5, 5]);
    newPerson.calcAge();
    expect(newPerson.venusAge).toEqual(32);
  });
  test('should take a person objects age and return Mars years', () => {
    const newPerson = new Person(20, [5, 5, 5]);
    newPerson.calcAge();
    expect(newPerson.marsAge).toEqual(10);
  });
  test('should take a person objects age and return Jupiter years', () => {
    const newPerson = new Person(20, [5, 5, 5]);
    newPerson.calcAge();
    expect(newPerson.jupiterAge).toEqual(1);
  });

  // Testing Health Calc ------------------------------------------------------
  test('should take a person objects healthInput and catch NaN', () => {
    const newPerson = new Person(20, [5, NaN, 5]);
    expect(newPerson.calcHealth()).toEqual("Err: NaN");
  });
  test('should take a person objects healthInput and catch no input', () => {
    const newPerson = new Person(20, [5, "", 5]);
    expect(newPerson.calcHealth()).toEqual("Err: NaN");
  });
  test('should loop through a person objects healthInput array and add each value to the expectedAge property', () => {
    const newPerson = new Person(20, [5, 5, 5]);
    newPerson.calcHealth();
    expect(newPerson.expectedAge).toEqual(95);
  });
});
