export class Contador {

    static instance;

    constructor() { 
      //// TODO: Hay que que meter código para 
      //// Instanciar el contador como singleton

      // Inicializa contadores
      this.manzanas = 0;
      this.naranjas = 0;
      }
      
  
    acumula(manzanas, naranjas) {
      this.manzanas += manzanas;
      this.naranjas += naranjas;

      console.log(`Sumadas al contador ${manzanas} manzanas y ${naranjas} naranjas  ====> Acumulado ${this.manzanas} manzanas, ${this.naranjas} naranjas.`);
    }

    leer() {
      console.log(`Llevamos acumuladas ${this.manzanas} manzanas, ${this.naranjas} naranjas.`);
    }
  }
  
  
