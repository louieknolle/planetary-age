export default class Age {
  constructor(age, lifeExpect) {
    this.earthAge = age;
    this.lifeExpectancy= lifeExpect;
  }

  calcMercuryAge() {
    return Math.floor((this.earthAge * 365) / 87.97);
  }

  calcVenusAge() {
    return Math.floor((this.earthAge * 365) / 224.7);
  }

  calcMarsAge() {
    return Math.floor(this.earthAge / 1.88);
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
}
