/**
 *   Algoritmo FizzBuzz
 * 
 *   - Si el número es multiplo de 3, en lugar del número imprime "Fizz"
 *   - Si el número es multiplo de 5, en lugar del número imprime "Buzz"
 *   - Si el número es multiplo de 3 y de 5, en lugar del número imprime "FizzBuzz"
 *   - En cualquier otro caso, simplemente imprime el número
 * 
 */

 function fizzbuzz(n) {
    if (typeof n !== 'number') return "Error";
    
    let resultado = "";
  
    if (n % 3 === 0) {
      resultado += "Fizz";
    }

    if (n % 5 === 0) {
      resultado += "Buzz";
    }
  
    return resultado || n.toString();
  }
  
 
module.exports = { fizzbuzz };
  