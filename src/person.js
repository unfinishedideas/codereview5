export class Person {
  constructor (age){
    this.age = age;
  }
  calcAge(){
    if (Number.isNaN(this.age)){
      return "Err: NaN";
    }
    else if (this.age <= 0){
      return "Err: Negative Number";
    }
    else {
      this.mercuryAge = (this.age * .24);
    }
  }
}
