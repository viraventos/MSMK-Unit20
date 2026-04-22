const { fizzbuzz } = require('./fizzbuzz');

function runFizzBuzz() {
  console.log("--- Ejecutando FizzBuzz del 1 al 100 ---");
  
  for (let i = 1; i <= 100; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
}

// Ejecutamos la función
runFizzBuzz();
