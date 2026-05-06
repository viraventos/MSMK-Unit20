/** 
 * Simulamos un camión de fruta y tenemos que contar manzanas y naranjas
 * 
 */

import { CajaDeFruta } from "./caja-de-fruta.js";
import { Contador } from "./contador.js";

// Monto un array con 80 cajas de fruta, cada una tiene 100 frutas en total
// Al crear las cajas les paso un objeto contador, al que le van a decir cuantas 
// manzanas y naranjas tiene cada una.
let cajas = [];

for (let n=1; n<= 80; n++) {
    let contador = new Contador();
    cajas.push(new CajaDeFruta(`Caja ${n}`, contador));
}

// Lanzo en paralelo el conteo de todas las cajas.
cajas.forEach(c => c.contar());

