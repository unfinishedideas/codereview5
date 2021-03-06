export class Person {
  constructor (age, health){
    this.age = age;
    this.healthInput = health;
  }
  // Makes all the necessary calculations using various Person methods and assigns them to properties of the person object.
  doTheStuff(){

    // Set as constants since they don't change.
    const age = this.age;
    const earthRatio = 1;
    const mercuryRatio = .24;
    const venusRatio = .62;
    const marsRatio = 1.88;
    const jupiterRatio = 11.86;

    // Get all the ages on various planets
    this.mercuryAge = this.calcPlanetAge(age, mercuryRatio);
    this.venusAge = this.calcPlanetAge(age, venusRatio);
    this.marsAge = this.calcPlanetAge(age, marsRatio);
    this.jupiterAge = this.calcPlanetAge(age, jupiterRatio);

    // Get all the Expected Ages
    this.expectedEarthAge = this.calcHealth(earthRatio);
    this.expectedMercuryAge = this.calcHealth(mercuryRatio);
    this.expectedMarsAge = this.calcHealth(marsRatio);
    this.expectedVenusAge = this.calcHealth(venusRatio);
    this.expectedJupiterAge = this.calcHealth(jupiterRatio);

    // If older than expectancy... Get all the differences
    if (this.expectedEarthAge < age){
      this.earthDifference = this.getDifference(age, this.expectedEarthAge);
      this.mercuryDifference = this.getDifference(this.mercuryAge, this.expectedMercuryAge);
      this.venusDifference = this.getDifference(this.venusAge, this.expectedVenusAge);
      this.marsDifference = this.getDifference(this.marsAge, this.expectedMarsAge);
      this.jupiterDifference = this.getDifference(this.jupiterAge, this.expectedJupiterAge);
    }
  }
  // Takes a users age and planet ratio and returns a rounded down division of the two to get the user's age on that planet
  calcPlanetAge(age, planetRatio){
    if (Number.isNaN(age) || Number.isNaN(planetRatio)){
      return "Err: NaN";
    }
    else if (age <= 0){
      return "Err: Negative Number";
    }
    else {
      const planetaryAge =  Math.floor(age / planetRatio);
      return planetaryAge;
    }
  }

  // Adds each value in a personObj's healthInput array to an expected age which is then divided by planet ratio and returned.
  calcHealth(planetRatio){
    let expectedAge = 80;
    for (let i = 0; i < this.healthInput.length; i++){
      if (Number.isNaN(this.healthInput[i])){
        return "Err: NaN";
      }
      else {
        expectedAge += this.healthInput[i];
      }
    }
    expectedAge /= planetRatio;
    return Math.floor(expectedAge);
  }
  getDifference(planetaryAge, expectedAge){
    return planetaryAge - expectedAge;
  }
}
