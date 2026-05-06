export class Customer {
    constructor(name) {
      this.name = name;
    }
  
    update(product) {
      console.log(`👤 ${this.name} was notified about: ${product}`);
    }
  }
