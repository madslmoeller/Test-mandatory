/* 
• Length
o Conversion between the Metric and Imperial systems
o It only covers centimeters and inches, respectively
o Length class. Methods:
    ▪ Constructor
        •   @param The numeric measure to convert with up to two decimals
        •   @param The system of said measure (Metric or Imperial)
    ▪convert()
        •   It implements an if (if the system is Metric then ... otherwise ...)
        •   @return The value of the conversionwith up to two decimals
*/

class Length {
  constructor(measure, system) {
    this.measure = measure;
    this.system = system;
  }

  convert() {
    if (this.system === "I") {
      return (this.measure * 2.54).toFixed(2);
    } else {
      return (this.measure * 0.393701).toFixed(2);
    }
  }
}

const firstLength = new Length(20, "I");
const secondLength = new Length(7, "M");

console.log(firstLength);
console.log(firstLength.convert());
console.log(secondLength);
console.log(secondLength.convert());
