/**
 * Test Unitario de FizzBuzz formateado.
 * 
 * Este test inyecta un mock en lugar del servicio de coloreado: CORRECTO
 */

 const FizzBuzz = require('./fizzbuzz');

 describe('FizzBuzz Suite', () => {
   let fizzbuzz;
   let mockColorService;
 
   beforeEach(() => {
     // Create a mock of ColorService
     mockColorService = {
       colorize: jest.fn((text, color) => `[${color}]${text}`)
     };
 
     // Instantiate FizzBuzz with the mocked dependency
     fizzbuzz = new FizzBuzz(mockColorService);
   });
 
   test('debe devolver "1" para el número 1, sin formatear', () => {
     expect(fizzbuzz.execute(1)).toBe("1");
     expect(mockColorService.colorize).not.toHaveBeenCalled();
   });
 
   test('debe devolver "Fizz" para múltiplos de 3, formateado en cian', () => {
     expect(fizzbuzz.execute(6)).toBe("[cyan]Fizz");
     expect(mockColorService.colorize).toHaveBeenCalledWith('Fizz', 'cyan');
   });
 
   test('debe devolver "Buzz" para múltiplos de 5, formateado en amarillo', () => {
     expect(fizzbuzz.execute(10)).toBe("[yellow]Buzz");
     expect(mockColorService.colorize).toHaveBeenCalledWith('Buzz', 'yellow');
   });
 
   test('debe devolver "FizzBuzz" para múltiplos de 15, formateado en magenta', () => {
     expect(fizzbuzz.execute(15)).toBe("[magenta]FizzBuzz");
     expect(mockColorService.colorize).toHaveBeenCalledWith('FizzBuzz', 'magenta');
   });
 
   test('debe gestionar casos que no son números', () => {
     expect(fizzbuzz.execute("hola")).toBe("Error");
     expect(mockColorService.colorize).not.toHaveBeenCalled();
   });
 
 });
 