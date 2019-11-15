export class Person {
  constructor (age){
    this.age = age;
  }
  calcAge(){
    if (Number.isNaN(this.age)){
      return "Err: NaN";
    }
  }
}
