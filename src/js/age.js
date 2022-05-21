export default class Age {
  constructor(age, lifeExpect) {
    this.earthAge = age;
    this.lifeExpectancy= lifeExpect;
  }

  calcMercuryAge() {
    return Math.floor((this.earthAge * 365) / 88);
  }
}