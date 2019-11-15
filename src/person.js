export class Person {
  constructor (age){
    this.age = age;
  }
  calcAge(){
    if (Number.isNaN(this.age)){
      return "Err: NaN";
    }
    if (this.age < 0){
      return "Err: Negative Number";
    }
  }
}
