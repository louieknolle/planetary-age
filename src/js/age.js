export default class Age {
  constructor(age, lifeExpect) {
    this.earthAge = age;
    this.lifeExpectancy= lifeExpect;
    this.earthMultiplier =  Math.floor((this.earthAge * 365));
  }
  
  calcMercuryAge() {
    return this.earthMultiplier / 87.97;
  }

  calcVenusAge() {
    return this.earthMultiplier / 224.7;
  }

  calcMarsAge() {
    return this.earthMultiplier / 686.2;
  }

  calcJupiterAge() {
    return Math.floor(this.earthAge / 11.86);
  }

  mercuryYearsLeft() {
    const mercuryYearsLeft = Math.floor((this.lifeExpectancy - this.earthAge) * 365 / 87.97);
    const borrowedMercuryTime = Math.floor((this.earthAge - this.lifeExpectancy) * 365 / 87.97);
    if (this.earthAge <= this.lifeExpectancy) {
      return mercuryYearsLeft;
    } else {
      return borrowedMercuryTime;
    }
  }
  venusYearsLeft() {
    const venusYearsLeft = Math.floor((this.lifeExpectancy - this.earthAge) * 365 / 224.7);
    const borrowedVenusTime = Math.floor((this.earthAge - this.lifeExpectancy) * 365 / 224.7);
    if (this.earthAge <= this.lifeExpectancy) {
      return venusYearsLeft;
    } else {
      return borrowedVenusTime;
    }
  }
  marsYearsLeft() {
    const marsYearsLeft = Math.floor((this.lifeExpectancy - this.earthAge) / 1.88);
    const borrowedMarsTime = Math.floor((this.earthAge - this.lifeExpectancy) / 1.88);
    if (this.earthAge <= this.lifeExpectancy) {
      return marsYearsLeft;
    } else {
      return borrowedMarsTime;
    }
  }
  jupiterYearsLeft() {
    const jupiterYearsLeft = Math.floor((this.lifeExpectancy - this.earthAge) / 11.86);
    const borrowedJupiterTime = Math.floor((this.earthAge - this.lifeExpectancy) / 11.86);
    if (this.earthAge <= this.lifeExpectancy) {
      return jupiterYearsLeft;
    } else {
      return borrowedJupiterTime;
    } 
  }
} 
