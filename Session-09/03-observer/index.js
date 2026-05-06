/**
 * Example to ilustrate Observer Pattern
 * 
 * Store -> Observable object
 * Customer -> Observer objects
 */

import { Customer } from "./customer.js";
import { Store } from "./store.js";

const store = new Store();

const alicia = new Customer('Alice');
const roberto = new Customer('Bob');

// Subscribe observers
store.subscribe(alicia);
store.subscribe(roberto);

// Trigger a change
store.addNewProduct('Laptop');

// Unsubscribe one observer
store.unsubscribe(alicia);

// Another change
store.addNewProduct('Smartphone');


