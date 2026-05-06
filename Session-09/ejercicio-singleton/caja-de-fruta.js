export class CajaDeFruta  {
    constructor (name, contador) {
        this.name = name;
        this.manzanas = Math.floor(Math.random() * 100);
        this.naranjas = 100 - this.manzanas;
        this.contador = contador;
    }

    contar() {
        console.log(`Caja de fruta ${this.name}:   Hay ${this.manzanas} manzanas, y ${this.naranjas} naranjas.`);
        this.contador.acumula(this.manzanas, this.naranjas);
    }
}