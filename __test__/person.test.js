import { Person } from './../src/person.js';

describe('Person', () => {

  // Testing AgeCalc -----------------------------------------------------------
  test('should check if persons age is a number', () => {
    let newPerson = new Person(NaN, [50]);
    expect(newPerson.calcAge()).toEqual("Err: NaN");
  });
  test('should check a persons age and 0 or catch negative numbers', () => {
    let newPerson = new Person(-2000, [50]);
    expect(newPerson.calcAge()).toEqual("Err: Negative Number");
  });
  test('should take a person objects age and return mercury years', () => {
    let newPerson = new Person(20, [50]);
    newPerson.calcAge();
    expect(newPerson.mercuryAge).toEqual(4);
  });
  test('should take a person objects age and return Venus years', () => {
    let newPerson = new Person(20, [50]);
    newPerson.calcAge();
    expect(newPerson.venusAge).toEqual(12);
  });
  test('should take a person objects age and return Mars years', () => {
    let newPerson = new Person(20, [50]);
    newPerson.calcAge();
    expect(newPerson.marsAge).toEqual(37);
  });
  test('should take a person objects age and return Jupiter years', () => {
    let newPerson = new Person(20, [50]);
    newPerson.calcAge();
    expect(newPerson.jupiterAge).toEqual(237);
  });

  // Testing Health Calc ------------------------------------------------------
  test('should take a person objects health and catch NaN', () => {
    let newPerson = new Person(20, [NaN]);
    expect(newPerson.calcHealth()).toEqual("Err: NaN");
  });
  test('should take a person objects health and catch 0 or negative numbers', () => {
    let newPerson = new Person(20, [-5]);
    expect(newPerson.calcHealth()).toEqual("Err: Negative Number");
  });
});
