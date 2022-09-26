/*
• Temperature
    o Conversion between the Celsius, Fahrenheit, and Kelvin scales
    o Temperature class. Methods:
▪ Constructor
    • @param The numeric measure to convert with up to two decimals
    • @param The temperature scale of said measure
▪ convert()
    • It implements a switch with the 6 possible conversions 
    (C to F, C to K, F to C, F to K, K to C, K to F)
    • Each switch calls a method that performs the specific conversion
    • @param The destination temperature scale
    • @return The value of the conversion with up to two decimals
*/

class Temperature {
  constructor(measure, temperature) {
    this.measure = measure;
    this.temperature = temperature;
  }

  convert(measures) {
    switch (measures) {
      case "C to F":
        return this.temperature * 1.8 + 32;
        break;

      case "C to K":
        return this.temperature + 273.15;
        break;

      case "F to C":
        return (this.temperature - 32) * 0.5556;
        break;

      case "F to K":
        return ((this.temperature - 32) * 5) / 9 + 273.15;
        break;

      case "K to C":
        return this.temperature - 273.15;
        break;

      case "K to F":
        return 1.8 * (this.temperature - 273) + 32;
        break;
      default:
        return "Wrong Format";
    }
  }
}
var convertVar = "K to F";
const myTemperature = new Temperature(convertVar, 70);
console.log(myTemperature);
console.log(myTemperature.convert(convertVar));
