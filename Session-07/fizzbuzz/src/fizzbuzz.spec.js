const { fizzbuzz } = require('./fizzbuzz');

describe('FizzBuzz Suite', () => {
  
  test('debe devolver "1" para el número 1', () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  test('debe devolver "Fizz" para múltiplos de 3', () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
  });

  test('debe devolver "Buzz" para múltiplos de 5', () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  test('debe devolver "FizzBuzz" para múltiplos de 15 (3 y 5)', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });

  test('debe gestionar casos que no son números', () => {
    expect(fizzbuzz("hola")).toBe("Error");
  });

});
