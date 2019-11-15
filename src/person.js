export class Person {
  constructor (age, health){
    this.age = age;
    this.healthInput = health;
    this.totalHealth = 80;
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
      return "good";
    }
  }
  calcHealth(){
    for (let i = 0; i < this.healthInput.length; i++){
      if (Number.isNaN(this.healthInput[i])){
        return "Err: NaN";
      }
      // else if (this.healthInput[i] <= 0){
      //   return "Err: Negative Number";
      // }
      else {
        this.totalHealth += this.healthInput[i];
      }
    }
  }
}
