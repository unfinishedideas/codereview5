import { Person } from './../src/person.js';

describe('Person', () => {

  test('should check if persons age is a number', () => {
    var newPerson = new Person("sup");
    expect(newPerson.calcAge()).toEqual("Err: NaN");
  });


});
