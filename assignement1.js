//variable declaration of kelvin temperature
const kelvin = 293;
//convert kelvin to celsius
const celsius = kelvin - 273;
//calculate fahrenheit temperature  using celsius
let fahrenheit = celsius * (9 / 5) + 32;
//rounding fahrenheit temperature using flour() method
fahrenheit = Math.floor(fahrenheit);
//Use console.log and string interpolation to log the temperature in fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//convert celsius temperature into newton
let newton = celsius * (33 / 100);
//round down the newton temperature
newton = Math.floor(newton);
//use console.log and string interpolation to log newton temperature
console.log(`The temperature is${newton} degrees Newton. `);
