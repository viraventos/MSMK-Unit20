const FizzBuzz = require('./fizzbuzz');
const ColorService = require('./color.service');

function main() {
  // 1. Instanciamos el servicio de colores
  const colorService = new ColorService();

  // 2. Instanciomos FizzBuzz inyectandole el servicio de colores
  const fizzbuzzApp = new FizzBuzz(colorService);

  console.log(colorService.colorize("=== FIZZBUZZ CON INXECCIÓN DE DEPENDENCIAS ===\n", "CYAN"));

  for (let i = 1; i <= 100; i++) {
    const output = fizzbuzzApp.execute(i);
    
    // Formateamos el número en verde y que ocupe tres espacios, y luego el fizzbuzz
    const numeroFormateado = colorService.colorize(i.toString().padStart(3, ' '), "GREEN");
    
    console.log(`${numeroFormateado}: ${output}`);
  }
}

// Ejecutamos la aplicación
main();
