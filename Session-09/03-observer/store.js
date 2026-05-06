export class Store {
    constructor() {
      this.observers = [];
    }
  
    // Subscribe an observer
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    // Unsubscribe an observer
    unsubscribe(observer) {
      this.observers = this.observers.filter(o => o !== observer);
    }
  
    // Notify all observers
    notify(product) {
      this.observers.forEach(o => o.update(product));
    }
  
    // Change of state
    addNewProduct(product) {
      console.log(`📦 New product added: ${product}`);
      this.notify(product);
    }
  }