export class Person {
  constructor (age, health){
    this.age = age;
    this.health = health;
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
      this.jupiterAge = Math.floor(this.age * 11.86);
    }
  }
}
