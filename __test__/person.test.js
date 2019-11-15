import { Person } from './../src/person.js';

describe('Person', () => {

  test('should check if persons age is a number', () => {
    var newPerson = new Person(NaN);
    expect(newPerson.calcAge()).toEqual("Err: NaN");
  });

  test('should check if persons age is a positive integer', () => {
    var newPerson = new Person(-2000);
    expect(newPerson.calcAge()).toEqual("Err: Negative Number");
  });

});
