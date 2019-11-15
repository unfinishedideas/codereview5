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
      this.mercuryAge = Math.floor(this.age * .24);
      this.venusAge = Math.floor(this.age * .62);
      this.marsAge = Math.floor(this.age * 1.88);
    }
  }
}
