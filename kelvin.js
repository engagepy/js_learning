//constant kelvin value
const kelvin = 311;

// celsius is 273 less than kelvin
let celsius = kelvin - 273;
//formula for celsius to farenheit and rounded of with Math.floor()
let fahrenheit = Math.floor(celsius*(9/5)+32);

let newton = Math.floor(celsius*(33/100))

console.log(`The temperature is

- ${celsius} degrees 
- ${fahrenheit} Fahrenheit 
- ${kelvin} K 
- ${newton} Newton.

Formulas are:

newton = celsius*(33/100)

fahrenheit = celsius*(9/5)+32
`)




