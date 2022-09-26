/*
• Weight
    o Conversion between the Metric and Imperial systems
    o It only covers kilograms and pounds, respectively
    o Free class implementation
*/

class Weight {
  constructor(measure, system) {
    this.measure = measure;
    this.system = system;
  }

  convert() {
    if (this.system === "KG") {
      return this.measure / 0.45359237;
    } else {
      return this.measure * 0.45359237;
    }
  }
}

const firstWeight = new Weight(120, "P");
const secondWeight = new Weight(95, "KG");

console.log(firstWeight);
console.log(firstWeight.convert());
console.log(secondWeight);
console.log(secondWeight.convert());
