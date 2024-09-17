//283K = 10ºC = 50ºF

const kelvin = 0;

// this is the value about const Kelvin 

let celsius = kelvin - 273;

// celsius is 273 grades minus kelvin

let newton = celsius * (33/100);

//Newton scale use this celsius equation

 newton = Math.floor(newton);

/*When fahrenheit be converted to celsius, we get often a decimal number */

console.log(`The temperature is ${newton} degrees Newton.`)
