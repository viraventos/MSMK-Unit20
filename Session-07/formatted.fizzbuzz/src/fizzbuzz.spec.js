/**
 * Test Unitario Base de FizzBuzz formateado.
 * 
 * Este test es incorrecto porque depende del servicio de coloreado.
 * Los test unitarios solamente comprueban una clase, no pueden depender de otras.
 */

const FizzBuzz = require('./fizzbuzz');
const ColorService = require('./color.service');

describe('FizzBuzz Suite', () => {
  let fizzbuzz;

  beforeEach(() => {
    let coloreador = new ColorService();
    fizzbuzz = new FizzBuzz(coloreador);
  });

  test('debe devolver "1" para el número 1', () => {
    expect(fizzbuzz.execute(1)).toBe("1");
  });

  test('debe devolver "Fizz" para múltiplos de 3', () => {
    expect(fizzbuzz.execute(3)).toBe("Fizz");
    expect(fizzbuzz.execute(6)).toBe("Fizz");
  });

  test('debe devolver "Buzz" para múltiplos de 5', () => {
    expect(fizzbuzz.execute(5)).toBe("Buzz");
    expect(fizzbuzz.execute(10)).toBe("Buzz");
  });

  test('debe devolver "FizzBuzz" para múltiplos de 15 (3 y 5)', () => {
    expect(fizzbuzz.execute(15)).toBe("FizzBuzz");
    expect(fizzbuzz.execute(30)).toBe("FizzBuzz");
  });

  test('debe gestionar casos que no son números', () => {
    expect(fizzbuzz.execute("hola")).toBe("Error");
  });

});
